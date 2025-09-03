import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import DoubleColumnH2 from "@/app/components/commons/DoubleColumnH2/DoubleColumnH2";
import {docs_from_abroad} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import ResponsiveColumns from "@/app/components/commons/ResponsiveColumns/ResponsiveColumns";

const DocsFromAbroad = () => {
    return (
        <div className={styles.dfa_wrapper}>
            <TopPageContent
                title={docs_from_abroad.title}
                article={docs_from_abroad.article}
                img_src={docs_from_abroad.img_src}/>
            <ResponsiveColumns docs={docs_from_abroad}/>
            <div className="info_section">
                <h3>{docs_from_abroad.header_mid}</h3>
            </div>
            <DoubleColumnH2
                header_one={docs_from_abroad.last_header_one}
                article_one={docs_from_abroad.last_article_one}
                header_two={docs_from_abroad.last_header_two}
            />
            <BeforeFooter/>
        </div>
    );
}

export default DocsFromAbroad;