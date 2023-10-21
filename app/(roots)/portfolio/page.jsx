import Hamburger from "@/components/hamburger/hamburger";
import HomeBtn from "@/components/home-btn";
import Link from "next/link";

const Portfolio = () => {
    return (
    <>
    <HomeBtn type={"fixed"}/>
    <Hamburger />
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-center">
            本頁面正在重新建置中，請先至
            <a href="https://taiche-tw-old.vercel.app/portfolio" target="_new" className=" text-red-950 font-bold text-lg">舊站</a>
            <br/>
            或
            <Link href="/resume" className=" text-red-950 font-bold text-lg">個人簡歷</Link>、<Link href="/about" className=" text-red-950 font-bold text-lg">關於我</Link>
        </div>
    </div>
    </>
    );
}
 
export default Portfolio;