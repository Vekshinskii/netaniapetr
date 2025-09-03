import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import {divorces, permissions} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import ResponsiveColumns from "@/app/components/commons/ResponsiveColumns/ResponsiveColumns";

const Divorces = () => {
    return (
        <div className={styles.dvrc_wrapper}>
            <TopPageContent
                title={divorces.title}
                article={divorces.article}
                img_src={divorces.img_src}/>

            <ResponsiveColumns docs={divorces}/>
            <BeforeFooter/>
        </div>
    );
}

export default Divorces;