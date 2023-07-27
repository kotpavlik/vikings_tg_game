'use client'
import { inter } from "@/app/layout";
import TheButton from "./TheButton";
import telegramm_icon from "../public/icons/Vector.svg"
import { useWindowSize } from "./hooks/useWidthHook";
import Image from 'next/image';
import viking_chat from "../public/icons/oval.svg"
import read from "../public/icons/Read.png"

const TheGameChat = () => {

    const size = useWindowSize()

    return (
        <div className="
        mx-auto w-[96%] 
        lg:h-[404px] 
        h-[431px] 
        bg-olive 
        rounded-[32px] 
        relative 
        left-0 
        my-5
        flex
        lg:flex-row
        flex-col
        ">
            <div className="lg:p-10 p-2 lg:w-[50%] w-full">
                <h1 className={`${inter.className} 
            max-h-[150px] 
            lg:mb-9
            not-italic 
            font-bold 
            lg:text-left 
            lg:text-6xl 
            text-over-gray 
            z-10
            lg:text-[37px] 
            text-center 
            my-3
            text-[30px]
            `}>

                    <span className={`
                    font-bold
                     text-blue 
                     select-none 
                     stracking-[-0.4px]
                     
                     `}>
                        Внутриигровой чат
                    </span>
                </h1>

                <p className=" 
                max-w-[410px] 
                lg:text-[20px] 
                lg:mb-10
                leading-[130%] 
                tracking-[-0.4px] 
                font-normal 
                lg:text-left 
                text-dark-gray 
                z-10 
                text-base 
                text-center 
                my-2">
                    В самой игре вы можете переписываться с другими игроками не палив свою телегу
                </p>
                {size.width && size.width > 380 ?
                    <div className="
                flex 
                lg:flex-row 
                lg:h-14 
                justify-between 
                lg:w-[378px] 
                z-10 
                relative 
                top-0 
                left-0 
                flex-col 
                w-full 
                items-center 
                my-4">
                        <TheButton
                            button_name={'ПРИСОЕДЕНИТЬСЯ'}
                            onClickButton={() => alert("There should be telegram link")} // please use redirectOnGameHandler
                            bgc="bg-blue"
                            text_color="text-white"
                            width="lg:w-[206px] w-[90%]"
                            icon={telegramm_icon}
                            active_bg_gradient={true}
                        />
                    </div> :
                    <></>
                }

            </div>
            <div className="lg:p-10 p-2  lg:w-[50%] w-full flex h-[250px] lg:h-full">
                <div className=" flex justify-center z-10 lg:p-2 p-0">
                    <Image src={viking_chat} alt={'about news'} width={size.width && size.width < 380 ? 54 : 88} />
                </div>
                <div className=" relative w-full h-full">
                    <div className=" absolute lg:top-[30px] lg:left-1 left-2 top-[25px]">
                        <div className="
                         float-left
                         relative
                         bg-white
                         p-2
                         rounded-2xl
                         shadow-md
                         flex
                         flex-col
                         lg:w-[430px]
                         lg:h-[168px]
                         w-[286px]
                         h-[105px]
                         before:absolute
                         before:right-[100%]
                         before:bottom-[.2em]
                         before:border-[.5em solid #ffe6e6]
                         before:rounded-[50%]
                         before:bg-white
                         before:border-t-0
                         before:h-[.9em]
                         before:w-[2em]
                         after:w-[2em]
                         after:h-[2em]
                         before:mr-[-.7em]
                         after:absolute
                         after:right-[100%]
                         after:bottom-[.1em]
                         after:border-[.5em solid #ffe6e6]
                         after:rounded-[50%]
                         after:bg-olive
                         ">
                            <div className=" lg:text-[27px] text-[17px] font-bold text-blood-red lg:mt-[15px] mt-2 lg:ml-10 ml-5">
                                Sectet:
                            </div>
                            <div className="text-black lg:text-[25px] text-[15px] font-normal mt-2 lg:ml-10 ml-5
                            lg:leading-[32px] leading:-[130%] lg:tracking-[-0.605px] traking-[-0.32px]">
                                Го к нам в клан, у нас Алтарь 34 уровень и кошкажены <br /> в подарок!😊
                            </div>
                            <div className="absolute lg:bottom-2 lg:right-[14px] right-3 bottom-[6px] text-[#8E8E93] lg:text-[14px] text-[8px] ">
                                11:47
                            </div>
                        </div>
                    </div>
                    <div className="absolute lg:bottom-[40px] bottom-5 lg:right-0 right-[24px]">
                        <div className="
                         float-left
                         relative
                        bg-[#E1FEC6]
                         p-2
                         rounded-2xl
                         shadow-md
                         flex
                         lg:w-[402px]
                         lg:h-[66px]
                         w-[242px]
                         h-[42px]
                         before:absolute
                         before:left-[97%]
                         before:bottom-[.2em]
                         before:border-[.5em solid #ffe6e6]
                         before:rounded-[50%]
                         before:bg-[#E1FEC6]
                         before:border-t-0
                         before:h-[.9em]
                         before:w-[2em]
                         after:w-[2em]
                         after:h-[2em]
                         before:mr-[-.7em]
                         after:absolute
                         after:left-[100%]
                         after:bottom-[.1em]
                         after:border-[.5em solid #ffe6e6]
                         after:rounded-[50%]
                         after:bg-olive
                         ">
                            <div className="
                           text-black 
                             lg:text-[25px]
                             text-[15px]
                             font-normal 
                             mt-2 
                             ml-[10px] 
                             lg:leading-[32px] 
                             leading-[19.89px]
                             lg:tracking-[-0.605px]
                             traking-[-0.4px]">
                                Отлично, вступаю! 😎
                            </div>
                            <div className="absolute lg:bottom-2 bottom-[6px] lg:right-[46px] right-[30px]  text-[#8E8E93] 
                            lg:text-[14px] text-[8px]">
                                11:50
                            </div>
                            <Image src={read} alt={'read'} className="
                            lg:h-[12px] lg:w-[21px] h-2 w-[14px] absolute right-[12px] lg:bottom-2 bottom-1" />
                        </div>
                    </div>
                </div>
            </div>
            {size.width && size.width < 380 ?
                <div className="
                flex 
                justify-between 
                z-10 
                relative 
                top-0 
                left-0 
                flex-col 
                w-full 
                items-center 
                my-5">
                    <TheButton
                        button_name={'ПРИСОЕДЕНИТЬСЯ'}
                        onClickButton={() => alert("There should be telegram link")} // please use redirectOnGameHandler
                        bgc="bg-blue"
                        text_color="text-white"
                        width="w-[90%]"
                        icon={telegramm_icon}
                        active_bg_gradient={true}
                    />
                </div> :
                <></>
            }

        </div>

    );
}
export default TheGameChat