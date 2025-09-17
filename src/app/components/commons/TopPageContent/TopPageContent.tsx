"use client";

import React from "react";
import styles from "./TopPageContent.module.css";
import Image from "next/image";
import ConsultButton from "../ConsultButton/ConsultButton";
import BackButton from "@/app/components/commons/BackButton/BackButton";
import WhatsappButton from "@/app/components/commons/WhatsappButton/WhatsappButton";
import ConsultationModal from "@/app/components/ConsultationModal/ConsultationModal";

type TopPageContentProps = {
    title: string;
    article: string;
    img_src: string;
};

export default function TopPageContent({
                                           title,
                                           article,
                                           img_src,
                                       }: TopPageContentProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.tpc_container}>
            <div className={styles.tpc_back_button}>
                <BackButton />
            </div>

            <div className={styles.tpc_wrapper}>
                <div className={styles.tpc_article}>
                    <h1>{title}</h1>
                    <p>{article}</p>

                    <ConsultButton
                        className={styles.top_button}
                        onClickAction={() => setOpen(true)}
                    />

                    <ConsultationModal open={open} onClose={() => setOpen(false)} />
                </div>

                <div className={styles.tpc_image_wapp}>
                    <div className={styles.photoWrap}>
                        <Image
                            src={img_src}
                            alt="article image"
                            fill
                            className={styles.photo}
                            priority={false}
                        />
                    </div>
                    <WhatsappButton size={60} className={styles.whatsapp_desk_services }/>
                    <div className={styles.whatsapp_mobile_services_section}>
                        <WhatsappButton size={50}  className={styles.whatsapp_mobile_services}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
