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
            <h2>{title}</h2>
            <div className={styles.ia_content_wrapper}>
                <div className={styles.ia_image_wrapper}>
                    <h1>{img_title}</h1>
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