"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import s from "./ConsultationModal.module.css";

type Props = { open: boolean; onClose: () => void };

export default function ConsultationModal({ open, onClose }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);

    // focus + блокировка скролла
    useEffect(() => {
        if (open) {
            setSubmitted(false);
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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
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
                        <form className={s.form} onSubmit={handleSubmit}>
                            <label className={s.field}>
                                <span>Имя</span>
                                <input ref={nameRef} name="name" type="text" placeholder="Ваше имя" required/>
                            </label>

                            <label className={s.field}>
                                <span>Телефон</span>
                                <input name="phone" type="tel" placeholder="+972 50-123-45-67" required/>
                            </label>

                            <label className={s.field}>
                                <span>Удобное время для связи</span>
                                <input name="time" type="text" placeholder="Напр.: сегодня 14:00–18:00"/>
                            </label>

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
