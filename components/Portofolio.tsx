"use client";
import Card from "./ui/Card";
import projects from "@/data/projects.json";
import React, { useState } from "react";

function Portofolio() {
  const [activeTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <div className="flex flex-col justify-center items-center space-y-10 my-0">
      <div className="flex flex-col items-center mt-20">
        <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-300/50 shadow-lg mb-4">
          <h2 className="text-3xl md:text-4xl text-blue-900">Portfolio Showcase</h2>
        </div>
        <p className="text-blue-700/80 mt-4 z-20">Recent Live2D Animation Projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center place-items-center w-full sm:px-25 px-5 transition-all duration-500">
        {displayedProjects.map((item) => (
          <Card key={item.id} title={item.title} media={item.media} type={item.type} link={item.link} />
        ))}
      </div>

      {filteredProjects.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full bg-blue-600 text-white cursor-pointer z-20 hover:bg-blue-700 transition-all"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

export default Portofolio;
