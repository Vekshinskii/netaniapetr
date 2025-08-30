import BackButton from "./BackButton";
import styles from "./BeforeFooter.module.css"
import ConsultButton from "./ConsultButton";

const BeforeFooter = () => {
    return (
        <div className={styles.bf_wrapper}>
            <BackButton />
            <ConsultButton />
        </div>
    );
};

export default BeforeFooter;