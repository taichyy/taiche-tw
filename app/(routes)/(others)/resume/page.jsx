import Link from "next/link";
import Image from "next/image";

import BigImg from "@/components/bigImg";
import JobBlock from "@/components/job-block";
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
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 mb-3 py-2 tracking-wider font-semibold">
                    工作經驗
                </h2>
                <div className="flex flex-col gap-5 mb-7">
                    <JobBlock
                        duration={"2024/04 - "}
                        title={"全端網頁工程師"}
                        coporation={"誠諾工程技術股份有限公司"}
                        jd={`
                        獨立開發公司 ERP 系統，負責 架構設計、前端開發、API 設計、資料庫前期規劃，技術範圍涵蓋 Next.js、TypeScript<br/>
                        從 0 到 1 打造完整前端架構，開發超過 100+ 頁面、3 大模組（人資系統、倉儲管理、日常作業）<br/>
                        超過萬行程式碼的系統設計與優化，確保系統穩定性與可維護性<br/>
                        獨立負責 ERP 商業化專案，目前系統已正式運行並對外販售<br/>
                        `}
                    />
                    <JobBlock
                        duration={"2023/12 - 2024/03"}
                        title={"軟體工程師"}
                        coporation={"富有玩具有限公司（NX樂園）"}
                        jd={`
                        開發海報自動生成系統，整合 Adobe AI 產生海報，降低 80% 製作時間，提升設計效率<br/>
                        開發 Line LIFF 會員中心前端頁面，提升會員管理體驗<br/>
                        `}
                    />
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
                            您好，我叫 嚴太成，是一名前端專精、熟悉 Next.js (React) 的 全端網頁工程師。
                        </p>
                        <p className="mb-3">
                            不以年資論能力，我更注重解決問題與打造穩健架構的能力。
                            <br/>
                            我從高中開始學習網頁開發，大學期間開始接案，並協助多家企業完成專案開發：
                            <br/>
                            <br/>
                            <span className="font-bold">#前端網頁開發</span>
                            <br/>
                            =＞開發 10+ 個網站前端頁面與 UI 重構，包含已商業化的 ERP 系統
                            <br/>
                            =＞專注於可維護性、共用元件開發與效能優化
                        </p>
                        <p className="mb-3">
                            <span className="font-bold">#後端網頁開發</span>
                            <br/>
                            =＞獨立開發 2 家企業的完整官方網站（含後台管理系統）
                            <br/>
                            =＞為 1 家企業打造 ERP 解決方案（包含前後端架構設計）
                        </p>
                        <p className="mb-3">
                            <span className="font-bold">#資料庫設計</span>
                            <br/>
                            =＞設計 5 家企業的關聯式資料庫，確保數據一致性與擴展性
                        </p>
                        <p>
                            <br/>
                            只要有足夠的時間與自由度，我可以完成任何網頁開發需求。
                            <br/>
                            不論是前端 UI、後端 API，還是資料庫架構，我都能獨立開發並優化整體系統。
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
            <div>
                <h2 className="bg-[#EBFF00] text-slate-800 text-lg w-fit px-6 py-2 tracking-wider font-semibold">
                    相關證照
                </h2>
                <div className="pl-5 pt-3">
                    <h3 className="font-bold text-lg pt-3 text-slate-950">
                        <Image
                            src="/images/resume/google_cloud_certificate.png"
                            alt="China Steel Logo"
                            width={640}
                            height={75}
                        />
                    </h3>
                    <h4 className="text-sm text-slate-500">
                        Google Cloud 學程結業證書
                    </h4>
                </div>
            </div>
        </main>
    </div>
    );
}
 
export default Resume;