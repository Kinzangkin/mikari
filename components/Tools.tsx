"use client";
import React from "react";
import { FaPaintBrush, FaFilm, FaStar } from "react-icons/fa"; // react-icons

export function Tools() {
  const tools = [
    {
      name: "Live2D Cubism",
      category: "Animation",
      icon: <FaStar className="w-10 h-10 text-blue-500" />,
      color: "blue",
    },
    {
      name: "Photoshop",
      category: "Art",
      icon: <FaPaintBrush className="w-10 h-10 text-blue-500" />,
      color: "blue",
    },
    {
      name: "After Effects",
      category: "Editing",
      icon: <FaFilm className="w-10 h-10 text-purple-500" />,
      color: "purple",
    },
    {
      name: "Ibispaint Paint",
      category: "Rendering",
      icon: <FaPaintBrush className="w-10 h-10 text-orange-500" />,
      color: "orange",
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-300/50 shadow-lg mb-4">
            <h2 className="text-3xl md:text-4xl text-blue-900">Tools I Use</h2>
          </div>
          <p className="text-blue-700/80 mt-4">
            The essential apps behind every Live2D animation.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="relative group hover:-translate-y-2 hover:scale-[1.03] transition-transform duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-br from-blue-400/30 via-orange-300/30 to-blue-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/60 shadow-xl h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className={`inline-flex p-5 rounded-2xl bg-linear-to-br mb-4 ${tool.color === "blue"
                    ? "from-blue-400/20 to-blue-300/20"
                    : tool.color === "purple"
                      ? "from-purple-400/20 to-purple-300/20"
                      : "from-orange-400/20 to-orange-300/20"
                    }`}
                >
                  {tool.icon}
                </div>

                {/* Tool Name */}
                <h3 className="text-xl text-blue-900 mb-2">{tool.name}</h3>

                {/* Category Badge */}
                <div className="px-3 py-1 bg-blue-400/20 backdrop-blur-sm rounded-full text-sm text-blue-700">
                  {tool.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
