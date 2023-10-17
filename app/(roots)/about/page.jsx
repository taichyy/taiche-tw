"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { badgeVariants } from "@/components/ui/badge"
import HomeBtn from "@/components/home-btn"
import Hamburger from "@/components/hamburger/hamburger"

export default function About() {

  const [showedText, setShowedText] = useState(true)

  const handleClick = () => {
    showedText ? setShowedText(false) : setShowedText(true)
  }
  

  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <nav>
          <HomeBtn />
          <Hamburger onClick={handleClick}/>
        </nav>
        <div className="grid grid-cols-1 px-10 pt-10 pb-8 flex-grow gap-10 md:grid-cols-3">
          <aside className="relative h-full">
            <Image
              src="/images/about/bortwo.jpg"
              alt="My pic"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              className="object-cover h-0 md:h-full hover:opacity-80 duration-300"
            />
          </aside>
          <main className="flex flex-col">
            <div className="relative flex-grow h-56 md:h-full">
              <Image
                src="/images/about/bike.jpg"
                alt="My pic"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className="object-cover hover:opacity-80 duration-300"
              />
            </div>
            <h2 className="text-2xl md:text-3xl my-10 font-medium leading-relaxed tracking-wider">
              <TypeAnimation
                sequence={[
                  'MAKE IT REALITY!',
                  1000,
                  '將想法變成現實！',
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '30px', display: 'inline-block' }}
                className="font-semibold"
                repeat={Infinity}
              />
              <p className="mt-3 text-lg leading-tight">
                這是一頁我的個人介紹頁！<br/>
                若是想了解能力、背景、知識，<br/>
                請到：<br/>
              </p>
              <div className="space-x-2">
                <Link href="/resume" className={badgeVariants({ variant: "" })}>
                  <span className="text-sm">
                    個人簡歷
                  </span>
                </Link>
                <Link href="/portfolio" className={badgeVariants({ variant: "" })}>
                  <span className="text-sm">
                    作 品 集
                  </span>
                </Link>
              </div>
            </h2>
          </main>
          <article className="duration-200" style={showedText ? {opacity:1} : {opacity:0.05}}>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>技能 Skills</AccordionTrigger>
                <AccordionContent>
                  1. 前端網頁設計：<br/>JavaScript+TypeScript+React+Next.js+jQuery、<br/>HTML5、CSS3
                  <div className="flex gap-2 py-1.5">
                    <Image 
                      src="/images/about/JS.png"
                      alt="JS Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/TS.png"
                      alt="TS Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/react.png"
                      alt="React.js Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/NEXT.svg"
                      alt="Next.js Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/jQuery.png"
                      alt="jQuery Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/HTML5.png"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/CSS3.png"
                      alt="CSS3 Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                  </div>
                  2. 後端網頁設計：Next.js、php
                  <div className="flex gap-2 py-1.5">
                    <Image 
                      src="/images/about/NEXT.svg"
                      alt="Next.js Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/PHP.png"
                      alt="PHP Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                  </div>
                  3. 資料庫操作：MongoDB(NO-SQL)、phpMyAdmin(MySQL)
                  <div className="flex gap-2 py-1.5">
                    <Image 
                      src="/images/about/MONGODB.png"
                      alt="MongoDB Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/PHPMYADMIN.png"
                      alt="phpMyAdmin Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                  </div>
                  4. 其他技能：Git+GitHub、CSS+tailwind
                  <div className="flex gap-2 py-1.5">
                    <Image 
                      src="/images/about/git.png"
                      alt="Git Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                    <Image 
                      src="/images/about/tailwind.jpg"
                      alt="Tailwindcss Logo"
                      width={20}
                      height={20}
                      className="aspect-square"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>性格 Personalities</AccordionTrigger>
                <AccordionContent>
                  總是喜歡嘗試一些新鮮的事物！<br/>
                  總是保持樂觀、善良！
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>興趣 Interests</AccordionTrigger>
                <AccordionContent>
                  寫網頁、攝影、檔車
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </div>
      </div>
    </div>
  )
}
