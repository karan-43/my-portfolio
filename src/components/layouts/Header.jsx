import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/MyContext';


const Header = () => {

    const { scrollToSection, contactRef, heroRef, expertieRef, projectRef } = useContext(UserContext);

    return (
        <header>
            <nav className="fixed top-0 w-full z-50 bg-[#050e10]/80 py-4 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(0,210,255,0.03)] transition-all">
                <div className="view flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00d2ff] to-[#41e4c0] flex items-center justify-center text-[#050e10] text-lg transition-transform group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_15px_rgba(65,228,192,0.4)]">D</span>
                        <span>Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#41e4c0]">Craft</span></span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm font-medium">
                        <button onClick={() => scrollToSection(heroRef)} className="cursor-pointer md:text-base text-sm transition-all duration-300 text-slate-400 hover:text-white">Home</button>
                        <button onClick={() => scrollToSection(expertieRef)} className="cursor-pointer md:text-base text-sm transition-all duration-300 text-slate-400 hover:text-white">Expertise</button>
                        <button onClick={() => scrollToSection(projectRef)} className="cursor-pointer md:text-base text-sm transition-all duration-300 text-slate-400 hover:text-white">Projects</button>
                        <button onClick={() => scrollToSection(contactRef)} className="cursor-pointer md:text-base text-sm transition-all duration-300 text-slate-400 hover:text-white">Contact</button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Link to="/contact" className="hidden md:flex px-6 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-[#0dccf2] hover:text-[#050e10] hover:border-[#0dccf2] transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(13,204,242,0.4)] hover:-translate-y-0.5">Let's Talk</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header