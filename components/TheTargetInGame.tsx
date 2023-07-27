'use client'
import bgImage from '../public/bg_images/1.png'
import { useWindowSize } from './hooks/useWidthHook';

const TheTargetInGame = () => {

    const size = useWindowSize()

    const background_image = {
        backgroundImage:
            `url(${bgImage.src})`
    }

    return (
        <div className="mx-auto my-6 w-[96%] lg:h-[648px] h-[648px] bg-violet rounded-[32px] relative left-0">
            {size.width && size.width < 380 && <h1 className='text-[30px] text-blue text-center py-6 my-0  font-bold'>
                В игре есть цель
            </h1>}
            <div style={background_image}
                className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:left-[20px] relative h-[265px] w-full top-0 left-0">
            </div>
            <div className='  lg:absolute lg:right-10 lg:top-10 lg:w-[410px] 
            not-italic  z-10 relative right-0 top-3  '>
                {size.width && size.width > 380 && <h1 className=' text-blue text-6xl text-left  my-6 font-bold'>
                    В игре есть цель
                </h1>}
                <p className='text-[16px] lg:font-normal font-medium leading-6 tracking-[0.4px] text-dark-gray lg:text-left text-center'>
                    первыми развить алтарь и добыть максимальное количество рун
                </p>
                <h1 className='text-[30px] text-blue lg:text-6xl lg:text-left text-center mt-14 mb-6 font-bold '>
                    Баланс игры
                </h1>
                <p className='text-[16px] lg:font-normal font-medium leading-6 tracking-[0.4px] lg:text-left text-dark-gray w-full text-center'>
                    настроен так, что можно стартовать в любой момент сезона. Ведь даже топовые игроки сталкиваются с проблемой голода
                </p>
            </div>
        </div>

    );
}
export default TheTargetInGame;