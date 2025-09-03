import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import {permissions} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import ImageArticle from "@/app/components/commons/ImageArticle/ImageArticle";
import ResponsiveColumns from "@/app/components/commons/ResponsiveColumns/ResponsiveColumns";

const Permissions = () => {
    return (
        <div className={styles.p_wrapper}>
            <TopPageContent
                title={permissions.title}
                article={permissions.article}
                img_src={permissions.img_src}/>

            <ImageArticle
                title={permissions.ic_title}
                img_src={permissions.ic_img_src}
                content={permissions.ic_content}/>

            <ResponsiveColumns docs={permissions}/>

            <BeforeFooter/>
        </div>
    );
}

export default Permissions;