"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import s from "./ConsultationModal.module.css";
import * as emailjs from "@emailjs/browser";
import Link from "next/link";

type Props = { open: boolean; onClose: () => void };

export default function ConsultationModal({ open, onClose }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);
    const form = useRef<HTMLFormElement>(null);

    // focus + блокировка скролла
    useEffect(() => {
        if (open) {
            setSubmitted(false);
            setAgreed(false);
            document.body.style.overflow = "hidden";
            requestAnimationFrame(() => nameRef.current?.focus());
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    // закрытие по Esc
    useEffect(() => {
        function onEsc(e: KeyboardEvent) {
            if (e.key === "Escape" && open) onClose();
        }
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [open, onClose]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!agreed) {
            alert("Пожалуйста, дайте согласие на обработку персональных данных");
            return;
        }

        if (!form.current) {
            console.error('Form reference is null');
            return;
        }

        emailjs
            .sendForm(
                process.env.EMAILJS_SERVICE_ID!, 
                process.env.EMAILJS_TEMPLATE_ID!, 
                form.current, {
                    publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            })
            .then(
                () => {
                    //setShowModal(true);
                    console.log('SUCCESS!');
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        setSubmitted(true);
        setTimeout(onClose, 900);
    }

    if (!open) return null;

    return createPortal(
        <div
            className={s.overlay}
            onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className={s.modal} role="dialog" aria-modal="true" aria-labelledby="consult-title">
                <button className={s.close} type="button" onClick={onClose} aria-label="Закрыть">×</button>

                {submitted ? (
                    <div className={s.success} role="status">Спасибо! Мы свяжемся с вами.</div>
                ) : (
                    <>
                        <h3 id="consult-title" className={s.title}>Запись на консультацию</h3>
                        <form className={s.form} ref={form} onSubmit={handleSubmit}>
                            <label className={s.field}>
                                <span>Имя</span>
                                <input ref={nameRef} name="name" type="text" placeholder="Ваше имя" required/>
                            </label>

                            <label className={s.field}>
                                <span>Телефон</span>
                                <input name="contact" type="tel" placeholder="+972 50-123-45-67" required/>
                            </label>

                            <label className={s.field}>
                                <span>Удобное время для связи</span>
                                <input name="message" type="text" placeholder="Напр.: сегодня 14:00–18:00"/>
                            </label>

                            <div className={s.consent}>
                                <label className={s.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        required
                                        className={s.checkbox}
                                    />
                                    <span className={s.checkmark}></span>
                                    <span className={s.consentText}>
                                        Я согласен на обработку{" "}
                                        <Link href="/privacy-policy" className={s.link}>
                                            персональных данных
                                        </Link>{" "}
                                        в соответствии с{" "}
                                        <Link href="/privacy-policy" className={s.link}>
                                            Политикой конфиденциальности
                                        </Link>{" "}
                                        и принимаю{" "}
                                        <Link href="/terms-of-service" className={s.link}>
                                            Пользовательское соглашение
                                        </Link>
                                    </span>
                                </label>
                            </div>

                            <div className={s.actions}>
                                <button className={s.submit} type="submit">Отправить</button>
                                <button className={s.secondary} type="button" onClick={onClose}>Отмена</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}
