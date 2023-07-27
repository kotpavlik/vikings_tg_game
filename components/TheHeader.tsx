'use client'
import Link from "next/link";
import Image from 'next/image';
import circle_for_search from "../public/search/search_2.svg"
import stick_for_search from "../public/search/search_1.svg"
import instagram from "../public/social_network/instagram/Icon.svg"
import styles from "../styles/TheHeader.module.scss"
import { useState } from "react";



const TheHeader = () => {

    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)

    const burgerHandler = () => {
        setBurgerIsOpen(!burgerIsOpen)
    }

    return (
        <header className={styles.header_styles}>
            <div className={styles.header_wrapper}>
                <div>
                    <Link href={"/"} className={styles.name_game}>
                        Vikgame
                    </Link>
                </div>
                <div className={burgerIsOpen ? styles.links_wrapper : `${styles.links_wrapper} ${styles.links_hidden}`}   >
                    <div className={styles.flex_wrapper}>
                        <Link href={"/about_game"}
                            className={styles.header_link}>
                            О игре
                        </Link>

                        <Link href={"/news"}
                            className={styles.header_link}> Новости
                        </Link>
                        <Link href={"/chanels"}
                            className={styles.header_link}>
                            Каналы
                        </Link>
                        <Link href={"/hero"}
                            className={styles.header_link}>
                            Герой
                        </Link>
                        <Link href={"/market"}
                            className={styles.header_link}>
                            Рынок
                        </Link>
                        <Link href={"/chats"}
                            className={styles.header_link}>
                            Чаты
                        </Link>
                    </div>
                    <div className={styles.instagram_link}>
                        <Link href="https://www.instagram.com/vikingi_online/?igshid=MmJiY2I4NDBkZg%3D%3D" className={styles.instagram_block}>
                            <Image src={instagram} alt='Instagram' width={16} height={16}
                                className={styles.instagram_logo} />
                            <span>Instagram</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.search_wrapper}>
                    <div className={styles.search_icon}>
                        <Image src={circle_for_search} alt="search" width={15.75} height={15.75}
                            className={styles.around_search}></Image>
                        <Image src={stick_for_search} alt="next search" width={4.58} height={4.58}
                            className={styles.stick_search}></Image>
                    </div>
                    <div className={styles.search}>
                        Поиск
                    </div>
                </div>
                <div className={styles.burger_wrapper} onClick={burgerHandler}>
                    <div className={burgerIsOpen ? ` ${styles.burger} ${styles.burger_is_open}` : styles.burger}>
                        <span></span>
                    </div>

                </div>
            </div>

        </header>
    );
}

export default TheHeader;