import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

import gbg1 from '../../assets/gallery-residential.jpg';
import gbg2 from '../../assets/gallery-commercial.jpg';
import gbg3 from '../../assets/gallery-interior.jpg';
import gbg4 from '../../assets/gallery-4.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const pageRef = useRef(null);

    useEffect(() => {

        // document.fonts.ready.then(() => {
        // Create new timeline
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-page4",
                start: "10% 10%",
                end: "220% 30%",
                scrub: 1.5,
                pin: true,
            }
        });

        // Add background color animation
        tl4.to(".gallery-page4", {
            backgroundColor: "#050505",
        }, 'start');

        gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
            opacity: 1,
            x: 0
        });

        // Animation sequence
        tl4.to(".gallery-box h3", {
            opacity: 0,
        }, 'a')
            .to(".gallery-page4 .gallery-background", {
                width: "calc(100vw - 1rem)",
                height: "calc(100vh - 1rem)",
                borderRadius: "3.5rem",
                y: -40,
            }, 'a')
            .to(".gallery-page4 .gallery-background img", {
                transform: "scale(1)",
            }, 'a')
            .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")

            .to("#gallery-second", {
                transform: "translate(-50%, -56%)",
            }, 'b')
            .to("#gallery-second img", {
                transform: "scale(1)",
            }, 'b')
            .to(".gallery-page4 .gallery-background", {
                scale: 0.9,
                opacity: 0,
                y: -50
            }, 'b')
            .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")
            .to("#gallery-third", {
                transform: "translate(-50%, -56%)",
            }, 'c')
            .to("#gallery-third img", {
                transform: "scale(1)",
            }, 'c')
            .to("#gallery-second", {
                scale: 0.9,
                opacity: 0,
            }, 'c')
            .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0");

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Generate repeating Parm Tjhung Designs elements
    const generateProjectCards = (quantity = 6) => {
        const cards = [];
        for (let i = 1; i <= quantity; i++) {
            cards.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter uppercase opacity-20'>
                    PTDesigns
                </h3>
            );
        }
        return cards;
    };

    return (
        <section className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateProjectCards(6)}
                </div>
            </div>

            <div className="gallery-background border border-white/5 shadow-2xl">
                <img src={gbg1} alt="Residential Project" className="brightness-75" />
                <div className="gallery-topText">
                    <h4 className="font-bold tracking-tighter text-white">Residential®</h4>
                    <h3 className="text-gold font-medium italic opacity-80">(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-auto max-w-[85%] flex justify-center items-center gap-4 bg-black/50 backdrop-blur-xl p-3 px-6 rounded-full border border-white/10'>
                        <BsFillPlusCircleFill className='w-6 h-6 text-gold glow-gold' />
                        <h3 className="text-zinc-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl">PTDesigns delivers refined aesthetics and considered interiors — creating architecture that endures.</h3>
                    </div>
                    <div className="relative z-9 w-48 h-[0.1rem] bg-white/10 mt-4 overflow-hidden rounded-full self-center">
                        <div className="progress-line absolute z-10 bg-gold glow-gold w-[33%] h-full top-0 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-second" className="gallery-background2 border border-white/5 shadow-2xl">
                <img src={gbg2} alt="Commercial Project" className="brightness-75" />
                <div className="gallery-topText">
                    <h4 className="font-bold tracking-tighter text-white">Commercial®</h4>
                    <h3 className="text-gold font-medium italic opacity-80">(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-auto max-w-[85%] flex justify-center items-center gap-4 bg-black/50 backdrop-blur-xl p-3 px-6 rounded-full border border-white/10'>
                        <BsFillPlusCircleFill className='w-6 h-6 text-gold glow-gold' />
                        <h3 className="text-zinc-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl">PTDesigns delivers refined aesthetics and considered interiors — creating architecture that endures.</h3>
                    </div>
                    <div className="relative z-9 w-48 h-[0.1rem] bg-white/10 mt-4 overflow-hidden rounded-full self-center">
                        <div className="progress-line absolute z-10 bg-gold glow-gold w-[67%] h-full top-0 left-0"></div>
                    </div>
                </div>
            </div>

            <div id="gallery-third" className="gallery-background2 border border-white/5 shadow-2xl">
                <img src={gbg3} alt="Interior Project" className="brightness-75" />
                <div className="gallery-topText">
                    <h4 className="font-bold tracking-tighter text-white">Interior®</h4>
                    <h3 className="text-gold font-medium italic opacity-80">(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-auto max-w-[85%] flex justify-center items-center gap-4 bg-black/50 backdrop-blur-xl p-3 px-6 rounded-full border border-white/10'>
                        <BsFillPlusCircleFill className='w-6 h-6 text-gold glow-gold' />
                        <h3 className="text-zinc-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl">PTDesigns delivers refined aesthetics and considered interiors — creating architecture that endures.</h3>
                    </div>
                    <div className="relative z-9 w-48 h-[0.1rem] bg-white/10 mt-4 overflow-hidden rounded-full self-center">
                        <div className="progress-line absolute z-10 bg-gold glow-gold w-[100%] h-full top-0 left-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;