import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";

const FeaturedProjects = () => {
    const { projectRef } = useContext(UserContext);
    return (
        <>
            <section className="w-full featuredSection relative overflow-hidden bg-[#050e10]" ref={projectRef}>
                <div className="view md:py-12 py-8">
                    <div className="flex flex-col md:flex-row mb-16 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">Featured Projects</h2>
                            <p className="text-slate-400 max-w-xl">A selection of recent works showcasing technical complexity and polished UI design.</p>
                        </div>

                    </div>
                    <div className="w-full">
                        <Swiper
                            modules={[Pagination]}
                            className="w-full"
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: { slidesPerView: 1.1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >

                            <SwiperSlide>
                                <div className="group rounded-2xl overflow-hidden border border-white/5 hover:border-[#0dccf2]/30 transition-all bg-white/5 backdrop-blur-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col">
                                    <div className="aspect-video relative overflow-hidden shrink-0">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Sleek dashboard interface with data visualization charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqj5kQXMolo7YQxcV5wGkrOTkUolPWgml1fa9EbjXIWhic8opYhC5NvGaK6NkXhKwYGKF0Z2FrW0eXKEh4k1oggR3UGK-AdrzCTZrn78GTpc4lIp9GQxYAUsRBqUv2FpfM-H3S1kQcmW_8QBRPvEM8mgpcFjKejNOwQHd8a85ORcCPZTJDjmLo0KTGJU6r_jSBQJkeo_Jujsuo3MVPFVz1n0huP-4Wdy4kVRrQ7_JGKv5CaAZY3k16RYirsBA0LLatm2dbEB2EvjMl" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050e10] to-transparent opacity-80"></div>
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-1">
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-3 py-1 bg-[#0dccf2]/10 text-[#0dccf2] text-xs font-bold uppercase rounded-full border border-[#0dccf2]/20 shadow-[0_0_10px_rgba(13,204,242,0.1)]">React</span>
                                            <span className="px-3 py-1 bg-[#0dccf2]/10 text-[#0dccf2] text-xs font-bold uppercase rounded-full border border-[#0dccf2]/20 shadow-[0_0_10px_rgba(13,204,242,0.1)]">Chart.js</span>
                                        </div>
                                        <h3 className="text-2xl font-bold dark:text-white group-hover:text-[#0dccf2] transition-colors">Eco-Tracker App</h3>
                                        <p className="text-slate-400 flex-1">A comprehensive carbon footprint monitoring tool with real-time data synchronization and dynamic visualizations.</p>
                                        <div className="pt-4 flex gap-4 mt-auto">
                                            <Link to="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#0dccf2] transition-colors group/link">
                                                <div className="w-8 h-8 rounded-full bg-[#0dccf2]/10 flex items-center justify-center border border-[#0dccf2]/20 group-hover/link:bg-[#0dccf2] group-hover/link:text-[#050e10] transition-all">
                                                    <ExternalLink className="w-4 h-4" />
                                                </div>
                                                Demo
                                            </Link>
                                            <Link to="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#0dccf2] transition-colors group/link">
                                                <div className="w -8 h-8 rounded-full bg-[#0dccf2]/10 flex items-center justify-center border border-[#0dccf2]/20 group-hover/link:bg-[#0dccf2] group-hover/link:text-[#050e10] transition-all">
                                                    <svg className="size-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                </div>
                                                Source
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="group rounded-2xl overflow-hidden border border-white/5 hover:border-[#0dccf2]/30 transition-all bg-white/5 backdrop-blur-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col">
                                    <div className="aspect-video relative overflow-hidden shrink-0">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Financial app interface with clean typography and dark mode" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADBiId2Z0YdFXh7VZByMm4K1WgBd1Cz3Gh4jX6my7r9tnNi4AjvFa3PsWRXMSz6qajdH9jEz-saau7KmBgNSf2naJLX_2ch85cygQ62jfZMg9aDh0NXrF0hSceaEaAzD6GTtqP5NcLqXKePATi0_wvwjPPfsrCuOdyxKEGmykUEcAGGscaneMFzAwKQh0ZV6oumdnULO6pHBrjAqFNAvX4_kqQJjvUP_-gYA2qa3w7Gcmt5ONzDIRy5u-DUBBw9de-3IpPFW4ijBY3" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050e10] to-transparent opacity-80"></div>
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-1">
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-3 py-1 bg-[#0dccf2]/10 text-[#0dccf2] text-xs font-bold uppercase rounded-full border border-[#0dccf2]/20 shadow-[0_0_10px_rgba(13,204,242,0.1)]">Next.js</span>
                                            <span className="px-3 py-1 bg-[#0dccf2]/10 text-[#0dccf2] text-xs font-bold uppercase rounded-full border border-[#0dccf2]/20 shadow-[0_0_10px_rgba(13,204,242,0.1)]">Stripe</span>
                                        </div>
                                        <h3 className="text-2xl font-bold dark:text-white group-hover:text-[#0dccf2] transition-colors">Finance Dashboard</h3>
                                        <p className="text-slate-400 flex-1">Enterprise-grade financial analytics suite featuring multi-currency support, automated reporting, and secure payments.</p>
                                        <div className="pt-4 flex gap-4 mt-auto">
                                            <Link to="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#0dccf2] transition-colors group/link">
                                                <div className="w-8 h-8 rounded-full bg-[#0dccf2]/10 flex items-center justify-center border border-[#0dccf2]/20 group-hover/link:bg-[#0dccf2] group-hover/link:text-[#050e10] transition-all">
                                                    <ExternalLink className="w-4 h-4" />
                                                </div>
                                                Demo
                                            </Link>
                                            <Link to="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#0dccf2] transition-colors group/link">
                                                <div className="w-8 h-8 rounded-full bg-[#0dccf2]/10 flex items-center justify-center border border-[#0dccf2]/20 group-hover/link:bg-[#0dccf2] group-hover/link:text-[#050e10] transition-all">
                                                    <svg className="size-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                </div>
                                                Source
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProjects