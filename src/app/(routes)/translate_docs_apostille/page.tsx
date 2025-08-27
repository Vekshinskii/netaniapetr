import BackButton from "@/app/components/commons/BackButton";
import styles from "./page.module.css";
import TopPageContent from "@/app/components/commons/TopPageContent";
import DoubleColumn from "@/app/components/commons/DoubleColumn";

const TranslateDocsApostille = () => {
    const article = `   Мы предлагаем вам переводы документов любой сложности практически на любые языки.
                        По просьбе клиентов мы можем сделать переводы в течение одного дня.
                        У нас есть обширная база переводчиков, имеющих большой опыт переводов по различной тематике.`;
    const article_one = [
        "Технические документы", 
        "Медицинские документы", 
        "Экономическую документацию", 
        "Личные и стандартные документы", 
        "на иврит, русский язык, украинский, немецкий, испанский, французский, чешский, литовский, болгарский, румынский и, конечно, на английский язык.", 
        "Также переводим документы с иврита на различные языки.",
        "У нас вы можете заказать срочные переводы."
    ];
    const article_two = [
        "Переводы документов для МВД", 
        "Переводы для приглашения мужа/ жены", 
        "Переводы для оформления гражданства мужа/ жены", 
        "Переводы документов для получения гражданства одинокого родителя", 
        "Переводы для получения гражданства одинокого родителя израильского солдата", 
        "Переводы для оформления репатриации туристам, находящимся в Израиле", 
        "И многое другое"];
    return (
        <div className={styles.tda_wrapper}>
            <BackButton />
            <TopPageContent 
                title="ПЕРЕВОД ДОКУМЕНТОВ АПОСТИЛЬ" 
                article={article} 
                img_src="/images/translate_docs_apostille.png" />
            <DoubleColumn 
                header_one="Мы поможем вам перевести:" 
                article_one={article_one} 
                header_two="Мы предлагаем готовые пакеты переводов, например:" 
                article_two={article_two} />
        </div>
    );
}

export default TranslateDocsApostille;