import Image from "next/image";
import Link from "next/link";

import BigImg from "@/components/bigImg";
import Hamburger from "@/components/hamburger/hamburger";
import HomeBtn from "@/components/home-btn";
import ResumePercent from "@/components/resume-percent/resume-percent";

const Resume = () => {

    const data = {
        Bgc : "/images/resume/big.jpeg",
        BgAlt : "Big",
        TextTopL : "個人簡歷",
        TextTopR : "Resume",
        TextDown : "嚴太成"
    }

    return (
    <div>
        <nav>
            <HomeBtn type="fixed" className="hidden"/>
            <Hamburger />
        </nav>
        <BigImg data={data} btn="md" />
        <Image 
            src="/images/resume/headshot.jpg"
            alt="Personal headshot image"
            height={200}
            width={200}
            className="mr-auto ml-auto rounded-full mt-10 mb-10 md:mr-72 md:rounded-xl"
        />
        <main className="px-5 mb-10 space-y-16 md:px-72 md:grid-cols-2 md:grid md:space-y-0">
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    教育程度
                </h2>
                <div className="pl-5 pt-3">
                    <h3 className=" text-slate-500">
                        2019/09 - 2023/07
                    </h3>
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        國立高雄科技大學（第一校區）
                    </h3>
                    <h4 className="text-sm text-slate-500">
                        資訊管理系
                    </h4>
                </div>
            </div>
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    工作經驗
                </h2>
                <div className="pl-5 pt-3 md:mb-20">
                    <h3 className=" text-slate-500">
                        2023/10 -
                    </h3>
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        網頁設計師
                    </h3>
                    <h4 className="text-sm text-slate-500">
                        雲書苑教育科技有限公司
                    </h4>
                    <p className="pt-3 text-sm">
                        公司主要產品為快刀論文原創性比對系統。<br/>
                        工作內容：<br/>
                        1. php 後端程式、RestfulAPI建置。<br/>
                        2. MySQL 關聯式資料庫建構規劃。
                    </p>
                </div>
            </div>
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    工作技能
                </h2>
                <div className="pl-5 pt-3">
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        前端網頁開發
                    </h3>
                    <div className="bg-white px-5 py-6 mt-2 mr-5">
                        <ul className="space-y-3">
                            <li>
                                <h4>HTML</h4>
                                <ResumePercent percent={90}/>
                            </li>
                            <li>
                                <h4>CSS + tailwindCSS</h4>
                                <ResumePercent percent={90}/>
                            </li>
                            <li>
                                <h4>JavaScript + NextJS</h4>
                                <ResumePercent percent={85}/>
                            </li>
                            <li>
                                <h4>JavaScript + ReactJS</h4>
                                <ResumePercent percent={75}/>
                            </li>
                            <li>
                                <h4>JavaScript + jQuery</h4>
                                <ResumePercent percent={70}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pl-5 pt-3">
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        後端網頁開發
                    </h3>
                    <div className="bg-white px-5 py-6 mt-2 mr-5">
                        <ul className="space-y-3">
                            <li>
                                <h4>JavaScript + NextJS</h4>
                                <ResumePercent percent={85}/>
                            </li>
                            <li>
                                <h4>php</h4>
                                <ResumePercent percent={80}/>
                            </li>
                            <li>
                                <h4>MySQL + phpMyAdmin</h4>
                                <ResumePercent percent={75}/>
                            </li>
                            <li>
                                <h4>NO-SQL + MongoDB</h4>
                                <ResumePercent percent={75}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pl-5 pt-3 md:mb-20">
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        其他技能
                    </h3>
                    <div className="bg-white px-5 py-6 mt-2 mr-5">
                        <ul className="space-y-3">
                            <li>
                                <h4>Git + GitHub</h4>
                                <ResumePercent percent={80}/>
                            </li>
                            <li>
                                <h4>Linux + Ubuntu(CLI)</h4>
                                <ResumePercent percent={60}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    自我介紹
                </h2>
                <div className="pl-5 pt-3">
                    <div className="bg-white px-5 py-6 mt-2 mr-5">
                        <p className="mb-6">
                            您好，我叫嚴太成，是一名前端寫得更好，專精於NextJS(基於React)的全端網頁工程師。
                        </p>
                        <p className="mb-3">
                            我從高中開始學習網頁開發，大學開始進行個人接案，內容包含：
                            <br/>
                            <br/>
                            <span className="font-bold">#前端網頁開發</span>
                            <br/>
                            =＞進行10多個網站前端切版、重構
                        </p>
                        <p className="mb-3">
                            <span className="font-bold">#後端網頁開發</span>
                            <br/>
                            =＞為2家企業建立完整官方網站（後台內容管理、前端頁面）
                            <br/>
                            =＞為1家企業建立完整ERP網頁解決方案（進行中）
                        </p>
                        <p className="mb-3">
                            <span className="font-bold">#資料庫設計</span>
                            <br/>
                            =＞為5家企業建立關聯式資料庫設計
                        </p>
                        <p>
                            以上皆是作為一個大學畢業新鮮人的經歷。
                            <br/><br/>
                            我的優勢是不安於現狀、懂得持續精進。因此有自信可以說，在網頁設計這塊，只要擁有足夠的時間、自由度，我什麼都能寫。公司如果有想要開發什麼網頁、新增什麼功能，我絕對都可以達成。
                        </p>
                    </div>
                       
                </div>
            </div>
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    外語能力
                </h2>
                <div className="pl-5 pt-3">
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        英語
                    </h3>
                    <h4 className="text-sm text-slate-500">
                        TOEIC多益 795分
                    </h4>
                </div>
            </div>
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    接案經驗
                </h2>
                <div className="pl-5 pt-3 grid grid-cols-2">
                    <Image
                        src="/images/resume/chinaSteel.png"
                        alt="China Steel Logo"
                        width={200}
                        height={200}
                        className=" w-auto h-12 px-4 my-3 mr-auto ml-auto aspect-auto"
                    />
                    <Image
                        src="/images/resume/NKUST.png"
                        alt="China Steel Logo"
                        width={200}
                        height={200}
                        className=" w-auto h-12 px-4 my-3 mr-auto ml-auto aspect-auto"
                    />
                </div>
                <h3 className="text-sm text-right pr-4 pt-2 text-slate-500">
                    ......詳細請移至
                    <Link href="/portfolio" className=" font-semibold text-slate-950">
                        作品集頁面
                    </Link>
                </h3>
            </div>
        </main>
    </div>
    );
}
 
export default Resume;