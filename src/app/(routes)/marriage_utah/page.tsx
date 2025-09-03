import BackButton from "@/app/components/commons/BackButton/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn/DoubleColumn";
import {marriage_utah} from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter/BeforeFooter";

const MarriageUtah = () => {
    return (
        <div className={styles.mu_wrapper}>
            <TopPageContent
                title={marriage_utah.title}
                article={marriage_utah.article}
                img_src={marriage_utah.img_src}/>
            <DoubleColumn
                header_one={marriage_utah.header_one}
                article_one={marriage_utah.article_one}
                header_two={marriage_utah.header_two}
                article_two={marriage_utah.article_two}/>
            <div className="info_section">
                <h2>{marriage_utah.header_mid}</h2>
            </div>
            <DoubleColumn
                header_one={marriage_utah.last_header_one}
                article_one={marriage_utah.last_article_one}
                header_two={marriage_utah.last_header_two}
                article_two={marriage_utah.last_article_two}
            />
            <BeforeFooter/>
        </div>
    );
}

export default MarriageUtah;