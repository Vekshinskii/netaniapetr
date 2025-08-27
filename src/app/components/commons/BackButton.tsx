import Image from "next/image";
import Link from "next/link";


export default function BackButton() {
     return (
        <Link href="/" className="order_consultation">
            <Image 
                src="/images/back_button.png"
                alt="back to main page"
            />
        </Link>
     );
}