"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // NEW
import styles from "./Header.module.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname(); // NEW

    // удобная функция закрыть всё
    const closeAll = () => {        // NEW
        setNavActive(false);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1030);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // если выходим из мобильной ширины — всё закрыть
    useEffect(() => {               // NEW
        if (!isMobile) {
            setNavActive(false);
            setDropdownOpen(false);
        }
    }, [isMobile]);

    // тень/фон при скролле + корректная инициализация при reload
    useEffect(() => {
        const THRESHOLD = 10;
        const apply = () => setScrolled(window.scrollY > THRESHOLD);
        apply();
        const onScroll = () => setScrolled(window.scrollY > THRESHOLD);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // запрет скролла при открытом меню
    useEffect(() => {
        document.body.style.overflow = navActive ? "hidden" : "";
    }, [navActive]);

    // закрывать меню/дропдаун при смене маршрута (клик по Link) — даже если без перезагрузки
    useEffect(() => {               // NEW
        closeAll();
    }, [pathname]);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <Link href="/" className={styles.logo} onClick={closeAll}> {/* NEW */}
                    «НАТАНИЯ <span className={styles.second_part_logo}>– ПЕТР»</span>
                </Link>

                {/* бургер */}
                <div
                    className={`${styles.burgerMenu} ${navActive ? styles.active : ""}`}
                    onClick={() => {
                        // переключаем бургер и гарантированно закрываем дропдаун
                        setNavActive(v => !v);       // NEW
                        setDropdownOpen(false);      // NEW
                    }}
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

                    {/* все ссылки закрывают меню */}
                    <Link href="#about_info" className={styles.nav_link} onClick={closeAll}>{/* NEW */}
                        О НАС
                    </Link>
                    <Link href="#contact" className={styles.nav_link} onClick={closeAll}>{/* NEW */}
                        КОНТАКТЫ
                    </Link>

                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => { if (!isMobile) setDropdownOpen(true); }}
                        onMouseLeave={() => { if (!isMobile) setDropdownOpen(false); }}
                    >
                        <div
                            className={styles.dropdownBtn}
                            onClick={() => {
                                if (isMobile) setDropdownOpen(o => !o);
                            }}
                        >
                            УСЛУГИ
                        </div>

                        <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ""}`}>
                            {/* КАЖДАЯ ссылка из дропдауна закрывает всё */}
                            <Link className={styles.navi_to} href="/translate_docs_apostille" onClick={closeAll}>Переводы документов. Апостиль</Link>
                            <Link className={styles.navi_to} href="/citizenship" onClick={closeAll}>Оформление гражданства</Link>
                            <Link className={styles.navi_to} href="/docs_from_abroad" onClick={closeAll}>Истребование документов из-за границы</Link>
                            <Link className={styles.navi_to} href="/permissions" onClick={closeAll}>Доверенности, разрешение на выезд</Link>
                            <Link className={styles.navi_to} href="/marriage_utah" onClick={closeAll}>Браки без выезда. Брак в штате Юта</Link>
                            <Link className={styles.navi_to} href="/stupro" onClick={closeAll}>Совместное проживание. СТУПРО</Link>
                            <Link className={styles.navi_to} href="/divorces" onClick={closeAll}>Разводы</Link>
                            <Link className={styles.navi_to} href="/paternity_proof" onClick={closeAll}>Подтверждение отцовства</Link>
                            <Link className={styles.navi_to} href="/inheritance_testament" onClick={closeAll}>Завещание. Наследство</Link>
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
                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); closeAll(); }}>{/* NEW: сабмит тоже закрывает */}
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
            {navActive && (<div className={styles.blurOverlay} onClick={closeAll} />
                )}
        </>
    );
}
