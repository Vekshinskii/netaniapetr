import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import { divorces } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter";

const Divorces = () => {
    return (
        <div className={styles.dvrc_wrapper}>
            <BackButton />
            <TopPageContent 
                title={divorces.title} 
                article={divorces.article} 
                img_src={divorces.img_src} />

            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{divorces.header_one}</h2>
                    {divorces.first_par}
                    <ul>
                        {divorces.article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{divorces.header_two}</h2>
                    {divorces.sec_par}
                    <ul>
                        {divorces.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    {divorces.thrd_par}
                </div>
            </div>

            <p>{divorces.header_mid}</p>

            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{divorces.last_header_one}</h2>
                    <ul>
                        {divorces.last_article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{divorces.last_header_two}</h2>
                    {divorces.frth_par}
                </div>
            </div>

            <BeforeFooter />
        </div>
    );
}

export default Divorces;