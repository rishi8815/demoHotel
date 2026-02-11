"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 dark:bg-azure-950/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl font-serif font-bold tracking-widest uppercase text-gold-500 dark:text-gold-400">
                        Grand Azure
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 text-center">
                        Resort & Spa
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <NavLink href="#rooms">Rooms</NavLink>
                    <NavLink href="#amenities">Amenities</NavLink>
                    <NavLink href="#dining">Dining</NavLink>
                    <NavLink href="#gallery">Gallery</NavLink>
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden sm:block text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300 hover:text-gold-700 transition-colors">
                        Enquire
                    </button>
                    <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-none transition-all shadow-xl hover:shadow-gold-500/20 active:scale-95">
                        Book Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
    >
        {children}
    </Link>
);
