"use client";
import React from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./BeforeFooter.module.css"
import ConsultButton from "../ConsultButton/ConsultButton";
import ConsultationModal from "@/app/components/ConsultationModal/ConsultationModal";


const BeforeFooter = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className={styles.bf_wrapper}>
            <div className={styles.bf_wrapper_back}>
            <BackButton/>
            </div>
            <div className={styles.bf_button_section}>
            <ConsultButton className={styles.bf_wrapper_button}
                onClickAction={() => setOpen(true)}
            />
                <ConsultationModal  open={open} onClose={() => setOpen(false)} />
            </div>
        </div>
    );
};

export default BeforeFooter;