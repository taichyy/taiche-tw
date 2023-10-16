"use client"
// Modules
import Link from 'next/link'
// Components
import Hamburger from '@/components/hamburger/hamburger';
import HomeBtn from '@/components/home-btn';
import { Phone } from 'lucide-react';

export default function HomePage() {

    return (

        <div className="min-h-screen bg-[#f3f3f3] flex flex-row text-slate-800">
            <aside className='bg-white w-3/12'>
                <HomeBtn />
                <div className='ml-10 mt-20'>
                    <div>
                        <h3 className='text-[#999]'>INTRO.</h3>
                        <p className='pt-5 pr-5 leading-8 text-justify'>
                            我是一個既新鮮又不新鮮的人。新鮮於大學剛畢業不久；不新鮮於有5年的網頁接案經歷。合作對象包括中國鋼鐵、國立高雄科技大學等組織。是一個專注於Next.JS、更擅長前端的全端網頁工程師。
                        </p>
                        <Link href="/about">
                            <span className='inline-block mt-10 py-1 hover:bg-[#EBFF00] duration-300'>
                                <span className='bg-[#EBFF00] px-2'>&gt;</span>
                                <span className='pl-3 px-2 text-sm font-bold'>About me</span>
                            </span>
                        </Link>
                    </div>
                    <div>
                        <h3 className='text-[#999] mt-12'>CONTACT.</h3>
                        <div className='pt-1'>
                            <span className='icon-line grayscale pr-2' />
                            taichenyen
                        </div>
                        <div>
                            <span className='icon-phone pr-2' />
                            0963-121-279
                        </div>
                    </div>
                </div>
                
            </aside>
            <main>
                
            </main>
        </div>
    )
}