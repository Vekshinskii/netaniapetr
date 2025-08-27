'use client';
import Link from 'next/link';
import React from 'react';

type ConsultButtonProps = {
    href?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    target?: string;
    rel?: string;
    onClickAction?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function ConsultButton({
                                          href = '/',
                                          className,
                                          style,
                                          children = 'Запись на консультацию',
                                          target,
                                          rel,
                                          onClickAction,
                                      }: ConsultButtonProps) {
    return (
        <Link
            href={href}
            className={['order_consultation', className].filter(Boolean).join(' ')}
            style={style}
            target={target}
            rel={rel}
            onClick={onClickAction}
        >
            {children}
        </Link>
    );
}