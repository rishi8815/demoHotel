"use client";

import React from "react";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-azure-950">
            {/* Luxury Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-azure-950/80 z-10" />

            {/* Animated Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-60 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-110" />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl">
                <h4 className="text-gold-300 text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-6 animate-fade-in">
                    Refined Luxury Awaits
                </h4>
                <h1 className="text-4xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight">
                    Where Elegance Meets <br />
                    <span className="italic text-gold-400">The Ocean Breeze</span>
                </h1>
                <p className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Experience an unparalleled sanctuary of luxury and tranquility. Nestled on the pristine shores of Azure Bay,
                    every detail is crafted for your ultimate escape.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px] transition-all active:scale-95 shadow-2xl shadow-gold-500/30">
                        Secure Your Stay
                    </button>
                    <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px] transition-all active:scale-95">
                        Discover More
                    </button>
                </div>
            </div>

            {/* Floating Booking Quick Bar */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden lg:flex bg-white/90 dark:bg-azure-900/95 backdrop-blur-xl border border-white/20 p-6 shadow-2xl items-center gap-8 min-w-[800px]">
                <QuickBarItem label="Check In" value="Add Date" />
                <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-700" />
                <QuickBarItem label="Check Out" value="Add Date" />
                <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-700" />
                <QuickBarItem label="Guests" value="2 Adults, 0 Children" />
                <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest ml-auto transition-colors">
                    Check Availability
                </button>
            </div>
        </section>
    );
};

const QuickBarItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1 cursor-pointer group">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{label}</span>
        <span className="text-sm font-medium text-azure-950 dark:text-white group-hover:text-gold-500 transition-colors">{value}</span>
    </div>
);
