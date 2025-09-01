import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import { permissions } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import ImageArticle from "@/app/components/commons/ImageArticle/ImageArticle";

const Permissions = () => {
    return (
        <div className={styles.p_wrapper}>
            <BackButton />
            <TopPageContent 
                title={permissions.title} 
                article={permissions.article} 
                img_src={permissions.img_src} />
            
            <ImageArticle 
                title={permissions.ic_title}
                img_src={permissions.ic_img_src}
                content={permissions.ic_content} />
            
            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{permissions.header_one}</h2>
                    <p>{permissions.first_par}</p>
                    <ul>
                        {permissions.article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{permissions.header_two}</h2>
                    <p>{permissions.sec_par}</p>
                    <ul>
                        {permissions.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>

            <BeforeFooter />
        </div>
    );
}

export default Permissions;