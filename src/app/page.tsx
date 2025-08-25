import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../app/components/Header/index";
import Footer from "../app/components/Header/index";

export default function HomePage() {
    return (
        <main className={styles.home_wrapper}>
            {/* Index на всех страницах */}
            <Header />
            {/* Декоративные оверлеи */}
            <div className="blur-overlay" />

            {/* Mobile light */}
            <Image
                className={styles.elem_light_mobile}
                alt="elem_light_mobile"
                src="/images/mobile_home.webp"
                width={1400}
                height={1400}
                priority
            />
            {/* Blue shape (mobile) */}
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
                        ПЕРЕВОД ДОКУМЕНТОВ <br /> УСЛУГИ В ИЗРАИЛЕ
                    </h1>

                    {/* без onClick в серверном компоненте — просто якорь до секции контактов */}
                    <Link href="#contact" className={styles.order_consultation}>
                        Получить консультацию
                    </Link>

                    <Link
                        href="https://wa.me/972547615507"
                        aria-label="WhatsApp"
                        className={styles.wa_link}
                    >
                        <img  src="/images/whatsapp.svg" className={styles.whatsapp} alt="watsapp" />
                    </Link>
                </div>

                <Link
                    href="https://wa.me/972547615507"
                    aria-label="WhatsApp"
                    className={styles.wa_link}
                >
                    <div className={styles.whatsapp_mobile} />
                </Link>

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
                        src="/images/ring_man.webp"
                        width={720}
                        height={720}
                        priority
                    />
                </div>
                <div className={styles.consult}>
                    <h2>КОНСУЛЬТАЦИЯ ПО ТЕЛЕФОНУ - БЕСПЛАТНО!</h2>
                </div>

                <nav className={styles.list_services} aria-label="Список услуг">
                    <Link className={styles.navi_to} href="/marriage">
                        Переводы документов.<br/>Апостиль
                    </Link>
                    <Link className={styles.navi_to} href="/apostille">
                        Оформление гражданства
                    </Link>
                    <Link className={styles.navi_to} href="/translation">
                        Истребование документов<br/> из-за границы
                    </Link>
                    <Link className={styles.navi_to} href="/forms">
                        Доверенности, разрешение на выезд
                    </Link>
                    <Link className={styles.navi_to} href="/will">
                        Браки без выезда. Брак<br/> в штате Юта
                    </Link>
                    <Link className={styles.navi_to} href="/parentage">
                        Совместное проживание.<br/>СТУПРО
                    </Link>
                    <Link className={styles.navi_to} href="/document-preparation">
                        Разводы
                    </Link>
                    <Link className={styles.navi_to} href="/parent-citizenship">
                        Подтверждение отцовства/ <br/>материнства
                    </Link>
                    <Link className={styles.navi_to} href="/cis-documents">
                        Завещание. Наследство
                    </Link>
                </nav>
            </div>

            {/* ABOUT + CONTACT */}
            <section id="about">
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
                                    <p>da321@gmail.com</p>
                                </div>
                                <Image
                                    src="/images/icon_email.svg"
                                    alt="icon_email"
                                    width={48}
                                    height={48}
                                    className={styles.icon_email}
                                />
                            </div>

                            <div className={styles.contact_group}>
                                <div className={styles.contact_text}>
                                    <p>+(972)505-382121</p>
                                    <p>+(972)544-388831</p>
                                    <p>+(972)508-621927</p>
                                </div>
                                <Image
                                    src="/images/icon_phone.webp"
                                    alt="phone"
                                    width={40}
                                    height={40}
                                    className={styles.icon_phone}
                                />
                            </div>

                            <div className={styles.about_us_text}>
                                <p>
                                    Сегодня наша компания называется «Агентство НАТАНИЯ - ПЕТР» и
                                    по-прежнему находится по тому же адресу, что и 25 лет назад.
                                </p>
                            </div>
                        </div>

                        <div id="about_info" className={styles.about_info}>
                            <h1>О нас</h1>
                            <div className={styles.about_text}>
                                <p>
                                    Наше агентство было создано в 1990 году, когда в Израиль
                                    приехало много репатриантов. Целью было — оказать всестороннюю
                                    помощь новым гражданам Израиля по самым разным вопросам.
                                </p>
                                <p>
                                    С годами перечень услуг менялся в зависимости от спроса. Но
                                    неизменными оставались высокое качество нашей работы,
                                    внимательное обслуживание и доброжелательное отношение к
                                    каждому клиенту.
                                </p>
                                <p>
                                    Именно поэтому те, кто хоть раз обратился в наше агентство,
                                    вновь и вновь возвращаются к нам для решения новых вопросов.
                                </p>

                                <div className={styles.about_us_text_mobile}>
                                    <p>
                                        Сегодня наша компания называется «Агентство НАТАНИЯ - ПЕТР»
                                        и по-прежнему находится по тому же адресу, что и 25 лет
                                        назад.
                                    </p>
                                </div>

                                <Link href="https://wa.me/972547615507" className={styles.wa_link}>
                                    <div className={`${styles.whatsapp} ${styles.contact}`} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer на всех страницах */}
            <Footer />
        </main>
    );
}
