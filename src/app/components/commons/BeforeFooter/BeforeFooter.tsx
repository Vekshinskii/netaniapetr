import BackButton from "../BackButton/BackButton";
import styles from "./BeforeFooter.module.css"
import ConsultButton from "../ConsultButton/ConsultButton";

const BeforeFooter = () => {
    return (
        <div className={styles.bf_wrapper}>
            <div className={styles.bf_wrapper_back}>
            <BackButton/>
            </div>
            <div className={styles.bf_button_section}>
            <ConsultButton className={styles.bf_wrapper_button}/>
            </div>
        </div>
    );
};

export default BeforeFooter;