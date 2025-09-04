"use client";
import React from "react";

type ConsultButtonProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClickAction?: () => void;
    disabled?: boolean;
    ariaLabel?: string;
};

export default function ConsultButton({
                                          className,
                                          style,
                                          children = "Запись на консультацию",
                                          onClickAction,
                                          disabled,
                                          ariaLabel,
                                      }: ConsultButtonProps) {
    return (
        <button
            type="button"
            className={["order_consultation", className].filter(Boolean).join(" ")}
            style={style}
            onClick={onClickAction}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}
