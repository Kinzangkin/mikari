"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import images from '@/data/images.json';

export function Promot() {
  return (
    <section className="relative py-20 px-6">
      {/* Accent images */}
                <div className="absolute sm:right-100 right-0 top-50 w-24 h-24 z-20">
                  <Image
                    src={images[5]}
                    alt="accent image left"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="absolute sm:left-90 bottom-1 w-32 h-32 z-20">
                  <Image
                    src={images[6]}
                    alt="accent image right"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-300/50 shadow-lg mb-4">
            <h2 className="text-3xl md:text-4xl text-blue-900">
              Open Commission Promo
            </h2>
          </div>
          <p className="text-blue-700/80 mt-4">
            Watch a short showcase of my Live2D animation works.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-linear-to-br from-blue-400/30 via-orange-300/30 to-blue-400/30 rounded-3xl blur-2xl" />

          {/* Glass panel */}
          <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl p-4 md:p-6 border-2 border-white/60 shadow-2xl z-10">
            {/* Embedded Google Drive Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-linear-to-br from-blue-200 via-blue-100 to-orange-100 shadow-xl">
              <iframe
                src="https://drive.google.com/file/d/1tN3EY55BEr_dNtfNPBTI1LTcCKs0U-Tv/preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl"
              ></iframe>
            </div>

            {/* Commission Button */}
            <a href="https://wa.me/6285388985633" className="mt-6 flex justify-center">
              <button className="bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg shadow-orange-400/50 border-2 border-white/50 rounded-xl px-8 py-3 backdrop-blur-sm flex items-center gap-2 transition-all duration-300 hover:scale-105">
                Commission Me
                <FaArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
