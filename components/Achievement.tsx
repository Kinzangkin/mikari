"use client";
import { FaStar, FaHeart, FaClock, FaMagic } from "react-icons/fa";

const achievements = [
  {
    icon: FaStar,
    number: "+45",
    label: "Projects Completed",
    color: "orange",
  },
  {
    icon: FaHeart,
    number: "20+",
    label: "Happy Clients",
    color: "pink",
  },
  {
    icon: FaClock,
    number: "3",
    label: "Years of Experience",
    color: "blue",
  },
  {
    icon: FaMagic,
    number: "Live2D",
    label: "Specialized in Animation",
    color: "purple",
  },
];

export default function Achievement() {
  return (
    <section className=" relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-300/50 shadow-lg mb-4">
            <h2 className="text-3xl md:text-4xl text-blue-900">
              My Achievements ✦
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group transform transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-br from-blue-400/40 via-orange-300/40 to-blue-400/40 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/60 shadow-xl sm:text-center">
                {/* Icon */}
                <stat.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    stat.color === "orange"
                      ? "text-orange-500"
                      : stat.color === "pink"
                      ? "text-pink-500"
                      : stat.color === "blue"
                      ? "text-blue-500"
                      : "text-purple-500"
                  }`}
                />

                {/* Number */}
                <div className="text-4xl font-bold mb-2 bg-linear-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-blue-800/90">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
