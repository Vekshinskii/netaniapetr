"use client";
import React from "react";

type ConsultButtonProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClickAction?: () => void;
};

export default function ConsultButton({
                                          className,
                                          style,
                                          children = "Запись на консультацию",
                                          onClickAction,
                                      }: ConsultButtonProps) {
    function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();            // чтобы пробел не скроллил страницу
            onClickAction?.();
        }
    }

    return (
        <button
            type="button"
            className={["order_consultation", className].filter(Boolean).join(" ")}
            style={style}
            onClick={onClickAction}
            onKeyDown={handleKeyDown}
        >
            {children}
        </button>
    );
}
