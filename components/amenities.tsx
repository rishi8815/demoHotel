"use client";

import React from "react";

export const Amenities = () => {
    return (
        <section id="amenities" className="py-24 bg-white dark:bg-azure-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Dining Highlight */}
                <div id="dining" className="flex flex-col lg:flex-row items-center gap-16 mb-24 scroll-mt-24">
                    <div className="flex-1 space-y-8 order-2 lg:order-1">
                        <h4 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">
                            Global Gastronomy
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-azure-950 dark:text-white leading-tight">
                            A Culinary Journey <br />
                            <span className="text-gold-400">Beyond Comparison</span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light italic">
                            "From Michelin-starred seasonal tasting menus to artisanal poolside refreshments,
                            we celebrate the art of fine dining across four signature venues."
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <AmenityPoint title="Azure Table" detail="Fine Mediterranean" />
                            <AmenityPoint title="The Reef" detail="Fresh Seafood" />
                            <AmenityPoint title="Golden Hour" detail="Rooftop Cocktails" />
                            <AmenityPoint title="Ember Lounge" detail="Premium Spirits" />
                        </div>
                        <button className="border-b border-gold-500 pb-2 text-xs font-bold uppercase tracking-widest text-azure-950 dark:text-white hover:text-gold-600 transition-colors">
                            Explore Our Restaurants
                        </button>
                    </div>
                    <div className="flex-1 relative order-1 lg:order-2">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-100/30 dark:bg-gold-500/5 rounded-full blur-3xl -z-10" />
                        <div className="aspect-[4/5] relative">
                            <img
                                src="https://images.unsplash.com/photo-1550966841-39f460a61c9c?auto=format&fit=crop&q=80&w=1000"
                                alt="Dining"
                                className="h-full w-full object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-gold-400 p-8 hidden md:block">
                                <p className="text-white text-2xl font-serif">Est. 1924</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spa Highlight */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 relative lg:pr-10">
                        <div className="aspect-video relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
                                alt="Spa & Wellness"
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <span className="text-white text-xs font-bold uppercase tracking-[0.5em] border border-white/40 px-6 py-3 backdrop-blur-sm">
                                    Wellness Sanctuary
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-azure-950 dark:text-white">
                            Holistic Rejuvenation
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                            Reconnect with your inner self at our award-winning spa. Our signature treatments combine
                            ancient wisdom with modern science to restore balance and harmony to mind, body, and spirit.
                        </p>
                        <div className="flex gap-12 pt-4">
                            <Stat label="Private Suites" value="12" />
                            <Stat label="Treatment Types" value="45+" />
                            <Stat label="Specialists" value="15" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AmenityPoint = ({ title, detail }: { title: string; detail: string }) => (
    <div className="space-y-1">
        <h5 className="text-sm font-bold text-azure-950 dark:text-white uppercase tracking-wider">{title}</h5>
        <p className="text-[10px] text-gold-600 dark:text-gold-400 uppercase tracking-widest">{detail}</p>
    </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
        <p className="text-3xl font-serif text-gold-500">{value}</p>
        <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{label}</p>
    </div>
);
