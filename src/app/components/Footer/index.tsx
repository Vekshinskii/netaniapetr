'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <Link href="/" className={styles.logo} aria-label="На главную">
                    «НАТАНИЯ <span className={styles.second_part_logo}>– ПЕТР»</span>
                </Link>

                <div className={styles.footer_section}>
                    <nav className={styles.nav} aria-label="Навигация в подвале">
                        <Link className={styles.nav_to_section} href="/">ГЛАВНАЯ</Link>
                        <Link className={styles.nav_to_section} href="#about_info">О НАС</Link>
                        <Link className={styles.nav_to_section} href="#contact">КОНТАКТЫ</Link>
                    </nav>

                    <Link
                        href="https://hexobee.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.create}
                    >
                        Created by Hexobee
                    </Link>
                </div>

                <a href="tel:+972505382121" className={styles.tel}>
                    <Image
                        className={styles.phone_icon}
                        src="/images/icon_phon_header.webp"
                        alt="Телефон"
                        width={22}
                        height={22}
                    />
                    <span>+(972)50-5382121</span>
                </a>

                <Link
                    href="https://hexobee-ed04d.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.create_mobile}
                >
                    Created by Hexobee
                </Link>
            </footer>

        </div>
    );
}
