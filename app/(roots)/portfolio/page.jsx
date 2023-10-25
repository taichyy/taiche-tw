import Link from "next/link";
import Image from "next/image";

import Hamburger from "@/components/hamburger/hamburger";
import HomeBtn from "@/components/home-btn";
import PortfolioMore from "../../../components/portfolio-more";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { portfolio } from "@/lib/data";

const Portfolio = () => {

    return (
    <div>
        <nav>
            <HomeBtn type="fixed" className="hidden md:flex"/>
            <Hamburger />
        </nav>
        <div className="px-5 mb-10 md:px-72 md:grid">
            <h2 className="mt-28 md:mt-40 text-center text-3xl tracking-wider font-bold text-slate-600 border-b-2 w-fit pb-2 mx-auto border-slate-600 px-3">
                實務作品
            </h2>
        </div>
        <main className="
            flex mx-6 flex-col md:mx-14 mb-2 gap-2
            sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 
        ">
            {portfolio.real.map( (item,index) => (
                <Card className="w-11/12 mx-auto mb-10" key={index}>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            {item.title}
                        </CardTitle>
                        <CardDescription>
                            {item.subtitle.split('^t').map( (line, index) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                            <span className="break-all text-sm">
                                {item.language}
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full rounded-sm overflow-hidden aspect-video">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt={`${item.title} Image`}
                                src={item.img[0]}
                                className="hover:opacity-90 duration-200"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <PortfolioMore data={item}/>
                    </CardFooter>
                </Card>
            ))}
        </main>
        <div className="px-5 mb-10 md:px-72 md:grid">
            <h2 className="mt-28 md:mt-16 text-center text-3xl tracking-wider font-bold text-slate-600 border-b-2 w-fit pb-2 mx-auto border-slate-600 px-3">
                其他作品
            </h2>
        </div>
        <main className="
            flex mx-6 flex-col md:mx-14 mb-10 gap-2
            sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 
        ">
            {portfolio.others.map( (item,index) => (
                <Card className="w-11/12 mx-auto mb-10" key={index}>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            {item.title}
                        </CardTitle>
                        <CardDescription>
                            {item.subtitle.split('^t').map( (line, index) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                            <span className="break-all text-sm">
                                {item.language}
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full rounded-sm overflow-hidden aspect-video">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt={`${item.title} Image`}
                                src={item.img[0]}
                                className="hover:opacity-90 duration-200"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <PortfolioMore data={item}/>
                    </CardFooter>
                </Card>
            ))}
        </main>
    </div>
    );
}
 
export default Portfolio;