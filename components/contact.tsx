"use client";

import React from "react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-azure-950">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                    <div>
                        <h4 className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
                            Reservations
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-azure-950 dark:text-white leading-tight">
                            Personalized Service <br />
                            <span className="text-gold-400 italic">Awaits Your Call</span>
                        </h2>
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md">
                        Whether you are planning a romantic escape, a family holiday, or a private event,
                        our dedicated concierge team is at your disposal 24/7.
                    </p>

                    <div className="space-y-8">
                        <ContactInfo label="Address" value="124 Blue Waters, Azure Bay, Greece" />
                        <ContactInfo label="Phone" value="+30 210 123 4567" />
                        <ContactInfo label="Email" value="concierge@grandazure.com" />
                    </div>
                </div>

                <div className="bg-zinc-50 dark:bg-azure-900/40 p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 -mr-16 -mt-16 rounded-full blur-3xl" />
                    <form className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormInput label="Full Name" placeholder="JOHN DOE" />
                            <FormInput label="Email Address" placeholder="JOHN@EXAMPLE.COM" />
                        </div>
                        <FormInput label="Subject" placeholder="NATURE OF YOUR ENQUIRY" />
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Your Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors uppercase tracking-widest placeholder:text-zinc-300 dark:placeholder:text-zinc-800"
                                placeholder="HOW CAN WE ASSIST YOU?"
                            />
                        </div>
                        <button className="bg-azure-950 dark:bg-gold-500 text-white dark:text-azure-950 px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-gold-500 dark:hover:bg-white transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">{label}</span>
        <span className="text-lg font-serif text-azure-950 dark:text-white">{value}</span>
    </div>
);

const FormInput = ({ label, placeholder }: { label: string; placeholder: string }) => (
    <div className="space-y-2 flex-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{label}</label>
        <input
            type="text"
            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors uppercase tracking-widest placeholder:text-zinc-300 dark:placeholder:text-zinc-800"
            placeholder={placeholder}
        />
    </div>
);
