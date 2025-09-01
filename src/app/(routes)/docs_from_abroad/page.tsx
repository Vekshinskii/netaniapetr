import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import DoubleColumnH2 from "@/app/components/commons/DoubleColumnH2/DoubleColumnH2";
import { docs_from_abroad } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";

const DocsFromAbroad = () => {
    return (
        <div className={styles.dfa_wrapper}>
            <BackButton />
            <TopPageContent 
                title={docs_from_abroad.title} 
                article={docs_from_abroad.article} 
                img_src={docs_from_abroad.img_src} />
            
            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{docs_from_abroad.header_one}</h2>
                    <p>{docs_from_abroad.first_par}</p>
                    <ul>
                        {docs_from_abroad.article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p>{docs_from_abroad.sec_par}</p>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{docs_from_abroad.header_two}</h2>
                    <p>{docs_from_abroad.thrd_par}</p>
                    <ul>
                        {docs_from_abroad.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="info_section">
            <h2>{docs_from_abroad.header_mid}</h2>
            </div>
            <DoubleColumnH2 
                header_one={docs_from_abroad.last_header_one}
                article_one={docs_from_abroad.last_article_one}
                header_two={docs_from_abroad.last_header_two}
            />
            <BeforeFooter />
        </div>
    );
}

export default DocsFromAbroad;