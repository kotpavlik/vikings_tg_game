
'use client'
import Image from 'next/image';



type propsType = {
    button_name: string
    bgc: string
    text_color: string
    width: string
    icon?: string
    active_bg_gradient?: boolean
    onClickButton: () => void
}

const TheButton = ({ button_name, onClickButton, bgc, text_color, width, icon, active_bg_gradient }: propsType) => {

    const onClickHandler = () => {
        onClickButton()
    }

    return (
        <div
            onClick={onClickHandler}
            className={`${bgc} ${width} h-[56px] rounded-xl flex  justify-center p-4 cursor-pointer 
            ${active_bg_gradient && active_bg_gradient ? "active:bg-gradient-to-b from-[#13E3FE] to-[#1A67FB]" : ''}`}>
            <div className={`text-center uppercase font-bold ${text_color} text-sm flex items-center select-none mx-2`}>
                {button_name}
            </div>
            {icon &&
                <div className="flex items-center">
                    <Image src={icon} width={17} alt='picture for return in telegramm' />
                </div>
            }

        </div>

    );
}
export default TheButton