import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import { paternity_proof } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import DoubleColumn from "@/app/components/commons/DoubleColumn/DoubleColumn";

const PaternityProof = () => {
    return (
        <div className={styles.ptrn_wrapper}>
            <BackButton />
            <TopPageContent 
                title={paternity_proof.title} 
                article={paternity_proof.article} 
                img_src={paternity_proof.img_src} />

            <DoubleColumn 
                header_one={paternity_proof.header_one}
                article_one={paternity_proof.article_one}
                header_two={paternity_proof.header_two}
                article_two={paternity_proof.article_two} />

            <div className={styles.dbl_col_wrapper}>
                <div className={styles.dbl_col}>
                    <h2>{paternity_proof.last_header_one}</h2>
                    <p>{paternity_proof.frst_par}</p>
                    <ul>
                        {paternity_proof.last_article_one.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.dbl_col2}>
                    <h2>{paternity_proof.last_header_two}</h2>
                </div>
            </div>

            <BeforeFooter />
        </div>
    );
}

export default PaternityProof;