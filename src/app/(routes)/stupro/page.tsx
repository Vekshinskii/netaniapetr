import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import { stupro } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";

const Stupro = () => {
    return (
        <div className={styles.stpr_wrapper}>
            <BackButton />
            <TopPageContent 
                title={stupro.title} 
                article={stupro.article} 
                img_src={stupro.img_src} />
            
            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{stupro.header_one}</h2>
                    <ul>
                        {stupro.article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{stupro.header_two}</h2>
                    <p>{stupro.first_par}</p>
                    <ul>
                        {stupro.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="info_section">
            <h2>{stupro.header_mid}</h2>
            </div>
            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{stupro.last_header_one}</h2>
                    <p>{stupro.sec_par}</p>
                    <ul>
                        {stupro.last_article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{stupro.last_header_two}</h2>
                    <p>{stupro.thrd_par}</p>
                    <ul>
                        {stupro.last_article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p>{stupro.frth_par}</p>
                </div>
            </div>

            <BeforeFooter />
        </div>
    );
}

export default Stupro;