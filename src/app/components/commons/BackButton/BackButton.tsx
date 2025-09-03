import Image from "next/image";
import Link from "next/link";


export default function BackButton() {
    return (
        <Link href="/">
            <Image
                src="/images/back_button.png"
                alt="back to main page"
                width={150}
                height={60}
            />
        </Link>
    );
}