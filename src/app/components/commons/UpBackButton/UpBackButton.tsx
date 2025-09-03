import Image from "next/image";
import Link from "next/link";
import styles from "./UpBackButton.module.css";


export default function UpBackButton() {
     return (
        <Link href="/public"  className={styles.up_back_wrapper}>
            <Image
                src="/images/back_button.png"
                alt="back to main page"
                width={150}
                height={60}
            />
        </Link>
     );
}