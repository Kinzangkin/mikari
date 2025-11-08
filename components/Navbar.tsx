"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll untuk efek transparansi / floating shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] 
        rounded-2xl transition-all duration-300 
        ${scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white/40 backdrop-blur-sm"}
      `}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide text-gray-900">
          Mikari
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="#portfolio" className="hover:text-blue-500 transition">Portfolio</Link></li>
          <li><Link href="#process" className="hover:text-blue-500 transition">Process</Link></li>
          <li><Link href="#achievment" className="hover:text-blue-500 transition">Achievement</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-300 bg-white/90 backdrop-blur-md rounded-b-2xl">
          <ul className="flex flex-col items-center py-4 space-y-3 text-blue-900 font-medium">
            <li><Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="#process" onClick={() => setMenuOpen(false)}>Process</Link></li>
            <li><Link href="#achievment" onClick={() => setMenuOpen(false)}>Achievement</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
