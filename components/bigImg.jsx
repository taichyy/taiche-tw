import Image from 'next/image';

import HomeBtn from '@/components/home-btn';

export default function BigImg({data, btn, height}) {

    return (
    <div className={`w-screen relative ${height=="full" ? "h-screen" : "h-[80vh]" }`}>
        <Image 
            src={data.Bgc}
            alt={data.BgAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
            className='object-cover'
        />
        {data ? (
            <div className="
                absolute top-1/3 md:top-1/2 left-[12.5%] md:left-1/4
                flex items-center
                px-4 py-4 md:px-16 md:py-16
                w-3/4 md:w-1/2 min-h-fit
                font-extrabold duration-300
            ">
                {/* bgc */}
                <div className='bg-white opacity-30 w-full h-full absolute top-0 left-0 hover:opacity-40 duration-200' />
                {/* content */}
                <div className=' text-black text-2xl w-full'>
                    <div className="flex justify-between items-center pb-5 mb-3 border-b-2 border-slate-400">
                        <h2>
                            {data.TextTopL}
                        </h2>
                        <h5 className='text-base'>
                            {data.TextTopR}
                        </h5>
                    </div>
                    <div className='mt-5'>
                        <h3>
                            {data.TextDown}
                        </h3>
                    </div>
                </div>
            </div>
        ) : null}
        {btn == true ? <HomeBtn type="fixed"/> : null}
        {btn === 'md' ? <HomeBtn type="fixed" className="hidden md:flex"/> : null}
    </div>
    )
}