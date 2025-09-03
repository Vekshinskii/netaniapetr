import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import { inheritance_testament } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import DoubleColumnH2 from "@/app/components/commons/DoubleColumnH2/DoubleColumnH2";
import ResponsiveColumns from "@/app/components/commons/ResponsiveColumns/ResponsiveColumns";

const InheritanceTestament = () => {
    return (
        <div className={styles.it_wrapper}>
            <TopPageContent
                title={inheritance_testament.title}
                article={inheritance_testament.article}
                img_src={inheritance_testament.img_src}/>

            <ResponsiveColumns docs={inheritance_testament} />

            <DoubleColumnH2 
                header_one={inheritance_testament.last_header_one}
                article_one={inheritance_testament.last_article_one}
                header_two={inheritance_testament.last_header_two} />

            <BeforeFooter/>
        </div>
    );
}

export default InheritanceTestament;