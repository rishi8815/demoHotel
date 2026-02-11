"use client";

import React from "react";

const rooms = [
    {
        title: "Ocean View Suite",
        price: "$450",
        size: "65 sqm",
        features: ["King Bed", "Private Balcony", "Sea View"],
        image: "https://images.unsplash.com/photo-1591088398332-8a77d3972243?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Sky Terrace Loft",
        price: "$680",
        size: "85 sqm",
        features: ["Plunge Pool", "Outdoor Lounge", "City Skyline"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Presidential Villa",
        price: "$1,200",
        size: "180 sqm",
        features: ["Private Chef", "Infinity Pool", "2 Bedrooms"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
    },
];

export const Rooms = () => {
    return (
        <section id="rooms" className="py-24 bg-zinc-50 dark:bg-azure-950/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h4 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">
                            Accommodations
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-azure-950 dark:text-white leading-tight">
                            Exquisite Sanctuaries <br />
                            <span className="text-gold-400">Tailored For Comfort</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                        Each residence offers a harmonious blend of contemporary design and timeless heritage, ensuring one-of-a-kind staying experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {rooms.map((room, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 dark:bg-azure-900/95 backdrop-blur-md px-4 py-2 z-20 shadow-xl">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                                        from {room.price}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-serif text-azure-950 dark:text-white group-hover:text-gold-500 transition-colors">
                                        {room.title}
                                    </h3>
                                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                        {room.size}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {room.features.map((f, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <span className="h-1 w-1 bg-gold-400 rounded-full" /> {f}
                                        </span>
                                    ))}
                                </div>
                                <button className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400 hover:text-azure-950 dark:hover:text-white flex items-center gap-3 transition-colors group-hover:gap-5">
                                    View Details <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
