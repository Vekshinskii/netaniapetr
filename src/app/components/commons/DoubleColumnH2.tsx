import styles from "./DoubleColumn.module.css";

interface IDoubleColumnH2 {
    header_one: string;
    header_two: string;
    article_one: string[];
}

const DoubleColumnH2: React.FC<IDoubleColumnH2> = ({
                                                    header_one, 
                                                    header_two,
                                                    article_one, 
                                                }) => {
    return (
        <div className={styles.dbl_col_wrapper}>
            <div className={styles.dbl_col}>
                <h2>{header_one}</h2>
                <ul>
                    {article_one.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.dbl_col}>
                <h2>{header_two}</h2>
            </div>
        </div>
    );
}

export default DoubleColumnH2;