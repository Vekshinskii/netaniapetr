import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import {divorces} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";

const Divorces = () => {
    return (
        <div className={styles.dvrc_wrapper}>
            <TopPageContent
                title={divorces.title}
                article={divorces.article}
                img_src={divorces.img_src}/>

            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{divorces.header_one}</h2>
                    <p>{divorces.first_par}</p>
                    <ul>
                        {divorces.article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col}>
                    <h2>{divorces.header_two}</h2>
                    <p>{divorces.sec_par}</p>
                    <ul>
                        {divorces.article_two.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p>{divorces.thrd_par}</p>
                </div>
            </div>
            <div className="info_section">
                <h2>{divorces.header_mid}</h2>
            </div>

            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{divorces.last_header_one}</h2>
                    <ul>
                        {divorces.last_article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col2}>
                    <h2>{divorces.last_header_two}</h2>
                    <p>{divorces.frth_par}</p>
                </div>
            </div>

            <BeforeFooter/>
        </div>
    );
}

export default Divorces;