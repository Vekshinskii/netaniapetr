import styles from "./DoubleColumn.module.css";

interface IDoubleColumn {
    header_one: string;
    header_two: string;
    header_three?: string;
    article_one: string[];
    article_two: string[];
    article_three?: string[];
    hasThree?: boolean;
}

const DoubleColumn: React.FC<IDoubleColumn> = ({
                                                    header_one, 
                                                    header_two,
                                                    header_three,
                                                    article_one, 
                                                    article_two,
                                                    article_three,
                                                    hasThree
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
                <ul>
                    {article_two.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                {hasThree && (
                    <>
                    <h2>{header_three}</h2>
                    <ul>
                        {article_three?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default DoubleColumn;