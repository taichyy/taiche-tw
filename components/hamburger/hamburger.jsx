// Modules
import Link from 'next/link';
// Data

// Components

// Styles
import styles from './hamburger.module.css';

export default function Hamburger() {


    return (
        <nav role="navigation" className={styles.nav}>
            <div className={styles.menuToggle}>
                {/* <!--
                A fake / hidden checkbox is used as click reciever,
                so you can use the :checked selector on it.
                --> */}
                <input type="checkbox" />
                {/* <!--
                Some spans to act as a hamburger.
                
                They are acting like a real hamburger,
                not that McDonalds stuff.
                --> */}
                <span></span>
                <span></span>
                <span></span>
                {/* <!--
                Too bad the menu has to be inside of the button
                but hey, it's pure CSS magic.
                --> */}
                <ul className={styles.menu}>
                <Link href="/">
                    <li>
                        <h4 style={{fontWeight : "800"}}>回首頁</h4>
                    </li>
                </Link>
                <Link href="/Portfolio">
                    <li>
                        <h4>作品集</h4>
                    </li>
                </Link>
                <Link href="/Resume">
                    <li>
                        <h4>個人履歷</h4>
                    </li>
                </Link>
                <Link href="/Contact">
                    <li>
                        <h4>聯絡方式</h4>
                    </li>
                </Link>
                </ul>
            </div>
            </nav>
    )
}
