import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import { stupro } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter";

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
                     {stupro.first_par}
                    <ul>
                        {stupro.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>

            <p>{stupro.header_mid}</p>
            
            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{stupro.last_header_one}</h2>
                    {stupro.sec_par}
                    <ul>
                        {stupro.last_article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{stupro.last_header_two}</h2>
                     {stupro.thrd_par}
                    <ul>
                        {stupro.last_article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    {stupro.frth_par}
                </div>
            </div>

            <BeforeFooter />
        </div>
    );
}

export default Stupro;