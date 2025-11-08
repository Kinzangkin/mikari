import React from 'react'
import { LuSparkles } from "react-icons/lu";
import { PiSparkleFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

function Hero() {
  return (
    <div className=''>
        <div className='w-full h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:p-70'>
            <section className='space-y-2 sm:justify-start z-10 sm:items-start flex flex-col items-center justify-center'>
                <LuSparkles className='text-3xl text-orange-400' />
                <h1 className='text-6xl md:text-7xl mb-4 text-blue-900 tracking-tight'>MIKARI</h1>
                <h2 className='text-xl md:text-2xl text-blue-700/90'>L2D Animator</h2>
                <div className='flex items-center space-x-2 text-lg md:text-xl text-orange-500/90'>
                    <p>Bringing Fanart to life</p>
                    <PiSparkleFill />
                </div>
                <div className='flex sm:space-x-5 sm:space-y-0 space-y-3 items-center my-10 sm:flex-row flex-col justify-center'>
                    <a href="#portfolio">
                        <button className='flex p-2 px-5 items-center space-x-2 border-2 sm:w-35 w-90 sm:justify-start justify-center bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-400/50 border-white/50 rounded-xl  backdrop-blur-sm '>
                            <h1>portofolio</h1>
                            <FaArrowRightLong  className=''/>
                        </button>
                    </a>
                    <a href="">
                        <button className='flex p-2 px-5 items-center space-x-2 bg-white/60 hover:bg-white/80 backdrop-blur-md border-2 border-orange-300/50 text-blue-900 shadow-lg sm:w-35 w-90 justify-center rounded-xl '>
                            Contact</button>
                    </a>
                </div>
            </section>
            <section>
                <div className="absolute -inset-4 bg-linear-to-r from-blue-400/30 via-orange-300/30 to-blue-400/30 rounded-3xl blur-2xl" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-2 border-2 border-white/60 shadow-2xl overflow-hidden">
                {/* Pastikan parent relative + ada tinggi */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[580px] aspect-3/4 rounded-2xl overflow-hidden bg-linear-to-br from-blue-200 to-orange-100">
                    <div className="absolute top-4 left-4 bg-blue-400/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs z-10">
                    ANIMATOR
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-400/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs z-10">
                        LIVE
                    </div>
                    <Image 
                        src="/image/image1.webp"
                        alt="image1"
                        fill
                        className="object-cover rounded-2xl z-0"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-blue-900/60 backdrop-blur-md rounded-xl p-3 border border-white/30">
                        <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white text-sm">Active Now</span>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hero