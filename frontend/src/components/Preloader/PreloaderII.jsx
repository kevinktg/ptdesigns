import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
// import { ArrowRight, Menu } from "lucide-react";

import "./preloaderII.css";

gsap.registerPlugin(SplitText);
export default function PreloaderII() {
    useGSAP(() => {
        document.fonts.ready.then(() => {
        function createSplitTexts(elements) {
            const splits = {};
            elements.forEach(({ key, selector, type }) => {
                const config = { type, mask: type };
                if (type === "chars") { config.charsClass = "char"; }
                if (type === "lines") { config.linesClass = "line"; }
                splits[key] = SplitText.create(selector, config);
            });
            return splits;
        }

        const splitElements = [
            { key: "logoChars", selector: ".preloader-logo h1", type: "chars" },
            { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
        ];

        const splits = createSplitTexts(splitElements);

        gsap.set(splits.logoChars.chars, { x: "100%" });

        gsap.set(
            [
                splits.footerLines.lines,
            ],
            { y: "100%" }
        );

        function animateProgress(duration = 3.5) {
            const tl = gsap.timeline();
            const counterSteps = 3;
            let currentProgress = 0;

            for (let i = 0; i < counterSteps; i++) {
                const finalStep = i === counterSteps - 1;
                const targetProgress = finalStep
                    ? 1
                    : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
                currentProgress = targetProgress;

                tl.to(".preloader-progress-bar", {
                    scaleX: targetProgress,
                    duration: duration / counterSteps,
                    ease: "power3.out",
                });
            }

            return tl;
        }

        const tl = gsap.timeline({ delay: 0.5 });
        tl.to(splits.logoChars.chars, {
            x: "0%",
            stagger: 0.05,
            duration: 1,
            ease: "power4.inOut",
        })
            .to(
                splits.footerLines.lines,
                {
                    y: "0%",
                    stagger: 0.1,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "0.25"
            )
            .add(animateProgress(), "<")
            .to(
                splits.logoChars.chars,
                {
                    x: "-100%",
                    stagger: 0.05,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "+=0.15"
            )
            .to(splits.footerLines.lines, {
                y: "-100%",
                stagger: 0.1,
                duration: 0.5,
                ease: "power4.inOut",
            }, "-=0.1")
            .to(
                ".preloader-progress",
                {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    scale: 6,
                    duration: 4,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    delay: 1,
                    opacity: 0,
                    display: "none",
                },
                "<"
            );
        }); // end document.fonts.ready
    }, []);

    return (
        <div className="size-full fixed z-51 overflow-hidden pointer-events-none">
            <div className="preloader-progress bg-black">
                <div className="preloader-progress-bar bg-gold"></div>
                <div className="preloader-logo">
                    <h1 className="glow-gold-strong text-white font-bold tracking-tighter">
                        <span className="brand-name">Parm Tjhung</span>
                        <span className="block text-[0.3em] tracking-[0.5em] text-gold/60 font-light mt-2 uppercase">Architect</span>
                    </h1>
                </div>
            </div>

            <div className="preloader-mask bg-black"></div>

            <div className="preloader-content">
                <div className="preloader-footer">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold font-bold">
                        Parm Tjhung Designs—Luxury Architecture<br />
                        <span className="text-zinc-600 font-normal mt-1 block">CRAFTED FOR PERTH, WA</span>
                    </p>
                </div>
            </div>
        </div >
    );
}