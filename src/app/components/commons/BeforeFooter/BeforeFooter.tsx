import BackButton from "../BackButton/BackButton";
import styles from "./BeforeFooter.module.css"
import ConsultButton from "../ConsultButton";

const BeforeFooter = () => {
    return (
        <div className={styles.bf_wrapper}>
            <div className={styles.bf_wrapper_back}>
            <BackButton/>
            </div>
            <ConsultButton className={styles.bf_wrapper_button}/>
        </div>
    );
};

export default BeforeFooter;