import * as React from "react";

interface ValueObject {
	[themeName: string]: string;
}

export interface UseThemeProps {
	/** List of all available theme names */
	themes: string[];
	/** Forced theme name for the current page */
	forcedTheme?: string | undefined;
	/** Update the theme */
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	/** Active theme name */
	theme?: string | undefined;
	/** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
	systemTheme?: "dark" | "light" | undefined;
}

export type Attribute = `data-${string}` | "class";

export interface ThemeProviderProps extends React.PropsWithChildren {
	/** List of all available theme names */
	themes?: string[] | undefined;
	/** Forced theme name for the current page */
	forcedTheme?: string | undefined;
	/** Whether to switch between dark and light themes based on prefers-color-scheme */
	enableSystem?: boolean | undefined;
	/** Disable all CSS transitions when switching themes */
	disableTransitionOnChange?: boolean | undefined;
	/** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
	enableColorScheme?: boolean | undefined;
	/** Key used to store theme setting in localStorage */
	storageKey?: string | undefined;
	/** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
	defaultTheme?: string | undefined;
	/** HTML attribute modified based on the active theme. Accepts `class`, `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.), or an array which could include both */
	attribute?: Attribute | Attribute[] | undefined;
	/** Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value */
	value?: ValueObject | undefined;
	/** Nonce string to pass to the inline script for CSP headers */
	nonce?: string | undefined;
}

const colorSchemes = ["light", "dark"];
const MEDIA = "(prefers-color-scheme: dark)";
const isServer = typeof window === "undefined";
const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = { setTheme: (_) => {}, themes: [] };

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider = (props: ThemeProviderProps): React.ReactNode => {
	const context = React.useContext(ThemeContext);

	// Ignore nested context providers, just passthrough children
	if (context) return props.children;
	return <Theme {...props} />;
};

const defaultThemes = ["light", "dark"];

const Theme = ({
	forcedTheme,
	disableTransitionOnChange = false,
	enableSystem = true,
	enableColorScheme = true,
	storageKey = "theme",
	themes = defaultThemes,
	defaultTheme = enableSystem ? "system" : "light",
	attribute = "data-theme",
	value,
	children,
	nonce,
}: ThemeProviderProps) => {
	const [theme, setThemeState] = React.useState(() =>
		getTheme(storageKey, defaultTheme),
	);
	const attrs = !value ? themes : Object.values(value);

	// apply selected theme function (light, dark, system)
	const applyTheme = React.useEffectEvent((theme: string | undefined) => {
		let resolved = theme;
		if (!resolved) return;

		// If theme is system, resolve it before setting theme
		if (theme === "system" && enableSystem) {
			resolved = getSystemTheme();
		}

		const name = value ? value[resolved] : resolved;
		const enable = disableTransitionOnChange ? disableAnimation() : null;
		const d = document.documentElement;

		const handleAttribute = (attr: Attribute) => {
			if (attr === "class") {
				d.classList.remove(...attrs);
				if (name) d.classList.add(name);
			} else if (attr.startsWith("data-")) {
				if (name) {
					d.setAttribute(attr, name);
				} else {
					d.removeAttribute(attr);
				}
			}
		};

		if (Array.isArray(attribute)) attribute.forEach(handleAttribute);
		else handleAttribute(attribute);

		if (enableColorScheme) {
			const fallback = colorSchemes.includes(defaultTheme)
				? defaultTheme
				: null;
			const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback;
			// @ts-expect-error
			d.style.colorScheme = colorScheme;
		}

		enable?.();
	});

	// Set theme state and save to local storage
	const setTheme = React.useEffectEvent((value: any) => {
		const newTheme = typeof value === "function" ? value(theme) : value;
		setThemeState(newTheme);

		// Save to storage
		try {
			localStorage.setItem(storageKey, newTheme);
		} catch {
			// Unsupported
		}
	});

	const handleMediaQuery = React.useEffectEvent(
		(e: MediaQueryListEvent | MediaQueryList) => {
			const resolved = getSystemTheme(e);

			if (theme === "system" && enableSystem && !forcedTheme) {
				applyTheme("system");
			} else if (enableSystem) {
				applyTheme(resolved);
			}
		},
	);

	// Always listen to System preference
	React.useEffect(() => {
		const media = window.matchMedia(MEDIA);

		media.addEventListener("change", handleMediaQuery);
		handleMediaQuery(media);

		return () => media.removeEventListener("change", handleMediaQuery);
	}, [handleMediaQuery]);

	// localStorage event handling, allow to sync theme changes between tabs
	React.useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key !== storageKey) {
				return;
			}

			// If default theme set, use it if localstorage === null (happens on local storage manual deletion)
			const theme = e.newValue || defaultTheme;
			setTheme(theme);
		};

		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [setTheme, storageKey, defaultTheme]);

	// Whenever theme or forcedTheme changes, apply it
	React.useEffect(() => {
		applyTheme(forcedTheme ?? theme);
	}, [forcedTheme, theme, applyTheme]);

	const providerValue = React.useMemo(
		() => ({
			theme,
			setTheme,
			forcedTheme,
			themes: enableSystem ? [...themes, "system"] : themes,
		}),
		[theme, setTheme, forcedTheme, enableSystem, themes],
	);

	return (
		<ThemeContext.Provider value={providerValue}>
			<ThemeScript
				{...{
					forcedTheme,
					storageKey,
					attribute,
					enableSystem,
					enableColorScheme,
					defaultTheme,
					value,
					themes,
					nonce,
				}}
			/>
			{children}
		</ThemeContext.Provider>
	);
};

