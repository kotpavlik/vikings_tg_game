import { inter } from "@/app/layout";
import firstImg from "../../public/bg_images/4.png";
import Image, { StaticImageData } from 'next/image';
import the_first from "../../public/icons/theFirst.svg"
import the_second from "../../public/icons/theSecond.svg"
import the_third from "../../public/icons/theThird.svg"

type ClansType = Array<ClanType>
type ClanType = {
    id: number
    name: string
    lvl: string
}

const Clans: ClansType = [
    { id: 1, name: 'Берсек', lvl: '102' },
    { id: 2, name: 'Асгард', lvl: '98' },
    { id: 3, name: 'Нифельхейм', lvl: '88' },
    { id: 4, name: 'Дети Тора', lvl: '45' },
    { id: 5, name: 'Дети твоей мамы', lvl: '32' }
]



const TheClans = () => {

    const BGIForClans = {
        backgroundImage:
            `url(${firstImg.src})`
    }

    return (
        <div className="mx-auto w-full lg:h-[648px] h-[824px] bg-bege rounded-[32px] relative left-0">
            <h1 className={`${inter.className} 
            lg:absolute lg:left-10 lg:top-10 max-w-[540px] max-h-[150px] 
            not-italic font-bold lg:text-left lg:text-6xl text-over-gray z-10
            relative left-0 top-3 text-[37px] text-center my-3`}>

                <span className={`font-bold text-blue select-none `}>Кланы</span>
            </h1>
            <div
                style={BGIForClans}
                className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:right-[20px] relative h-[265px] w-full top-0 right-0">
            </div>
            <p className="lg:absolute lg:left-10 lg:top-[122px] max-w-[412px] tracking-[-0.4px] lg:m-0 lg:text-xl lg:font-normal lg:text-left text-dark-gray z-10 relative top-0 left-0 text-base text-center m-3 font-medium">
                Это просто бомба! Делал их очень долго, так как хотел чтобы они были комфортные и интересные, кланы это очень важная и социальная часть игры. Тут в одиночку будет достаточно сложно так как для хорошей прокачки вам надо будет достаточно много времени уделить клану
            </p>
            <div className=" absolute lg:bottom-10 lg:left-10 flex justify-between items-end lg:min-w-[321px] z-10 bottom-[18px] left-3 min-w-[160px] ">
                <div className="relative lg:w-[321px] lg:h-[218px] rounded-2xl bg-white/75 backdrop-blur-sm w-[320px] h-[218px]">
                    <div className="absolute top-[-18px] left-[51px] w-[218px] h-[37px] bg-red rounded-xl 
                        text-[18px] font-bold text-white flex items-center justify-center">
                        Топ кланов
                    </div>

                    <div className=" absolute top-[32px] right-[18px] w-[285px] h-[160px]" >
                        <div className=" w-[285px] h-[52px] bg-[rgba(255, 255, 255, 0.78)] shadow-items-shadow rounded-xl backdrop-blur-sm m-[5px] flex items-center">
                            <Image src={the_first} alt='' width={46} className="mx-3" />
                            <div className="w-[235px] flex justify-between mr-4">
                                <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                    {Clans[0].name}
                                </div>
                                <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px]">
                                    лвл
                                    <span className="text-[19px]"> {Clans[0].lvl}</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[285px] h-[52px] bg-[rgba(255, 255, 255, 0.78)] shadow-items-shadow rounded-xl backdrop-blur-sm m-[5px] flex items-center">
                            <Image src={the_second} alt='' width={46} className="mx-3" />
                            <div className="w-[235px] flex justify-between mr-4">
                                <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                    {Clans[1].name}
                                </div>
                                <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px]">
                                    лвл
                                    <span className="text-[19px]"> {Clans[1].lvl}</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[285px] h-[52px] bg-[rgba(255, 255, 255, 0.78)] shadow-items-shadow rounded-xl backdrop-blur-sm m-[5px] flex items-center">
                            <Image src={the_third} alt='' width={46} className="mx-3" />
                            <div className="w-[235px] flex justify-between mr-4">
                                <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                    {Clans[2].name}
                                </div>
                                <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px] ">
                                    лвл
                                    <span className="text-[19px]"> {Clans[2].lvl}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default TheClans