import Link from "next/link"

import HomeBg from "@/components/home-bg";
import HomeBtn from "@/components/home-btn";
import Hamburger from "@/components/hamburger/hamburger";

export default function HomePage() {
    const data = {
        home_intro: "我是嚴太成，一名專注於 Next.js、擅長前端架構設計的全端工程師。\n\n具備完整系統開發與商業化經驗，曾獨立打造並成功上線 ERP 產品。",
        home_phone: "0963-121-279"
    }

    return (
        <div className="h-screen bg-[#f3f3f3] flex flex-row text-slate-800">
            <aside className='bg-white flex flex-col gap-10 px-[1.5rem] pt-[2rem]'>
                <HomeBtn />
                <Hamburger />
                <div className=' flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#999]'>INTRO.</h3>
                        <p className='leading-8 text-justify whitespace-pre-line'>
                            {data.home_intro}
                        </p>
                        <Link href="/about">
                            <span className='inline-block py-1 hover:bg-[#EBFF00] duration-300'>
                                <span className='bg-[#EBFF00] px-2'>&gt;</span>
                                <span className='pl-3 px-2 text-sm cursor-pointer hover:font-bold'>About me</span>
                            </span>
                        </Link>
                    </div>
                    <div className='text-sm flex flex-col gap-3'>
                        <h3 className='text-[#999]'>CONTACT.</h3>
                        <div className='flex flex-col gap-1'>
                            <div className='break-all'>
                                <span className='icon-phone pr-2' />
                                {data.home_phone}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <HomeBg />
        </div>
    )
}
