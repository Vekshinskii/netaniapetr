import styles from "./TopPageContent.module.css";
import Image from "next/image";
import ConsultButton from "../ConsultButton";
import BackButton from "@/app/components/commons/BackButton/BackButton";
import WhatsappButton from "@/app/components/commons/WhatsappButton/WhatsappButton";

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
        <div className={styles.tpc_container}>
            <div className={styles.tpc_back_button}>
                <BackButton/>
            </div>
            <div className={styles.tpc_wrapper}>
                <div className={styles.tpc_article}>
                    <h1>{title}</h1>
                    <p>{article}</p>
                    <ConsultButton  className={styles.top_button}/>
                </div>
                <div className={styles.tpc_image_wapp}>
                    <Image 
                        src={img_src} 
                        alt="article image"
                        width={400}
                        height={400}
                    />
                    <div className={styles.whatsapp_mobile_services_section}>
                    <WhatsappButton className={styles.whatsapp_mobile_services}/>
                </div>
                </div>
                <WhatsappButton className={styles.whatsapp_desk_services}/>
            </div>
        </div>
    );
}

export default TopPageContent;