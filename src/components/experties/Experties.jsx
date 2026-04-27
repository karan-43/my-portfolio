import { Atom, Terminal, Globe, Palette } from 'lucide-react';
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";

const Experties = () => {
    const { expertieRef } = useContext(UserContext);
    return (
        <>
            <section className="bg-[#050e10] expertiesSection w-full relative overflow-hidden" ref={expertieRef}>
                <div className="view md:py-12 py-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">Core Expertise</h2>
                        <div className="h-1 w-20 bg-[#0dccf2] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            className="p-8 hover:border-[#0dccf2]/50 transition-all group text-center bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)] backdrop-blur-[10px] border border-white/10 rounded-xl hover:shadow-[0_0_30px_-10px_rgba(13,204,242,0.3)]">
                            <div
                                className="w-16 h-16 mx-auto mb-6 bg-[#0dccf2]/10 rounded-xl flex items-center justify-center text-[#0dccf2] group-hover:scale-110 transition-transform">
                                <Atom className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <h3 className="md:text-xl text-base text-white font-bold mb-2">React</h3>
                            <p className="text-sm text-slate-400">Component architecture &amp; state management</p>
                        </div>
                        <div
                            className="p-8 hover:border-[#0dccf2]/50 transition-all group text-center bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)] backdrop-blur-[10px] border border-white/10 rounded-xl hover:shadow-[0_0_30px_-10px_rgba(13,204,242,0.3)]">
                            <div
                                className="w-16 h-16 mx-auto mb-6 bg-[#0dccf2]/10 rounded-xl flex items-center justify-center text-[#0dccf2] group-hover:scale-110 transition-transform">
                                <Terminal className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <h3 className="md:text-xl text-base text-white font-bold mb-2">javascript</h3>
                            <p className="text-sm text-slate-400">Type-safe development &amp; scalability</p>
                        </div>
                        <div
                            className="p-8 hover:border-[#0dccf2]/50 transition-all group text-center bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)] backdrop-blur-[10px] border border-white/10 rounded-xl hover:shadow-[0_0_30px_-10px_rgba(13,204,242,0.3)]">
                            <div
                                className="w-16 h-16 mx-auto mb-6 bg-[#0dccf2]/10 rounded-xl flex items-center justify-center text-[#0dccf2] group-hover:scale-110 transition-transform">
                                <Globe className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <h3 className="md:text-xl text-base text-white font-bold mb-2">Next.js</h3>
                            <p className="text-sm text-slate-400">SSR, SSG &amp; fullstack capabilities</p>
                        </div>
                        <div
                            className="p-8 hover:border-[#0dccf2]/50 transition-all group text-center bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)] backdrop-blur-[10px] border border-white/10 rounded-xl hover:shadow-[0_0_30px_-10px_rgba(13,204,242,0.3)]">
                            <div
                                className="w-16 h-16 mx-auto mb-6 bg-[#0dccf2]/10 rounded-xl flex items-center justify-center text-[#0dccf2] group-hover:scale-110 transition-transform">
                                <Palette className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <h3 className="md:text-xl text-base text-white font-bold mb-2">CSS / Tailwind</h3>
                            <p className="text-sm text-slate-400">Modern layouts &amp; utility-first design</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experties