"use client";

import React from "react";

const images = [
    {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
        title: "The Main Estate",
    },
    {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000",
        title: "Infinity Edge Pool",
    },
    {
        url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1000",
        title: "Sunset Terrace",
    },
    {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
        title: "Grand Lobby",
    },
    {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
        title: "Spa Courtyard",
    },
    {
        url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000",
        title: "Private Beach",
    },
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-zinc-50 dark:bg-azure-950/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h4 className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
                        Visual Journey
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-serif text-azure-950 dark:text-white mb-6">
                        Captured Moments of <span className="italic">Serenity</span>
                    </h2>
                    <div className="w-24 h-px bg-gold-400 mx-auto" />
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden break-inside-avoid">
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-azure-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <p className="text-white font-serif text-xl tracking-wider">{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
