import Link from "next/link";
import Image from "next/image";

import Hamburger from "@/components/hamburger/hamburger";
import HomeBtn from "@/components/home-btn";
import PortfolioMore from "../../../components/portfolio-more";

import { portfolio } from "@/lib/data";

const Portfolio = () => {

    return (
    <div>
        <nav>
            <HomeBtn type="fixed" className="hidden md:flex"/>
            <Hamburger />
        </nav>
        <main className="px-5 mb-10 md:px-72 md:grid">
            <h2 className="mt-20 md:mt-40 text-center text-3xl tracking-wider font-bold text-slate-600 border-b-2 w-fit pb-2 mx-auto border-slate-600 px-3">實務作品</h2>
        </main>
        <div className="flex mx-6 flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 md:mx-14">
            {portfolio.map( (item,index) => (
                <div key={index}>
                    <div className="relative w-full aspect-video">
                        <Image
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={`${item.title} Image`}
                            src={item.img}
                            className="z-10"
                        />
                        <div className="absolute z-20 w-full h-full opacity-0 hover:opacity-100 duration-150 bg-[#f6f6f6] flex flex-col items-center justify-center">
                            <span className="font-semibold text-lg">
                                {item.title}
                            </span>
                            <span className=" text-[#e31b6d] text-base">
                                {item.subtitle}
                            </span>
                            <PortfolioMore data={item}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}
 
export default Portfolio;