import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        // Get the original HTML before splitting
        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        // Create split - exclude the sub element from being split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            // Exclude the <sub> element from being split
            exclude: "sub"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");

            // Add to innerChars array
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position
        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02, // Add stagger for character-by-character reveal
            ease: "power3.out",
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 90%",
                end: "top 80%",
                scrub: true,
                // markers: true
            }
        });

        // Cleanup - revert the split and restore original HTML
        return () => {
            split.revert();
            // Restore the original HTML with sub element
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-screen h-[40vh] border-1 border-t-[#787D76]'>
            <div className='w-full flex justify-between items-center px-6 mt-8'>
                <p className='text-[#BFA77A] text-[0.69rem]'>
                    Website crafted by—<a href="#" className='text-[#f4f4f4]'>Good AI Australia</a>
                </p>
                <p className='text-[#BFA77A] text-[0.69rem]'>
                    This website is using <a href="#" className='text-[#f4f4f4]'>cookies</a>
                </p>
                <p className='text-[#BFA77A] text-[0.69rem]'>
                    All rights reserved © <a href="#" className='text-[#f4f4f4]'>2025</a>
                </p>
            </div>

            <div className='footer-title w-full text-center'>
                <h1 className='text-[18vw] font-bold glow-gold-strong'>
                    <span className="brand-name">Parm Tjhung</span><span className="brand-designs">DESIGNS</span>
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;