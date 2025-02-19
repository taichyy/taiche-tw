import { Analytics } from "@vercel/analytics/react"

import "./globals.css"
import "../public/icomoon/style.css";

export const metadata = {
    title: "Tai's taiche.tw | HOME",
    description: 'Tai-Cheng, Yen － 個人介紹、作品集、履歷網頁',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans min-h-screen bg-[#F3F3F3]">
                <Analytics />
                {children}
            </body>
        </html>
    )
}
