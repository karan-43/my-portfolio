import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="py-8 border-t border-white/5 relative overflow-hidden w-full bg-[#050e10]">
                {/* Subtle background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-[#0dccf2]/50 to-transparent"></div>

                <div className="view">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm md:text-base text-center md:text-left">
                            © {new Date().getFullYear()} <span className="font-bold text-white tracking-tight">Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#41e4c0]">Craft</span></span>. All rights reserved.
                        </p>
                        <p className="text-slate-500 text-xs md:text-sm text-center md:text-right flex items-center gap-1.5">
                            Built with <span className="text-[#0dccf2] font-medium">React</span> &amp; <span className="text-[#41e4c0] font-medium">Tailwind</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer