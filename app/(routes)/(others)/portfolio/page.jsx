import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { portfolio } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
    const tagline = "Tai's Portfolio";
    const heading = "個人作品集";
    const description = "包含實務、接案、個人專案等，展示我的前端開發技能和設計能力。這些作品涵蓋了多種技術和框架，包括但不限於 JavaScript、TypeScript、php 及各式 No-SQL、SQL 資料庫。展示了我在網頁程式設計和開發方面的專業知識。";

    return (
        <div>
            <section className="py-32">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6">
                            {tagline}
                        </Badge>
                        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                            {heading}
                        </h2>
                        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                            {description}
                        </p>
                    </div>
                    <main className="
                        flex flex-col md:mx-14 mb-2 gap-2 w-full
                        sm:grid sm:grid-cols-2 md:grid-cols-3
                    ">
                        {portfolio.map((item, index) => (
                            <Card className="w-11/12 mx-auto mb-10" key={index}>
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="whitespace-pre-line">
                                        <div className="mb-1">
                                            {item.subtitle}
                                        </div>
                                        <div className="break-all text-sm">
                                            {item.languages.join(' / ')}
                                        </div>
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
                                    <Link href={`/portfolio/${item.id}`}>
                                        <div className="cursor-pointer border-2 border-[#e31b6d] mt-10 py-1 px-5 hover:bg-[#e31b6d] duration-200 hover:text-white">
                                            了解更多
                                        </div>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </main>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;