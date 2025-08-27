import styles from "./TopPageContent.module.css";
import Image from "next/image";
import WhatsappButton from "./WhatsappButton";
import ConsultButton from "./ConsultButton";

interface ITopPageContent {
    title: string;
    article: string;
    img_src: string;
}

const TopPageContent: React.FC<ITopPageContent> = ({
                                                    title, 
                                                    article, 
                                                    img_src
                                                }) => {
    return (
        <div className={styles.tpc_wrapper}>
            <div className={styles.tpc_article}>
                <h2>{title}</h2>
                <p>{article}</p>
                <ConsultButton />
            </div>
            <div className={styles.tpc_image_wapp}>
                <Image 
                    src={img_src} 
                    alt="article image"
                    width={450}
                    height={450} 
                />
                <WhatsappButton />
            </div>
        </div>
    );
}

export default TopPageContent;