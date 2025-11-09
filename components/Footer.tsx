"use client";

import { FaInstagram, FaTiktok, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 md:py-6 px-4 md:px-8 mt-5">
      <div className="max-w-7xl mx-auto z-20 relative">
        <div className="bg-blue-900/70 backdrop-blur-xl rounded-2xl p-6 border-2 border-blue-700/50 shadow-2xl items-center flex sm:flex-row sm:justify-between flex-col gap-5">
          {/* Left Section - Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-white font-medium text-sm md:text-base">
              © 2025 MIKARI
            </span>
          </div>

          {/* Center Section - Social Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.instagram.com/mikarileaf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center text-white">
                <FaInstagram size={20} />
              </button>
            </a>

            <a
              href="https://www.tiktok.com/@mikarileaf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center text-white">
                <FaTiktok size={20} />
              </button>
            </a>

            <a
              href="https://discord.gg/bDT9dTTPeh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              title="Discord"
            >
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center text-white">
                <FaDiscord size={20} />
              </button>
            </a>

            <a
              href="https://wa.me/6285388985633"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center text-white">
                <FaWhatsapp size={20} />
              </button>
            </a>
          </div>

          {/* Right Section - Commission Button */}
          <button className="bg-white/10 backdrop-blur-sm border hover:bg-white/20 border-white/20 px-4 md:px-6 text-white py-2 rounded-lg font-medium transition-colors text-sm md:text-base">
            ✨ Open for Commissions
          </button>
        </div>
      </div>
    </footer>
  );
}
