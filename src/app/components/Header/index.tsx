"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Проверка ширины экрана при загрузке и ресайзе
        const checkMobile = () => setIsMobile(window.innerWidth <= 1030);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // тень при скролле
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // запрет скролла при открытом меню
    useEffect(() => {
        document.body.style.overflow = navActive ? "hidden" : "";
    }, [navActive]);

    return (
        <>
            <header
                className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
            >
                <Link href="/" className={styles.logo}>
                    «НАТАНИЯ <span className={styles.second_part_logo}>– ПЕТР»</span>
                </Link>

                {/* бургер */}
                <div
                    className={`${styles.burgerMenu} ${navActive ? styles.active : ""}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                {/* навигация */}
                <nav className={`${styles.nav} ${navActive ? styles.active : ""}`}>
                    <Image
                        className={styles.elem_nav}
                        alt="elem_nav"
                        src="/images/mobile_nav.webp"
                        width={800}
                        height={800}
                    />

                    <Link href="#about_info" className={styles.nav_link}>
                        О НАС
                    </Link>
                    <Link href="#contact" className={styles.nav_link}>
                        КОНТАКТЫ
                    </Link>

                    <div className={styles.dropdown}
                         onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                         onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                    >
                        <div
                            className={styles.dropdownBtn}
                            onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
                        >
                            УСЛУГИ
                        </div>
                        <div
                            className={`${styles.dropdownContent} ${
                                dropdownOpen ? styles.show : ""
                            }`}
                        >
                            <Link className={styles.navi_to} href="/translate_docs_apostille">
                                Переводы документов. Апостиль
                            </Link>
                            <Link className={styles.navi_to} href="/citizenship">
                                Оформление гражданства
                            </Link>
                            <Link className={styles.navi_to} href="/docs_from_abroad">
                                Истребование документов из-за границы
                            </Link>
                            <Link className={styles.navi_to} href="/permissions">
                                Доверенности, разрешение на выезд
                            </Link>
                            <Link className={styles.navi_to} href="/marriage_utah">
                                Браки без выезда. Брак в штате Юта
                            </Link>
                            <Link className={styles.navi_to} href="/stupro">
                                Совместное проживание. СТУПРО
                            </Link>
                            <Link className={styles.navi_to} href="/divorces">
                                Разводы
                            </Link>
                            <Link className={styles.navi_to} href="/paternity_proof">
                                Подтверждение отцовства
                            </Link>
                            <Link className={styles.navi_to} href="/inheritance_testament">
                                Завещание. Наследство
                            </Link>
                        </div>
                    </div>

                    <div className={styles.form_mobile}>
                        <Image
                            className={styles.elem_blue_form}
                            alt="elem_blue_form"
                            src="/images/form_mobile.webp"
                            width={800}
                            height={800}
                        />
                        <form className={styles.form}>
            <span className={styles.form_group}>
              <input name="name" id="name" type="text" placeholder="Имя"/>
            </span>
                            <span className={styles.form_group}>
              <input name="phone" id="phone" type="tel" placeholder="Телефон"/>
            </span>

                            <div className={styles.form_group}>
              <textarea
                  className={styles.customTextarea}
                  placeholder={`Удобное\nвремя для связи`}
                  rows={1}
              />
                            </div>
                            <button className={styles.send_button} type="submit">
                                Отправить
                            </button>
                        </form>
                    </div>
                </nav>

                <div className={styles.tel}>
                    <Image
                        className={styles.phone_icon}
                        alt="phone_icon"
                        src="/images/icon_phon_header.webp"
                        width={32}
                        height={32}
                    />
                    +(972)50-5382121
                </div>
            </header>

            {/* блюр-оверлей */}
            {navActive && (
                <div
                    className={styles.blurOverlay}
                    onClick={() => setNavActive(false)}
                />
            )}
        </>
    );
}
