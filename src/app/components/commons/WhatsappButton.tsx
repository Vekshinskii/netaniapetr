import Link from "next/link";
import Image from "next/image";


export default function WhatsappButton() {
     return (
        <Link
            href="https://wa.me/972547615507"
            aria-label="WhatsApp"
            className="wa_link"
        >
            <Image 
                className="whatsapp" 
                alt="watsapp" 
                src="/images/whatsapp.svg"
            />
        </Link>
     );
}