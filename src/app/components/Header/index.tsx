"use client";

import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import * as emailjs from "@emailjs/browser";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const nameRef = useRef<HTMLInputElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    // удобная функция закрыть всё
    const closeAll = () => {
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
    useEffect(() => {
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
    useEffect(() => { 
        closeAll();
    }, [pathname]);

    function handleSubmit(e: React.FormEvent) {
            e.preventDefault();
    
            if (!agreed) {
                alert("Пожалуйста, дайте согласие на обработку персональных данных");
                return;
            }
    
            if (!form.current) {
                console.error('Form reference is null');
                return;
            }
    
            emailjs
                .sendForm(
                    process.env.EMAILJS_SERVICE_ID!, 
                    process.env.EMAILJS_TEMPLATE_ID!, 
                    form.current, {
                        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                })
                .then(
                    () => {
                        //setShowModal(true);
                        console.log('SUCCESS!');
                        form.current?.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
    
            setSubmitted(true);
            closeAll();
        }

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <Link href="/" className={styles.logo} onClick={closeAll}>
                    «НАТАНИЯ <span className={styles.second_part_logo}>– ПЕТР»</span>
                </Link>

                {/* бургер */}
                <div
                    className={`${styles.burgerMenu} ${navActive ? styles.active : ""}`}
                    onClick={() => {
                        setNavActive(v => !v); 
                        setDropdownOpen(false); 
                    }}
                >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                {/* навигация */}
                {submitted ? (
                    <div className={styles.success} role="status">Спасибо! Мы свяжемся с вами.</div>
                ) : (
                <nav className={`${styles.nav} ${navActive ? styles.active : ""}`}>
                    <Image
                        className={styles.elem_nav}
                        alt="elem_nav"
                        src="/images/mobile_nav.webp"
                        width={800}
                        height={800}
                    />

                    {/* все ссылки закрывают меню */}
                    <Link href="/#about_info" className={styles.nav_link} onClick={closeAll}>
                        О НАС
                    </Link>
                    <Link href="/#contact" className={styles.nav_link} onClick={closeAll}>
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

                        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
                            <span className={styles.form_group}>
                                <input  ref={nameRef} name="name" id="name" type="text" placeholder="Имя"/>
                            </span>
                            <span className={styles.form_group}>
                                <input name="contact" id="phone" type="tel" placeholder="Телефон"/>
                            </span>
                            <div className={styles.form_group}>
                            <label className={styles.customTextarea}>
                                <span>Удобное время для связи</span>
                                <input name="message" type="text" placeholder={`Удобное\nвремя для связи`}/>
                            </label>
                            </div>
                            <div className={styles.consent}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        required
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.consentText}>
                                        Я согласен на обработку{" "}
                                        <Link href="/privacy-policy" className={styles.link}>
                                            персональных данных
                                        </Link>{" "}
                                        в соответствии с{" "}
                                        <Link href="/privacy-policy" className={styles.link}>
                                            Политикой конфиденциальности
                                        </Link>{" "}
                                        и принимаю{" "}
                                        <Link href="/terms-of-service" className={styles.link}>
                                            Пользовательское соглашение
                                        </Link>
                                    </span>
                                </label>
                            </div>
                            <button className={styles.send_button} type="submit">
                                Отправить
                            </button>
                        </form>

                    </div>
                </nav>)}

                <div className={styles.tel}>
                    <Image
                        className={styles.phone_icon}
                        alt="phone_icon"
                        src="/images/icon_phone.svg"
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