const ThemeScript = React.memo(
	({
		forcedTheme,
		storageKey,
		attribute,
		enableSystem,
		enableColorScheme,
		defaultTheme,
		value,
		themes,
		nonce,
	}: Omit<ThemeProviderProps, "children"> & { defaultTheme: string }) => {
		const scriptArgs = JSON.stringify([
			attribute,
			storageKey,
			defaultTheme,
			forcedTheme,
			themes,
			value,
			enableSystem,
			enableColorScheme,
		]).slice(1, -1);

		return (
			<script
				suppressHydrationWarning
				nonce={typeof window === "undefined" ? nonce : ""}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed to inject script before hydration
				dangerouslySetInnerHTML={{
					__html: `(${script.toString()})(${scriptArgs})`,
				}}
			/>
			// <></>
		);
	},
);

// Helpers
const getTheme = (key: string, fallback?: string) => {
	if (isServer) return undefined;
	let theme: string | undefined;
	try {
		theme = localStorage.getItem(key) || undefined;
	} catch {
		// Unsupported
	}
	return theme || fallback;
};

const disableAnimation = () => {
	const css = document.createElement("style");
	css.appendChild(
		document.createTextNode(
			"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
		),
	);
	document.head.appendChild(css);

	return () => {
		// Force restyle
		(() => window.getComputedStyle(document.body))();

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css);
		}, 1);
	};
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
	const event = e ?? window.matchMedia(MEDIA);
	const isDark = event.matches;
	const systemTheme = isDark ? "dark" : "light";
	return systemTheme;
};

/*
  This file is adapted from next-themes to work with tanstack start.
  next-themes can be found at https://github.com/pacocoursey/next-themes under the MIT license.
*/

export const script: (...args: any[]) => void = (
	attribute,
	storageKey,
	defaultTheme,
	forcedTheme,
	themes,
	value,
	enableSystem,
	enableColorScheme,
) => {
	const el = document.documentElement;
	const systemThemes = ["light", "dark"];
	const isClass = attribute === "class";
	const classes =
		isClass && value
			? themes.map((t: string | number) => value[t] || t)
			: themes;

	function updateDOM(theme: string) {
		if (isClass) {
			el.classList.remove(...classes);
			el.classList.add(theme);
		} else {
			el.setAttribute(attribute, theme);
		}

		setColorScheme(theme);
	}

	function setColorScheme(theme: string) {
		if (enableColorScheme && systemThemes.includes(theme)) {
			el.style.colorScheme = theme;
		}
	}

	function getSystemTheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	if (forcedTheme) {
		updateDOM(forcedTheme);
	} else {
		try {
			const themeName = localStorage.getItem(storageKey) || defaultTheme;
			const isSystem = enableSystem && themeName === "system";
			const theme = isSystem ? getSystemTheme() : themeName;
			updateDOM(theme);
		} catch {
			// Ignore error
		}
	}
};
