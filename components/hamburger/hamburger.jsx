"use client"
import Link from "next/link";
import { useState } from "react";

import styles from "./hamburger.module.css";

export default function Hamburger() {
    // This component, instead of using Tailwind css, uses a css module.
    // Because this pure CSS hamburger is downloaded from codepen.io, and it was originally written in CSS, not Tailwind CSS.
    
    // Unfortunately, I can not find the author of this hamburger. If you know the author, please let me. 
    
    const [nav, setNav] = useState(true)

    return (
        <nav role="navigation" onClick={() => setNav(!nav)} className={styles.nav}>
            <div className={styles.menuToggle}>
                {/* A fake / hidden checkbox is used as click receiver, so you can use the :checked selector on it. */}
                <input type="checkbox" />
                {/* Some spans to act as a hamburger. They are acting like a real hamburger, not that McDonalds stuff. */}
                <span></span>
                <span></span>
                <span></span>
                {/* Too bad the menu has to be inside of the button. But hey, it's pure CSS magic. */}
                <ul className={styles.menu}>
                    <Link href="/">
                        <li>
                            <h4 style={{ fontWeight: "800" }}>回首頁</h4>
                        </li>
                    </Link>
                    <Link href="/about">
                        <li>
                            <h4>關於我</h4>
                        </li>
                    </Link>
                    <Link href="/portfolio">
                        <li>
                            <h4>作品集</h4>
                        </li>
                    </Link>
                    <Link href="/resume">
                        <li>
                            <h4>個人履歷</h4>
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li>
                            <h4>聯絡方式</h4>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
