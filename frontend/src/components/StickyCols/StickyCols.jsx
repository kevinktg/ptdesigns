import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/sticky-1.jpg";
import colimg2 from "../../assets/sticky-2.jpg";
import colimg3 from "../../assets/sticky-3.jpg";
import { useState } from "react";

const StickyCols = () => {

    const [reveal, setReveal] = useState(false);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        // 1️⃣ Split text lines once DOM ready
        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        // Refresh ScrollTrigger after split
        ScrollTrigger.refresh();

        // 2️⃣ Initial state
        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        // 3️⃣ Controlled phase logic using timeline (simpler and stable)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top 20%",
                end: "+=90%",
                pin: true,
                scrub: 1.5,
                // markers: true,
            },
        });
        tl.add(() => setReveal(false));
        // PHASE 1: Reveal col-2, hide col-1
        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1.6, duration: 0.8 }, "<")

        tl.add(() => setReveal(false));
        tl.add(() => setReveal(true));
        // PHASE 2: Switch col-2 -> col-3 content
        tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            }, "<")
        tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });

    return (
        <section className="sticky-cols w-screen h-dvh overflow-hidden bg-zinc-950 lg:mb-32">
            <div className="sticky-cols-wrapper relative w-full h-screen p-4 md:p-8">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper bg-zinc-900 border border-white/5 shadow-2xl">
                            <h2 className="text-white font-bold leading-none tracking-tighter">
                                Experience spaces<br />
                                <span className="text-gold glow-gold">—with precision,</span><br />
                                light, and purpose
                            </h2>
                            <div className="col-content-para flex items-center gap-6 justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                    <h3 className="border border-gold/40 px-4 py-1 rounded-full text-gold text-sm font-bold">01</h3>
                                    <h3 className="border border-white/10 px-4 py-1 rounded-full text-zinc-600 text-sm font-bold">03</h3>
                                </div>
                                <p className={`text-xs md:text-sm text-zinc-400 font-medium leading-relaxed ${!reveal ? "opacity-100" : "opacity-0"}`}>
                                    Every detail considered — from material selection to spatial flow, PTDesigns creates architecture that resonates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper border border-white/5 overflow-hidden rounded-[2.5rem]">
                            <img src={colimg1} alt="architectural detail" className="brightness-75" />
                        </div>
                    </div>
                    <div className="col col-img-2 p-2">
                        <div className="col-img-wrapper border border-white/5 overflow-hidden rounded-[2.5rem]">
                            <img src={colimg2} alt="material study" className="brightness-75" />
                        </div>
                    </div>
                </div>

                <div className="col col-3">
                    <div className="col-content-wrapper bg-zinc-900 border border-white/5 shadow-2xl">
                        <h2 className="text-white font-bold leading-none tracking-tighter">
                            Experience spaces<br />
                            <span className="text-gold glow-gold">—with precision,</span><br />
                            light, and purpose
                        </h2>
                        <div className={`col-content-para flex items-center gap-6 justify-between mt-auto`}>
                            <div className="flex items-center gap-2">
                                <h3 className="border border-gold/40 px-4 py-1 rounded-full text-gold text-sm font-bold">{reveal ? "03" : "02"}</h3>
                                <h3 className="border border-white/10 px-4 py-1 rounded-full text-zinc-600 text-sm font-bold">03</h3>
                            </div>
                            <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">
                                Every detail considered — from material selection to spatial flow, PTDesigns creates architecture that resonates.
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-content-wrapper-2 bg-zinc-900 border border-white/5 shadow-2xl">
                        <h2 className="text-white font-bold leading-none tracking-tighter">
                            Experience spaces<br />
                            <span className="text-gold glow-gold">—with precision,</span><br />
                            light, and purpose
                        </h2>
                        <div className="col-content-para flex items-center gap-6 justify-between mt-auto">
                            <div className="flex items-center gap-2">
                                <h3 className="border border-gold/40 px-4 py-1 rounded-full text-gold text-sm font-bold">03</h3>
                                <h3 className="border border-white/10 px-4 py-1 rounded-full text-zinc-600 text-sm font-bold">03</h3>
                            </div>
                            <p className={`text-xs md:text-sm text-zinc-400 font-medium leading-relaxed`}>
                                Every detail considered — from material selection to spatial flow, PTDesigns creates architecture that resonates.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper border border-white/5 overflow-hidden rounded-[2.5rem]">
                            <img src={colimg3} alt="final implementation" className="brightness-75" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyCols;