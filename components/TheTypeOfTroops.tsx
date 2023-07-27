'use client'
import { useWindowSize } from "./hooks/useWidthHook";
import bgimg from "../public/bg_images/3.png"

const TheTypeOfTroops = () => {

    const BGIForTypeOfTroops = {
        backgroundImage:
            `url(${bgimg.src})`
    }

    const size = useWindowSize()


    return (
        <div className="mx-auto my-6 w-[96%] lg:h-[648px] h-[661px] bg-violet rounded-[32px] relative left-0">
            <div className="mx-3 h-full">
                {size.width && size.width < 380 && <div>
                    <h1 className='text-[30px] text-blue text-center py-6 my-0  font-bold'>
                        Разнообразие типов войск
                    </h1>

                </div>}

                <div style={BGIForTypeOfTroops}
                    className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:left-[20px] relative h-[265px] w-full top-[-25px] left-0">
                </div>
                {size.width && size.width < 380 && <p className='text-[16px] lg:font-normal font-medium leading-6 mb-4 tracking-[0.4px] text-dark-gray lg:text-left text-center'>
                    Попробую просто перечислить:
                </p>}
                <div className='  lg:absolute lg:right-10 lg:top-10 lg:w-[410px] 
                                not-italic  z-10 relative right-0   '>
                    {size.width && size.width > 380 && <div>
                        <h1 className=' text-blue text-[56px] text-left lg:mb-6 mb-2 font-bold'>
                            Разнообразие типов войск
                        </h1>
                        <p className='text-[20px] lg:font-normal font-medium leading-6 tracking-[0.4px] mb-5  text-dark-gray lg:text-left text-center'>
                            Попробую просто перечислить:
                        </p>
                    </div>
                    }
                    <p className='text-[16px]  text-[#007AFF] lg:text-[20px] font-semibold  leading-[130%] lg:tracking-[-0.4px]  tracking-[-0.32px] lg:text-left w-full text-center '>
                        воин, берсерк, следопыт, повозка, таран, осадное орудие, сторожевая вышка, драккар
                    </p>
                    <p className='text-[16px] lg:text-[20px] lg:font-normal font-medium leading-6 lg:tracking-[-0.4px] 
                    tracking-[-0.32px] mt-[15px] text-dark-gray lg:text-left text-center'>
                        И все это помогает вам добиваться ваших целей. Будь то просто сбор рун, или торговля, а может вы и именно тот кого будут проклинать за то что вы украли всю еду у противника
                    </p>
                </div>

            </div>
        </div>

    );
}
export default TheTypeOfTroops