'use client'
import { murecho } from "@/app/layout";
import pictures1 from "../public/news_img/news1.png";
import pictures2 from "../public/news_img/news2.png";
import pictures3 from "../public/news_img/news3.png";
import pictures4 from "../public/news_img/news4.png";
import pictures5 from "../public/news_img/news5.png";
import pictures6 from "../public/news_img/news6.png";
import Image, { StaticImageData } from "next/image";
import TheButton from "./TheButton";
import { useWindowSize } from "./hooks/useWidthHook";

type newsInfoType = Array<newsObjType>
type newsObjType = {
    id: number
    title: string
    description: string
    img: StaticImageData
    date: string
}
const news_info: newsInfoType = [
    {
        id: 1,
        title: 'Герои 1.1',
        description: 'В игру вводим сундуки и наконец вы сможете потратить те самые руны которые находите в море. \n\n В игре появляются новые 4 типа героев: необычный, редкий, эпический и легендарный.Эти герои получают врожденные характеристики, которые нельзя перераспределить, а также покупка нового героя нет вероятности что он будет лучше чем старый.Способность автоматически биться, если вы не выбрали удар.Бонус золото за простой на арене.',
        img: pictures1,
        date: '2023-02-28'
    },
    {
        id: 2,
        title: 'Герой - авто вступление на арену (Обновлено!)',
        description: 'Герой - авто вступление на арену (Обновлено!) \n\n Сейчас будет тест авто арены - вообще это будет фишка для Prime акаунта - но сейчас она доступна будет всем.\n\n Есть две команды /ha и /ho',
        img: pictures2,
        date: '2023-02-29'
    },
    {
        id: 3,
        title: 'Hero',
        description: 'Герои и чем они теперь полезны, и так теперь рейтинг в героях не пустое слово, сейчас ваш герой дает бонус вашей деревне к добыче еды, леса и камня. Но думаю еда самое полезное.\n\nИ так максимальный бонус который можно получить это + 200 %, но это думаю реально только технически.Бонус дается за ваши победы в последних 200 боев, а значит если вы выиграли за ',
        img: pictures3,
        date: '2023-02-30'
    },
    {
        id: 4,
        title: 'Hero',
        description: 'Герои и чем они теперь полезны, и так теперь рейтинг в героях не пустое слово, сейчас ваш герой дает бонус вашей деревне к добыче еды, леса и камня. Но думаю еда самое полезное.И так максимальный бонус который можно получить это + 200 %, но это думаю реально только технически.Бонус дается за ваши победы в последних 200 боев, а значит если вы выиграли за ',
        img: pictures4,
        date: '2023-03-01'
    },
    {
        id: 5,
        title: 'Балансссс  - сейчас вся техника из ремесла, начинает есть.',
        description: 'Какие произошли изменения?Повозка потребляет 2 единицы и она считается как 2 человека в населении, а для создания надо 2 свободных викинга.Таран, Сторожевая Башня и Осадное Орудие едят по 4 единицы и считаются как 2 человека, а для создания надо 2 воина.',
        img: pictures5,
        date: '2023-03-02'
    },
    {
        id: 6,
        title: 'Баланс',
        description: 'И так, первое что поменялось уже - это +15 к вашей добыче на клановых ресурсах. Далее - на выходных введу новую систему заказов башен, таранов и повозок, и они сразу тогда начнут есть еду))), и после голода будут умирать. Так, что подготовьте хавчик) Ну и налог на рынке будет 30% ',
        img: pictures6,
        date: '2023-03-04'
    }
]

const news_info_for_display = news_info.slice(-3)

const TheMainNews = () => {

    const size = useWindowSize()

    return (
        <div className="mx-auto w-[96%]">
            <h1 className=
                {` text-over-gray font-bold lg:text-6xl text-center my-[30px]
            text-4xl`}>
                Новости «Викинги Online»</h1>
            {news_info_for_display.map((news, i) =>
                <div key={i} className="relative flex flex-col lg:flex-row justify-between my-[10px] lg:p-10 p-4 bg-light-gray rounded-[32px] lg:h-[340px] h-[521px]">
                    <div className="">
                        <Image src={news.img} alt={'abot news'} width={size.width && size.width < 380 ? 327 : 404} />
                    </div>
                    <div className="lg:w-[50%] w-full flex flex-col h-full justify-between my-3 lg:my-0">
                        <div className="lg:text-[42px] text-[26px] text-dark-gray font-semibold ">
                            {news.title}
                        </div>
                        <div className="lg:line-clamp-6 leading-[25px]  whitespace-pre-line  text-[#1D1D1F] lg:text-[18px] 
                        text-4 font-normal  line-clamp-4 lg:flex lg:align-bottom">
                            {news.description}
                        </div>
                    </div>
                    <div className="text-[#787878] lg:static lg:bg-inherit lg:p-0 lg:right-0 text-right lg:text-[15px] italic font-light leading-[22.4px] text-[10px] absolute right-8 top-6 z-10 bg-white px-2 rounded-xl">
                        {news.date}
                    </div>
                    {size.width && size.width < 380 && <div>
                        <TheButton button_name="читать" onClickButton={() => alert('It`s interesting news')} bgc="bg-blue"
                            text_color="text-white" width="full" active_bg_gradient={true} />
                    </div>}
                </div>)}
            <div>
                <TheButton button_name="все новости" bgc="bg-blue" text_color="text-white" width="full" onClickButton={() => alert('There will be news soon')} />
            </div>
        </div>

    );
}
export default TheMainNews