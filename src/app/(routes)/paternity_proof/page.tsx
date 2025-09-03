import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import {paternity_proof} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";
import DoubleColumn from "@/app/components/commons/DoubleColumn/DoubleColumn";
import DoubleColumnH2 from "@/app/components/commons/DoubleColumnH2/DoubleColumnH2";

const PaternityProof = () => {
    return (
        <div className={styles.ptrn_wrapper}>
            <TopPageContent
                title={paternity_proof.title}
                article={paternity_proof.article}
                img_src={paternity_proof.img_src}/>

            <DoubleColumn
                header_one={paternity_proof.header_one}
                article_one={paternity_proof.article_one}
                header_two={paternity_proof.header_two}
                article_two={paternity_proof.article_two}/>

<DoubleColumnH2 header_one={paternity_proof.last_header_one}
                header_two={paternity_proof.last_header_two}
                article_one={paternity_proof.last_article_one}
                text_one={paternity_proof.last_header_one}/>
            <BeforeFooter/>
        </div>
    );
}

export default PaternityProof;