import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn";
import { trans_docs_apostille } from "../../utils/Constants";
import ImageArticle from "@/app/components/commons/ImageArticle";
import BeforeFooter from "@/app/components/commons/BeforeFooter";

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
            <ImageArticle
                title={trans_docs_apostille.ia_title}
                img_title={trans_docs_apostille.ia_img_title}
                img_src={trans_docs_apostille.ia_img_src}
                content={trans_docs_apostille.ia_content} />
            <h2>{trans_docs_apostille.tda_apostille_h2}</h2>
            <p>{trans_docs_apostille.tda_apostille_p}</p>
            <DoubleColumn 
                hasThree
                header_one={trans_docs_apostille.last_header_one}
                article_one={trans_docs_apostille.last_article_one}
                header_two={trans_docs_apostille.last_header_two}
                article_two={trans_docs_apostille.last_article_two}
                header_three={trans_docs_apostille.last_header_three}
                article_three={trans_docs_apostille.last_article_three}
            />
            <BeforeFooter />
        </div>
    );
}

export default TranslateDocsApostille;