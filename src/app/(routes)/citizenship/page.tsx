import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn/DoubleColumn";
import {citizenship} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";

const Citizenship = () => {
    return (
        <div className={styles.ctz_wrapper}>
            <TopPageContent
                title={citizenship.title}
                article={citizenship.article}
                img_src={citizenship.img_src}/>
            <DoubleColumn
                header_one={citizenship.header_one}
                article_one={citizenship.article_one}
                header_two={citizenship.header_two}
                article_two={citizenship.article_two}/>
            <div className="info_section">
                <h2>{citizenship.header_mid}</h2>
            </div>
            <DoubleColumn
                header_one={citizenship.last_header_one}
                article_one={citizenship.last_article_one}
                header_two={citizenship.last_header_two}
                article_two={citizenship.last_article_two}
            />
            <BeforeFooter/>
        </div>
    );
}

export default Citizenship;