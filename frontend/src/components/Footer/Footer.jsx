import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section id="contact" className='w-full min-h-[100dvh] flex flex-col justify-between px-12 py-24 bg-zinc-950 mt-20 border-t border-white/5'>
            <div className="flex flex-col gap-4">
                <p className='text-[0.65rem] uppercase tracking-[0.3em] text-gold font-bold mb-8 opacity-60'>
                    Ready to start your project?<br />
                    <span className="text-zinc-500 font-normal">GET IN TOUCH WITH PTDESIGNS®</span>
                </p>
                <MarqueeText />
            </div>

            <div className='flex md:flex-row flex-col justify-between items-start gap-12 mt-24'>
                <div className="flex flex-col gap-8 max-w-2xl">
                    <h2 className='text-gold leading-tight font-medium'>
                        Website crafted by—<span className="text-white glow-gold">Good AI Australia</span><br /><br />
                        <span className="text-zinc-500 text-lg lg:text-xl font-light">If you would like to outsource a similar<br />
                        architectural showcase—</span><a href="mailto:hello@goodai.com.au" className='text-white hover:text-gold transition-colors duration-500 underline underline-offset-8 decoration-gold/30'> contact us.</a>
                    </h2>
                </div>

                <div className='flex flex-col justify-center items-start md:items-end gap-3'>
                    {['WELCOME', 'PHILOSOPHY', 'PORTFOLIO', 'SERVICES', 'TESTIMONIALS'].map((link) => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`} 
                            className='text-zinc-500 hover:text-white transition-all duration-500 text-[0.7rem] font-bold tracking-[0.25em]'
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-between items-center mt-32 gap-8 border-t border-white/5 pt-12 opacity-80">
                <div className="flex justify-center items-center gap-4">
                    {[FaBehance, FaInstagram, CiLinkedin, FaDribbble].map((Icon, i) => (
                        <div key={i} className='border border-white/10 hover:border-gold hover:text-gold rounded-full p-4 text-white transition-all duration-500 cursor-pointer group shadow-xl bg-white/5'>
                            <Icon className="text-xl group-hover:scale-110" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:items-end items-center gap-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold font-bold">
                        Parm Tjhung Designs—Luxury Architecture
                    </p>
                    <span className="text-zinc-600 text-[0.6rem] font-medium tracking-widest">
                        CRAFTED FOR PERTH, WESTERN AUSTRALIA © 2026
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Footer;