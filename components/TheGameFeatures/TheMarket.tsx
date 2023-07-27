import { inter } from "@/app/layout";
import bgImage from "../../public/bg_images/2.png"
import { useWindowSize } from "../hooks/useWidthHook";
import Image, { StaticImageData } from 'next/image';
import done_svg from "../../public/icons/Done.svg"

type MarketThingsType = Array<MarketTingType>
type MarketTingType = {
    id: number
    name: string
    col: string
}

const MarketThings: MarketThingsType = [
    { id: 1, name: 'Дракары', col: '326' },
    { id: 2, name: 'Повозки', col: '56' },
    { id: 3, name: 'Тараны', col: '36' },
    { id: 4, name: 'Вышки', col: '456' },

]

const TheMarket = () => {

    const BGIForMarket = {
        backgroundImage:
            `url(${bgImage.src})`
    }
    const size = useWindowSize()

    return (
        <div className="mx-auto w-full lg:h-[648px] h-[800px] bg-bege rounded-[32px] relative left-0">
            <h1 className={`${inter.className} 
            lg:absolute lg:left-10 lg:top-10 max-w-[540px] max-h-[150px] 
            not-italic font-bold lg:text-left lg:text-6xl text-over-gray z-10
            relative left-0 top-3 text-[37px] text-center`}>

                <span className={`
                font-bold 
                text-blue 
                select-none 
                relative
                `}>Рынок
                    <div className="
                absolute 
                lg:right-[-110px] 
                lg:top-[15px] 
                lg:text-[14px] 
                text-[#F7F7FA]
                bg-gradient-to-b from-[#75D492] to-[#48AE67]
                rounded-[99px]
                lg:py-[6px]
                lg:px-[14px]
                font-semibold
                leading-[130%]
                origin-top
                rotate-[15.649deg]
                select-none
                text-[9px]
                right-[-73px]
                top-[8px]
                py-[5px]
                px-[10px]
                ">
                        и такое есть
                    </div>
                </span>


            </h1>
            <div
                style={BGIForMarket}
                className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:right-[20px] relative h-[265px] w-full top-0 right-0">
            </div>
            <p className="lg:absolute lg:left-10 lg:top-[122px] max-w-[412px] tracking-[-0.4px] lg:m-0 lg:text-[20px] lg:leading-[130%] lg:font-normal lg:text-left text-dark-gray z-10 relative top-0 left-0 text-base text-center m-3 font-medium">
                В этой локации вы можете продавать тот что сделали в кузнице, за золото, а цены формируются самими игроками. Самое ценное что расходится как горячие пирожки — это Драккары. С их помощью вы из морских приключение вы можете добыть Руны
            </p>
            <div className=" absolute lg:bottom-10 lg:left-10 flex justify-between items-end lg:w-[281px]  z-10 bottom-[18px] left-0 w-full ">
                <div className="relative lg:w-[321px]  rounded-2xl  w-[281px] h-[272px] m-auto">
                    <div className="  w-[281px] h-[37px] bg-red rounded-xl 
                        text-[18px] font-bold text-white flex items-center justify-center m-[5px] ">
                        Сейчас в продаже
                    </div>

                    <div className=" w-[281px]" >
                        {MarketThings.map((t) =>
                            <div key={t.id}
                                className=" w-[281px] h-[52px] bg-white/75 shadow-items-shadow rounded-xl  m-[5px] flex items-center">
                                <Image src={done_svg} alt='' width={46} className="mx-3" />
                                <div className="w-[235px] flex justify-between mr-4">
                                    <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                        {t.name}
                                    </div>
                                    <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px]">
                                        <span className="text-[19px]"> {t.col}</span>
                                        штук
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>

    );
}
export default TheMarket