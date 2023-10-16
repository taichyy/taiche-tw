import Link from 'next/link';

const HomeBtn = ({type}) => {
    return (
        <div className={
            `w-24 h-24
            flex items-center justify-center 
            mt-8 ml-8 p-3 
            duration-500 font-medium bg-[#EBFF00] text-slate-950 text-2xl
            hover:text-white hover:bg-slate-950 
            ${type=="fixed" ? "fixed" : ""}`
        }>
            <h3><Link href="/">HOME</Link></h3>
        </div>
    );
}
 
export default HomeBtn;