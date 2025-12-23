import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "BanaSor - Yeni Nesil Eğitim Koçluğu",
    description: "YKS ve LGS hazırlıkta yapay zeka destekli kişisel eğitim koçun. Soru çözümü, ders programı ve deneme analizi ile başarıya ulaş.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body className={`${inter.variable} antialiased bg-stitch-navy min-h-screen`}>{children}</body>
        </html>
    );
}
