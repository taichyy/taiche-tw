"use client"
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Hamburger from '@/components/hamburger/hamburger';
import HomeBtn from '@/components/home-btn';

export default function HomePage() {

    const [img, setImg] = useState("/images/home/home_mainbgc.jpg")

    const handleHover = ( item ) => {
        if(item == 0) {
            setImg("/images/home/home_mainbgc.jpg")
        }else if(item == 1) {
            setImg("/images/home/home_portfolio.jpg")
        }else if(item == 2) {
            setImg("/images/home/home_resume.jpg")
        }else if(item == 3) {
            setImg("/images/home/home_contact.jpg")
        }
    }

    const [nav, setNav] = useState(true)

    const handleClick = () => {
        nav ? setNav(false) : setNav(true)
    }


    return (
        <div className="h-screen bg-[#f3f3f3] flex flex-row text-slate-800">
            <aside className='bg-white w-3/4 md:w-3/12'>
                <HomeBtn />
                <Hamburger onClick={()=>handleClick()} />
                <div className='ml-10 mt-10 md:mt-20'>
                    <div>
                        <h3 className='text-[#999]'>INTRO.</h3>
                        <p className='pt-5 pr-5 leading-8 text-justify'>
                            我是嚴太成，是一個專注於Next.JS、更擅長前端的全端網頁工程師。<br/>
    
                            雖然只有22歲，但已經有5年的網頁程式開發經歷。<br/>
                        </p>
                        <Link href="/about">
                            <span className='inline-block mt-10 py-1 hover:bg-[#EBFF00] duration-300'>
                                <span className='bg-[#EBFF00] px-2'>&gt;</span>
                                <span className='pl-3 px-2 text-sm cursor-pointer hover:font-bold'>About me</span>
                            </span>
                        </Link>
                    </div>
                    <div className='text-sm'>
                        <h3 className='text-[#999] mt-12'>CONTACT.</h3>
                        <div className='pt-4'>
                            <span className='icon-line grayscale pr-2' />
                            taichenyen
                        </div>
                        <div className='break-all pt-1'>
                            <span className='icon-phone pr-2' />
                            0963-121-279
                        </div>
                    </div>
                </div>
            </aside>
            <main className='relative w-full flex items-end justify-end'>
                <Image
                    src={img}
                    alt="Main image of website"
                    fill
                    contain
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                    className='opacity-20 hover:opacity-50 duration-200 z-0 aspect-video'
                />
                <nav style={ nav ? {opacity:1} : {opacity:0}} className='mr-5 mb-10 text-2xl font-semibold z-10 md:mr-20 md:mb-20 md:text-4xl text-right duration-200'>
                    <div className='flex flex-col'>
                        {/* Duplicate "作品集" twice because I need it to be in reversed order. */}
                        {process.env.NEXT_PUBLIC_ENV == "Job" ? (
                        <>
                            <span onMouseEnter={()=>handleHover(1)} onMouseLeave={()=>handleHover(0)} className='mb-8'>
                                <Link href="/portfolio">
                                    作品集
                                </Link>
                            </span>
                            <span onMouseEnter={()=>handleHover(2)} onMouseLeave={()=>handleHover(0)} className='mb-8'>
                                <Link href="/resume">
                                    個人履歷
                                </Link>
                            </span>
                        </>
                        ) : process.env.NEXT_PUBLIC_ENV == "FreeLancer" && (
                        <>
                            <span onMouseEnter={()=>handleHover(2)} onMouseLeave={()=>handleHover(0)} className='mb-8'>
                                <Link href="/about">
                                    關於我
                                </Link>
                            </span>
                            <span onMouseEnter={()=>handleHover(1)} onMouseLeave={()=>handleHover(0)} className='mb-8'>
                                <Link href="/portfolio">
                                    作品集
                                </Link>
                            </span>
                        </>
                        )}
                        <span onMouseEnter={()=>handleHover(3)} onMouseLeave={()=>handleHover(0)}>
                            <Link href="/contact">
                                聯絡方式
                            </Link>
                        </span>
                    </div>
                </nav>
            </main>
        </div>
    )
}