import Link from 'next/link';

import { cn } from '@/lib/utils';

const HomeBtn = ({ className }) => {
    return (
        <div className={cn(
            `w-20 h-20 md:w-24 md:h-24
            flex items-center justify-center 
            p-3 
            duration-500 font-semibold md:font-medium bg-[#EBFF00] text-slate-950 text-xl md:text-2xl
            hover:text-white hover:bg-slate-950 z-50
           `, className)}
        >
            <h3>
                <Link href="/">
                    HOME
                </Link>
            </h3>
        </div>
    );
}

export default HomeBtn;