"use client";
import { motion } from "framer-motion";
import { SiKofi } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Border from "./ui/Border";

export default function Support() {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-b from-blue-50 via-white to-pink-5">
      {/* Background Glow */}
      <div className="absolute top-0">
        <Border />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <Border />
      </div>

      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-4 text-blue-700/80 bg-clip-text"
        >
          Support My Creations ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          If you enjoy my digital works, AMV projects, or exclusive wallpapers —
          you can support me through <b>Ko-fi</b> or <b>SociaBuzz</b>.  
          Your support helps me create more awesome stuff 💖
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Ko-fi Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all w-full sm:w-80 border border-gray-200"
          >
            <div className="absolute inset-0 bg-linear-to-r to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
            <div className="p-6 flex flex-col items-center">
              <SiKofi className="text-5xl text-pink-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Ko-fi Store</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 text-center">
                Get my special digital wallpapers and project files exclusively on Ko-fi ☕
              </p>
              <a
                href="https://ko-fi.com/mikarileaf"
                target="_blank"
                className="px-5 py-2 rounded-full bg-linear-to-r from-pink-500 to-rose-400 text-white font-semibold shadow-md hover:shadow-pink-300/40 transition z-20"
              >
                Visit Ko-fi
              </a>
            </div>
          </motion.div>

          {/* SociaBuzz Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-2xl bg-white  shadow-lg hover:shadow-2xl transition-all w-full sm:w-80 border border-gray-200 "
          >
            <div className="absolute inset-0 bg-linear-to-r from-yellow-200/20 via-orange-200/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
            <div className="p-6 flex flex-col items-center">
              <FaStar className="text-5xl text-yellow-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">SociaBuzz Profile</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 text-center">
                You can also support or buy my digital products directly via SociaBuzz 🌟
              </p>
              <Link
                href="https://sociabuzz.com/yourname"
                target="_blank"
                className="px-5 py-2 rounded-full bg-linear-to-r from-yellow-400 to-orange-400 text-white font-semibold shadow-md hover:shadow-yellow-300/40 transition z-20"
              >
                Visit SociaBuzz
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
