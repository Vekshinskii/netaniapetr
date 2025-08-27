'use client';
import Link from 'next/link';
import React from 'react';

type ConsultButtonProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'href'
> & {
    href?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

export default function ConsultButton({
                                          href = '/',
                                          className,
                                          style,
                                          children = 'Запись на консультацию',
                                          ...rest
                                      }: ConsultButtonProps) {
    return (
        <Link
            href={href}
            className={['order_consultation', className].filter(Boolean).join(' ')}
            style={style}
            {...rest}                       // target, rel, onClick и т.п.
        >
            {children}
        </Link>
    );
}