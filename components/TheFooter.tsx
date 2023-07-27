import Link from 'next/link';
import facebook_icon from '../public/social_network/facebook/faceboock_footer.svg'
import instagram_icon from '../public/social_network/instagram/instagram_footer.svg'
import twiter_icon from '../public/social_network/twiter/tywiter_footer.svg'
import Image from 'next/image';

const TheFooter = () => {
    return (
        <footer className=' w-screen bg-over-gray flex justify-end h-[172px] lg:h-11'>
            <div className="mx-4 flex lg:flex-row lg:w-full w-screen h-full items-start lg:items-center justify-between flex-col">

                <div className='w-full h-[33%] lg:w-[33.3%] relative bottom-0'> <div className="
            font-extrabold  text-white not-italic absolute -bottom-4 lg:bottom-0.5 text-sm 
            lg:left-24 h-full select-none">
                    Vikgame
                </div></div>
                <div className='flex lg:min-w-[33%] justify-between w-full lg:w-[33%]'>
                    <Link href={'https://www.instagram.com/vikingi_online/?igshid=MmJiY2I4NDBkZg%3D%3D'}
                        className=' flex   h-full'>
                        <Image src={instagram_icon} alt="Insagram" width={16} height={16} />
                        <div className='text-sm font-normal text-white mx-2'>
                            Instagram
                        </div>
                    </Link>
                    <Link href={''} className=' flex   h-full '>
                        <Image src={facebook_icon} alt="Facebook" width={16} height={16} />
                        <div className='text-sm font-normal text-white mx-2'>
                            Facebook
                        </div>
                    </Link>
                    <Link href={''} className=' flex   h-full '>
                        <Image src={twiter_icon} alt="Twitter" width={16} height={16} />
                        <div className='text-sm font-normal text-white mx-2'>
                            Twiter
                        </div>
                    </Link>
                </div>
                <div className='w-full h-[33%] lg:w-[33.3%]  lg:h-full  text-[#77767E] mx-2 text-[10px] font-medium flex lg:items-center lg:justify-end justify-center items-end select-none my-[10px] lg:my-0'>
                    © 2023 Vikgame. Все права защищены.
                </div>
            </div>
        </footer>

    );
}
export default TheFooter