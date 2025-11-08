"use client";
import { FaMagic, FaLayerGroup, FaCogs, FaFileExport } from "react-icons/fa";

export default function ProcessSection() {
  const steps = [
    { icon: <FaMagic />, title: "Original Artwork" },
    { icon: <FaLayerGroup />, title: "Layer Separation" },
    { icon: <FaCogs />, title: "Rigging & Deformers" },
    { icon: <FaFileExport />, title: "Animation & Export" },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2a78] flex items-center gap-2">
            <FaMagic className="text-orange-500" /> About the Process
          </h2>

          <p className="text-[#3b3f5c] leading-relaxed">
            {"Hi! I'm Mikari, a Live2D artist specializing in transforming static fanart into expressive animated wallpapers."}
          </p>
          <p className="text-[#3b3f5c] leading-relaxed">
            I focus on bringing your favorite characters to life — making them
            blink, breathe, and move naturally as interactive Live2D backgrounds.
          </p>
          <p className="text-[#3b3f5c] leading-relaxed">
            My process involves separating each artwork layer, applying precise
            rigging, and fine-tuning smooth motions that make the wallpaper feel alive.
          </p>

          <p className="text-[#3b3f5c] leading-relaxed">
            Whether you want your favorite character to smile, wave, or simply
            breathe subtly on your screen — I make every movement feel immersive
            and personal.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-linear-to-b from-white to-[#f6f8ff] rounded-2xl shadow-md p-6 space-y-4 relative">
          <h3 className="text-lg md:text-xl font-semibold text-[#1e2a78] mb-4">
            Animation Workflow
          </h3>

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-linear-to-r from-[#f9fbff] to-[#f0f4ff] p-4 rounded-xl shadow-sm cursor-pointer hover:scale-[1.02] hover:shadow transition-all duration-200"
            >
              <div className="flex items-center gap-3 text-[#1e2a78]">
                <div className="text-[#6273ff] text-lg">{step.icon}</div>
                <span className="font-medium">{step.title}</span>
              </div>
              <span className="text-[#6273ff] text-sm font-semibold">→</span>
            </div>
          ))}

          <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-md">
            <FaMagic />
          </div>
        </div>
      </div>
    </section>
  );
}
