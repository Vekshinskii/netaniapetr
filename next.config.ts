import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true, 
    env: {
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    },
    images: {
        unoptimized: true
    }
}

    module.exports = nextConfig
