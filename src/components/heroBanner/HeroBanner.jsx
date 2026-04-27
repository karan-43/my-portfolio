import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";


const HeroBanner = () => {
    const { heroRef } = useContext(UserContext);
    return (
        <>
            <section className="w-full heroSection relative bg-[#050e10] min-h-[90vh] flex items-center md:pt-24 pt-32 pb-8 overflow-hidden" ref={heroRef}>
                {/* Background animated orbs */}
                <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#00d2ff]/20 rounded-full blur-[100px] -z-10 mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#41e4c0]/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>

                <div className="view">
                    <div className="flex flex-col md:flex-row items-center gap-16 py-xl relative z-10">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-[#41e4c0]/50 transition-colors cursor-default">
                                <span className="w-2 h-2 rounded-full bg-[#41e4c0] shadow-[0_0_8px_rgba(65,228,192,0.8)] animate-pulse"></span>
                                <span className="text-xs font-semibold tracking-wider uppercase text-[#41e4c0]">Available for new projects</span>
                            </div>
                            <h1 className="font-bold lg:text-7xl md:text-6xl text-5xl text-slate-50 leading-[1.1] tracking-tight">
                                Building the <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#0dccf2] to-[#41e4c0] drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">Future</span> of Web
                            </h1>
                            <p className="max-w-xl text-slate-400 font-medium md:text-lg text-base leading-relaxed">
                                High-performance interfaces crafted with technical precision and atmospheric aesthetics. Elevating digital experiences through elite engineering.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="cursor-pointer font-bold md:text-base text-sm bg-gradient-to-r from-[#00d2ff] to-[#41e4c0] text-[#050e10] px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(0,210,255,0.2)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300 hover:-translate-y-1">
                                    View My Work
                                </button>
                                <Link to="" className="cursor-pointer font-bold md:text-base text-sm border border-white/10 text-white bg-white/5 px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                                    Resume
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative group w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-[#41e4c0]/20 blur-[60px] -z-10 group-hover:blur-[80px] transition-all duration-700 opacity-50 group-hover:opacity-100 rounded-full"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass transform group-hover:translate-y-[-10px] group-hover:scale-[1.02] transition-all duration-500 shadow-2xl">
                                <img className="w-full aspect-[4/3] object-cover" data-alt="Modern workspace featuring a sleek high-end laptop with lines of cyan code on screen, atmospheric blue lighting, and minimalist desk accessories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-lKy6r4kmjvAH1my1AaGyCU3HZlBF_-BDSxhue9JPg37qVXFJuyNszeAbxAae08Gs96cS4XvQAApZSAUqO8qIRz6haxjL-63mKGD3U_5qnE5cQ0cyQd-r_C6hDNtzq-ArMndLRj8Ciqk2piZV555sRQJa2O1pPRb-OS_iLY0kTUR_dLO2eJzQNmo8Dj6vBhUfCcquf9JlK9Z8odsUyBDEuVL_AkK0j0aG_x4i_7et2R6CRBG_8VZmMk6HjmuH3GW5UWng6KbVQnb-" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050e10] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner