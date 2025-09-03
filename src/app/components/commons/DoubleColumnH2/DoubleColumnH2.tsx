import styles from "../DoubleColumnH2/DoubleColumnH2.module.css";
import React from "react";

interface IDoubleColumnH2 {
    header_one: string;
    header_two: string;
    article_one: string[];
    text_one?: string;
}

const DoubleColumnH2: React.FC<IDoubleColumnH2> = ({
                                                    header_one, 
                                                    header_two,
                                                    article_one,
                                                    text_one
                                                }) => {
    return (
        <div className={styles.dbl_col_wrapper}>
            <div className={styles.dbl_col}>
                <h3>{header_one}</h3>
                {text_one && <p>{text_one}</p>}
                <ul>
                    {article_one.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.dbl_col2}>
                <h3>{header_two}</h3>
            </div>
        </div>
    );
}

export default DoubleColumnH2;