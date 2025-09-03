import styles from "./ImageArticle.module.css";
import Image from "next/image";

interface IImageArticle {
    title: string;
    img_title?: string;
    img_src: string;
    content: string;
}

const ImageArticle: React.FC<IImageArticle> = ({title, img_title, img_src, content}) => {
    return (
        <div className={styles.ia_wrapper}>
            <h3 className={styles.ia_wrapper_title_desk}>{title}</h3>
            <div className={styles.ia_content_wrapper}>
                <div className={styles.ia_image_wrapper}>
                    <h1>{img_title}</h1>
                    <h3 className={styles.ia_wrapper_title_mobile}>{title}</h3>
                    <Image 
                        src={img_src} 
                        alt="article image"
                        width={150}
                        height={150}
                    />
                </div>
                <p>
                    {content}
                </p>
            </div>
            
        </div>
    );
}

export default ImageArticle;