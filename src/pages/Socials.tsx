import LinksList from '../components/LinksList';
import SocialLinks from '../components/SocialLinks';

export default function SocialsPage() {
    return (
        <div className="grid place-content-center-center">
            <img alt='Siddhesh Agarwal' src="https://github.com/siddhesh-agarwal.png" className='w-[200px] h-[200px] block mx-auto mt-6 mb-4 rounded-[50%]' />
            <h1 className='text-[2rem] text-black font-semibold text-center mb-2'>
                Siddhesh Agarwal
            </h1>
            <LinksList />
            <SocialLinks />
        </div>
    )
}
