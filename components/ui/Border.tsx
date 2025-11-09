export default function Border() {
  return (
    <div className="relative flex items-center gap-1">
      {/* Garis utama */}
      <div className="h-2 w-40 bg-linear-to-r from-yellow-400 to-orange-400 rounded-sm" />

      {/* 3 potongan miring */}
      <div className="flex gap-[3px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-2 bg-orange-400 -skew-x-25 rounded-[1px]"
          />
        ))}
      </div>
    </div>
  );
}
