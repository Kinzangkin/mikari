"use client";
import Image from "next/image";

interface Maincardprops {
  title: string;
  media: string;
  type: string;
}

function Card({ title, media, type }: Maincardprops) {
  let thumbnailUrl = "";
  let youtubeUrl = "";

  if (media.includes("youtu")) {
    const videoId = media.includes("watch?v=")
      ? media.split("watch?v=")[1].split("&")[0]
      : media.split("youtu.be/")[1].split("?")[0];

    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  } else if (media.includes("drive.google.com")) {
    const fileIdMatch = media.match(/\/d\/(.*?)\//);
    const fileId = fileIdMatch ? fileIdMatch[1] : "";
    thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
    youtubeUrl = `https://drive.google.com/file/d/${fileId}/view`;
  }

  return (
    <div className="relative group w-full sm:w-[360px] md:w-[420px]">
      {/* Glow efek */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-400/50 via-orange-300/50 to-blue-400/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/60 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
        {thumbnailUrl && (
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video w-full h-auto overflow-hidden bg-linear-to-br from-blue-100 to-orange-100">
              {/* Label type */}
              <div className="absolute top-3 left-3 z-10 bg-blue-400/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {type}
              </div>

              {/* Thumbnail */}
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Title */}
            <div className="p-4 bg-linear-to-br from-blue-50/80 to-white/80 backdrop-blur-sm">
              <h3 className="text-blue-900 font-semibold text-sm sm:text-base">{title}</h3>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
