import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import {permissions, stupro} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import ResponsiveColumns from "@/app/components/commons/ResponsiveColumns/ResponsiveColumns";

const Stupro = () => {
    return (
        <div className={styles.stpr_wrapper}>
            <TopPageContent
                title={stupro.title}
                article={stupro.article}
                img_src={stupro.img_src}/>
            <ResponsiveColumns docs={permissions}/>
            <BeforeFooter/>
        </div>
    );
}

export default Stupro;