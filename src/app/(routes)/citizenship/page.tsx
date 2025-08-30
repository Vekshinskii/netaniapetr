import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn";
import { marriage_utah } from "../../utils/Constants";
import BeforeFooter from "@/app/components/commons/BeforeFooter";

const Citizenship = () => {
    return (
        <div className={styles.ctz_wrapper}>
            <BackButton />
            <TopPageContent 
                title={marriage_utah.title} 
                article={marriage_utah.article} 
                img_src={marriage_utah.img_src} />
            <DoubleColumn 
                header_one={marriage_utah.header_one} 
                article_one={marriage_utah.article_one}
                header_two={marriage_utah.header_two} 
                article_two={marriage_utah.article_two} />
            <p>{marriage_utah.header_mid}</p>
            <DoubleColumn 
                header_one={marriage_utah.last_header_one}
                article_one={marriage_utah.last_article_one}
                header_two={marriage_utah.last_header_two}
                article_two={marriage_utah.last_article_two}
            />
            <BeforeFooter />
        </div>
    );
}

export default Citizenship;