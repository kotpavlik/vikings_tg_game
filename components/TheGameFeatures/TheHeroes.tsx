import Image, { StaticImageData } from 'next/image';
import { useWindowSize } from '../hooks/useWidthHook';
import secondImg from "../../public/bg_images/6.png";
import the_first from "../../public/icons/theFirst.svg";
import the_second from "../../public/icons/theSecond.svg";
import the_third from "../../public/icons/theThird.svg";
import star from "../../public/icons/theStar.svg"


type PlayersType = Array<Player>
type Player = {
    id: number,
    playerName: string,
    stars: string
}


const Players: PlayersType = [
    { id: 1, playerName: 'Евгений', stars: '103' },
    { id: 2, playerName: 'Егор', stars: '95' },
    { id: 3, playerName: 'Нина', stars: '91' },
    { id: 4, playerName: 'Игорь', stars: '89' },
    { id: 5, playerName: 'Сергей', stars: '85' },
]

const TheHeroes = () => {

    const BGIForHeroes = {
        backgroundImage:
            `url(${secondImg.src})`
    }
    const size = useWindowSize()

    return (
        <div className="mx-auto my-6 w-full lg:h-[648px] h-[867px] bg-hum-bege rounded-[32px] relative left-0">
            <div className="mx-3 h-full">
                {size.width && size.width < 380 && <div>
                    <h1 className='text-[30px] text-blue text-center py-6 my-0  font-bold'>
                        Герои
                    </h1>
                    <p className='text-[16px] lg:font-normal font-medium leading-6  tracking-[0.4px] text-dark-gray lg:text-left text-center'>
                        Сейчас бой героев это скорее, как развлечение и халявная добыча золото.
                    </p>
                </div>}
                <div style={BGIForHeroes}
                    className="  bg-no-repeat bg-contain bg-right lg:w-[66%] lg:h-[90%] lg:absolute lg:top-[10px] lg:left-[20px] relative h-[265px] w-full top-[-25px] left-0">
                </div>
                <div className='  lg:absolute lg:right-10 lg:top-10 lg:w-[410px] 
                                not-italic  z-10 relative right-0 top-[-25px]  '>
                    {size.width && size.width > 380 && <div>
                        <h1 className=' text-blue text-6xl text-left lg:mb-6 mb-2 font-bold'>
                            Герои
                        </h1>
                        <p className='text-[16px] lg:font-normal font-medium leading-6 tracking-[0.4px] mb-10 text-dark-gray lg:text-left text-center'>
                            Сейчас бой героев это скорее, как развлечение и халявная добыча золото.
                        </p>
                    </div>
                    }
                    <h1 className='text-[30px] text-blue lg:text-6xl lg:text-left text-center  lg:mb-6 mb-2 font-bold '>
                        Бои на арене
                    </h1>
                    <p className='text-[16px] lg:text-5 lg:font-normal font-medium leading-6 tracking-[-0.4px] lg:text-left text-dark-gray w-full text-center '>
                        это принцип «камень, ножницы, бумага». Лвлов нету, так как считаю что все в итоге прокачаются к максималке быстро, и вот там уже и начнутся бои — так че бы тогда сразу не дать максимальный лвл всем?
                    </p>
                </div>

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
                                        {Players[0].playerName}
                                    </div>
                                    <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px] flex">
                                        <Image src={star} alt="raiting star" width={17} className="mr-2" />
                                        <span className="text-[19px]"> {Players[0].stars}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[285px] h-[52px] bg-[rgba(255, 255, 255, 0.78)] shadow-items-shadow rounded-xl backdrop-blur-sm m-[5px] flex items-center">
                                <Image src={the_second} alt='' width={46} className="mx-3" />
                                <div className="w-[235px] flex justify-between mr-4">
                                    <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                        {Players[1].playerName}
                                    </div>
                                    <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px] flex">
                                        <Image src={star} alt="raiting star" width={17} className="mr-2" />
                                        <span className="text-[19px]"> {Players[1].stars}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[285px] h-[52px] bg-[rgba(255, 255, 255, 0.78)] shadow-items-shadow rounded-xl backdrop-blur-sm m-[5px] flex items-center">
                                <Image src={the_third} alt='' width={46} className="mx-3" />
                                <div className="w-[235px] flex justify-between mr-4">
                                    <div className="text-dark-gray text-[19px] font-extrabold tracking-[-0.38px]">
                                        {Players[2].playerName}
                                    </div>
                                    <div className="text-[#FF9500] text-[14px] font-extrabold tracking-[-0.28px] flex">
                                        <Image src={star} alt="raiting star" width={17} className="mr-2" />
                                        <span className="text-[19px]"> {Players[2].stars}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default TheHeroes