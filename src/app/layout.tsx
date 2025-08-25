// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

// Google Fonts (с кириллицей)
import { Advent_Pro, Roboto_Condensed } from "next/font/google";

const adventPro = Advent_Pro({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "600", "700"],   // укажи только реально используемые веса
    variable: "--font-advent",
    display: "swap",
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-roboto-condensed",
    display: "swap",
});

// Метаданные для всех страниц
export const metadata: Metadata = {
    title: "НАТАНИЯ – ПЕТР",
    description: "Перевод документов и смежные услуги в Израиле",
    // если есть домен — раскомментируй:
    // metadataBase: new URL("https://natania-petr.example"),
    icons: {
        icon: "/favicon.ico",
        // apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest", // если файла нет — убери эту строку
};

// Новый способ задания viewport в Next 13.4+/15
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
    themeColor: "#125956",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        // прокидываем CSS-переменные шрифтов на html
        <html lang="ru" className={`${adventPro.variable} ${robotoCondensed.variable}`}>
        <body>{children}</body>
        </html>
    );
}
