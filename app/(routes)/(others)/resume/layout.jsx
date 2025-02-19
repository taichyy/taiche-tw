import Hamburger from "@/components/hamburger/hamburger";

export const metadata = {
    title: "Tai's taiche.tw | 個人簡歷",
}

export default function ResumeLayout({ children }) {
    return (
        <>
            {/* Not importing in the outer layout since it's a pure CSS burger, 
                need to import it here to close the hamburger menu when link is changed. */}
            <Hamburger />
            {children}
        </>
    );
}