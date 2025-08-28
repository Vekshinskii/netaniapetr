import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn";
import trans_docs_apostille from "../../utils/Constants";

const TranslateDocsApostille = () => {
    return (
        <div className={styles.tda_wrapper}>
            <BackButton />
            <TopPageContent 
                title={trans_docs_apostille.title} 
                article={trans_docs_apostille.article} 
                img_src={trans_docs_apostille.img_src} />
            <DoubleColumn 
                header_one={trans_docs_apostille.header_one} 
                article_one={trans_docs_apostille.article_one}
                header_two={trans_docs_apostille.header_two} 
                article_two={trans_docs_apostille.article_two} />
        </div>
    );
}

export default TranslateDocsApostille;