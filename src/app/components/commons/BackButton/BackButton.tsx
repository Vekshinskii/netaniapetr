"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./BackButton.module.css";

export default function BackButton() {
    return (
        <Link href="/" className={styles.back} aria-label="Вернуться на главную">
      <span className={styles.icon} aria-hidden="true">
                      <span className={styles.label}>вернуться</span>
        <Image
            src="/images/arrow_return_back.svg"
            width={98}
            height={65}
            alt=""
            priority
        />
      </span>
        </Link>
    );
}
