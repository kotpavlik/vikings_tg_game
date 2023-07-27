'use client'
import bgImage from "../public/bg_images/5.png"
import { inter, murecho } from "@/app/layout";
import TheButton from "./TheButton";
import telegramm_icon from "../public/icons/Vector.svg"
import { useRouter } from 'next/navigation'
import Image, { StaticImageData } from 'next/image';

import person_1 from '../public/test_photo/45.png'
import person_2 from '../public/test_photo/53.png'
import person_3 from '../public/test_photo/76.png'
import person_4 from '../public/test_photo/79.png'
import person_5 from '../public/test_photo/98.png'
import { useWindowSize } from "./hooks/useWidthHook";

// This array created for app without databases
type peaoplesPhotoType = StaticImageData[]
const Peoples: peaoplesPhotoType = [person_1, person_2, person_3, person_4, person_5]



const TheFirstBlock = () => {

    const size = useWindowSize()


    const background_image = {
        backgroundImage:
            `url(${bgImage.src})`
    }
    const router = useRouter()

    const redirectOnGameHandler = () => {
        router.push('') // There should be telegram link 
    }
    const redirectAboutGameHandler = () => {
        router.push('') // There should be about game link 
    }
    return (
        <div className="mx-auto w-[96%] lg:h-[648px] h-[618px] bg-olive rounded-[32px] relative left-0">
            <h1 className={`${inter.className} 
            lg:absolute lg:left-10 lg:top-10 max-w-[540px] max-h-[150px] 
            not-italic font-bold lg:text-left lg:text-6xl text-over-gray z-10
            relative left-0 top-3 text-[37px] text-center my-3`}>
                Викинги Online игра в
                <span className={`${murecho.className} font-bold text-blue select-none cursor-pointer`}> Telegram</span>
            </h1>
            <div
                style={background_image}
                className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:right-[20px] relative h-[265px] w-full top-0 right-0">
            </div>
            <p className="lg:absolute lg:left-10 lg:top-[230px] max-w-sm lg:text-xl font-normal lg:text-left text-dark-gray z-10 
            relative top-0 left-0 text-base text-center my-2">
                Это онлайн игра прям в твоей телеге, где ты развиваешь свою деревню, прокачиваешь свой клан, и разоряешь других игроков
            </p>
            <div className="lg:absolute lg:left-10 lg:top-[374px] flex lg:flex-row lg:h-14 justify-between lg:w-[378px] z-10 relative top-0 left-0 flex-col w-full items-center h-[124px] my-4">
                <TheButton
                    button_name={'ИГРАТЬ СЕЙЧАС'}
                    onClickButton={() => alert("There should be telegram link")} // please use redirectOnGameHandler
                    bgc="bg-blue"
                    text_color="text-white"
                    width="lg:w-[184px] w-[90%]"
                    icon={telegramm_icon}
                    active_bg_gradient={true}
                />
                <TheButton
                    button_name={'Узнать больше'}
                    onClickButton={() => alert("There should be about link")} // please use redirectAboutGameHandlers
                    bgc="bg-white"
                    text_color="text-blue"
                    width="lg:w-[184px] w-[90%]"
                />
            </div>
            <div className=" absolute lg:bottom-12 lg:right-10 flex justify-between items-end lg:min-w-[400px] z-10 bottom-[280px] right-3 min-w-[160px]">
                <div className="lg:w-[167px] lg:h-[90px] rounded-2xl bg-white/75 backdrop-blur-sm w-[83px] h-12">
                    <div className=" flex flex-col lg:p-3 justify-between lg:h-[90%] h-full p-2" >
                        <div className="font-bold lg:text-[15px] text-blood-red text-[8px]">
                            Награблено
                        </div>
                        {/* This counter mast be real :)*/}
                        <div className="font-bold lg:text-4xl text-over-gray lg:mt-1 text-[19px] mt-[2px]">
                            35 698
                        </div>
                    </div>
                </div>
                <div className="lg:w-[216px] lg:h-[175px] rounded-2xl bg-white/75 backdrop-blur-sm w-[71px] h-[72px]">
                    <div className="flex flex-col lg:p-3 justify-between h-full p-[7px]">
                        <div className="font-bold lg:text-[15px] text-blue text-[8px]">
                            Online
                        </div>
                        {/* This counter mast be real :)*/}
                        <div className="font-bold relative lg:text-4xl text-over-gray mt-[2px] text-[19px] after:content-[''] after:block after:w-[6px] after:h-[6px] after:bg-green-500 after:absolute after:top-0 after:right-3 after:rounded-full lg:after:right-[105px] lg:after:w-[10px] lg:after:h-[10px]">
                            365
                        </div>
                        {size.width && size.width > 976 && <div className="flex relative">
                            {Peoples.map((img, index) =>
                                <div key={index} className="h-11">
                                    <div className={`absolute`} style={{ left: 1 + index * 35 }}>
                                        <Image src={img} alt={'about other person'} width={44} height={44}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>}
                        <div className="lg:text-sm font-normal text-[#77767E] text-[8px] leading-3 ">
                            Игроков всего
                            <span className=" lg:mx-1 mt-[2px] text-xl font-bold text-over-gray inline-block text-[12px] leading-3">
                                1367
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default TheFirstBlock;