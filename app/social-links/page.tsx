"use client";
import LinksList from '@/components/LinksList';
import SocialLinks from '@/components/SocialLinks';
import Image from "next/image";

export default function SocialsPage() {
    return (
        <div className="grid place-content-center-center">
            <Image alt="Siddhesh Agarwal" width={200} height={200} src="https://github.com/siddhesh-agarwal.png" className="block mx-auto mt-6 mb-4 rounded-[50%]" />
            <h1 className="text-[2rem] text-black font-semibold text-center mb-2">
                Siddhesh Agarwal
            </h1>
            <LinksList />
            <SocialLinks />
        </div>
    )
}
