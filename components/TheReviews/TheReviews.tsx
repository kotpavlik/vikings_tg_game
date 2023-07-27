'use client'
import person_1 from '../../public/test_photo/45.png'
import person_2 from '../../public/test_photo/53.png'
import person_3 from '../../public/test_photo/76.png'
import person_4 from '../../public/test_photo/79.png'
import person_5 from '../../public/test_photo/98.png'
import star from '../../public/icons/Star.svg'
import Image, { StaticImageData } from 'next/image';

type ReviewsType = Array<ReviewType>
type ReviewType = {
    id: number
    review: string
    user_name: string
    portfolio_pic: string | StaticImageData
}

const Reviews: ReviewsType = [
    {
        id: 1,
        review: 'Выстраиваем цепочку под потребности вашего бизнеса и груза. Заберем или примем товар на нашем складе в Москве, доставим в Красноярск и Иркутск, подготовим к доставке на склады или в торговые точки и доставим до дверей. Вам не потребуется искать склад и открывать представительство - обработаем груз, доставим до покупателя и отчитаемся в нужной форме',
        user_name: 'Старший куратор',
        portfolio_pic: person_1
    }
]


const TheReviews = () => {
    return (
        <div className="mx-auto w-[96%]">
            <h1 className="text-over-gray font-bold lg:text-[68px] text-center leading-[110%] my-[30px]
            text-4xl"> Оценки и отзывы </h1>
            <div className='flex justify-center  my-[40px]'>
                <h1 className="text-over-gray font-bold  lg:text-[120px] text-center leading-[120%]
                text-4xl "> 4,3
                </h1>
                <Image src={star} alt='star' width={81} />
            </div>
        </div>

    );
}
export default TheReviews