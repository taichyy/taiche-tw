import Link from 'next/link';

const HomeBtn = ({type, className}) => {
    return (
        <div className={
            `w-20 h-20 md:w-24 md:h-24
            flex items-center justify-center 
            mt-8 ml-8 p-3 
            duration-500 font-semibold md:font-medium bg-[#EBFF00] text-slate-950 text-xl md:text-2xl
            hover:text-white hover:bg-slate-950
            ${type=="fixed" ? "fixed" : ""} ${className}`
        }>
            <h3><Link href="/">HOME</Link></h3>
        </div>
    );
}
 
export default HomeBtn;