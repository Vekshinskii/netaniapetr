"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../app/components/Header/index";
import WhatsappButton from "@/app/components/commons/WhatsappButton/WhatsappButton";
import ConsultButton from "@/app/components/commons/ConsultButton/ConsultButton";
import ConsultationModal from "@/app/components/ConsultationModal/ConsultationModal";

export default function HomePage() {
    const [open, setOpen] = React.useState(false);
    return (
        <main className={styles.home_wrapper}>
            <Header />
            <Image
                className={styles.elem_light_mobile}
                alt="elem_light_mobile"
                src="/images/mobile_home.webp"
                width={1400}
                height={1400}
                priority
            />

            <Image
                className={styles.elem_blue_mobile}
                alt="elem_blue_mobile"
                src="/images/mobile_blue_home.webp"
                width={1024}
                height={1024}
                priority
            />
            <div id="main_page" className={styles.main_page}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        ПЕРЕВОД ДОКУМЕНТОВ <br /> ГРАЖДАНСТВО В ИЗРАИЛЕ
                    </h1>

                   <ConsultButton className={styles.consultbutton_desk}   style={{ margin: '6.8vh 0' }}
                    onClickAction={() => {setOpen(true);
                }}
                   />
                    <ConsultationModal open={open} onClose={() => setOpen(false)} />
                   <WhatsappButton className={styles.whatsapp_desk}/>
                </div>
                <WhatsappButton size={50} className={styles.whatsapp_mobile}/>
                <Image
                    className={styles.elem_light}
                    alt="elem_light"
                    src="/images/elem_light.webp"
                    width={1600}
                    height={1200}
                    priority
                />

                <div className={styles.form_section}>
                    <Image
                        className={styles.man}
                        alt="man"
                        src="/images/Hero-Media.webp"
                        width={720}
                        height = {720}
                        priority
                    />
                </div>


                <nav className={styles.list_services} aria-label="Список услуг">
                    <Link className={styles.navi_to} href="/translate_docs_apostille">
                        Переводы документов.<br/>Апостиль
                    </Link>
                    <Link className={styles.navi_to} href="/citizenship">
                        Оформление гражданства
                    </Link>
                    <Link className={styles.navi_to} href="/docs_from_abroad">
                        Истребование документов<br/> из-за границы
                    </Link>
                    <Link className={styles.navi_to} href="/permissions">
                        Доверенности, разрешение на выезд
                    </Link>
                    <Link className={styles.navi_to} href="/marriage_utah">
                        Браки без выезда. Брак<br/> в штате Юта
                    </Link>
                    <Link className={styles.navi_to} href="/stupro">
                        Совместное проживание.<br/>СТУПРО
                    </Link>
                    <Link className={styles.navi_to} href="/divorces">
                        Разводы
                    </Link>
                    <Link className={styles.navi_to} href="/paternity_proof">
                        Подтверждение отцовства <br/>
                    </Link>
                    <Link className={styles.navi_to} href="/inheritance_testament">
                        Завещание. Наследство
                    </Link>
                </nav>
            </div>
            <div className={styles.consult_wrapper}>
                    <h2>КОНСУЛЬТАЦИЯ ПО ТЕЛЕФОНУ - БЕСПЛАТНО!</h2>
            </div>
            {/* ABOUT + CONTACT */}
            <section className={styles.about_page} id="about">
                <div className={styles.contact_page}>
                    <div className={styles.contact_part}>
                        <div id="contact" className={styles.contact_section}>
                            <h1>Контакты</h1>
                            <div className={styles.contact_group}>
                                <div className={styles.contact_text}>
                                    <p>Нетания</p>
                                    <p>ул. Смилянски</p>
                                    <p>дом 4,этаж 7</p>
                                </div>
                                <Image
                                    src="/images/icon_map.svg"
                                    alt="icon_map"
                                    width={48}
                                    height={48}
                                    className={styles.icon_map}
                                />
                            </div>

                            <div className={styles.contact_group}>
                                <div className={styles.contact_text}>
                                    <p>da321@mail.ru</p>
                                    <p>padavidov55@gmail.com</p>
                                </div>
                                <Image
                                    src="/images/icon_email.svg"
                                    alt="icon_email"
                                    width={48}
                                    height = {48}
                                    style={{ objectFit: 'contain' }}
                                    className={styles.icon_email}
                                />
                            </div>

                            <div className={styles.contact_group}>
                                <div className={styles.contact_text}>
                                    <p>+972-505-382121</p>
                                    <p>+972-544-388831</p>
                                    <p>+972-508-621927</p>
                                </div>
                                <Image
                                    src="/images/icon_tel.svg"
                                    alt="phone"
                                    width={36}
                                    height={36}
                                    className={styles.icon_phone}
                                />
                            </div>

                            <div className={styles.about_us_text}>
                                    Все эти годы мы находимся по тому же адресу, что и в начале: г. Нетания, улица
                                    Смилянски 4, этаж 7.
                            </div>
                        </div>

                        <div id="about_info" className={styles.about_info}>
                            <h1>О нас</h1>
                            <div className={styles.about_text}>
                                <h2>«НАТАНИЯ – ПЕТР»</h2>
                                <p>Наше агентство было создано в 1990 году, когда
                                в Израиль приехало много репатриантов. За эти годы спектр услуг менялся в зависимости от спроса.
                                Неизменным оставалось качество нашей работы, высокий уровень обслуживания, вдумчивое
                                доброжелательное отношение к нашим клиентам.</p>

                                <p>Наверное, поэтому те, кто хоть раз обратились в наше агентство, вновь и вновь обращаются
                                к нам для решения новых вопросов.</p>

                                <p>Первоначально наша фирма называлась «Агентство НАТАН и ПЕТР». Со временем мы стали работать
                                по всему Израилю,  менялись не только услуги, название изменилось тоже.
                                    Сейчас наше агентство называется «Агентство Натания Петр» (1990)</p>

                                <div className={styles.about_us_text_mobile}>
                                    <p>
                                        Все эти годы мы находимся по тому же адресу, что и в начале: г. Нетания, улица
                                        Смилянски 4, этаж 7.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.whatsapp_section_bottom}>
                <WhatsappButton className={styles.whatsapp_desk_bottom}/>
                </div>
            </section>
        </main>
    );
}
