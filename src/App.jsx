import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Client Satisfaction", value: "95%" },
  { label: "Projects Delivered", value: "120+" },
  { label: "Performance Boost", value: "10x" },
  { label: "Years Experience", value: "5+" },
];

const headline = "WELCOME ITZFIZZ";

export default function App() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  const letters = useMemo(
    () => headline.split("").map((char) => (char === " " ? "\u00A0" : char)),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-letter",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.045,
          duration: 0.65,
        }
      ).fromTo(
        ".metric",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.55,
        },
        "-=0.35"
      );

      gsap.to(visualRef.current, {
        xPercent: 55,
        rotation: 8,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          pin: heroRef.current,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-ink text-white">
      <section
        ref={sectionRef}
        className="relative h-[200vh] overflow-hidden"
      >
        <div
          ref={heroRef}
          className="hero-grid relative flex h-screen w-full items-center justify-center"
        >
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-16">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Scroll-driven hero
              </p>
              <h1 className="flex whitespace-nowrap gap-x-1 text-[clamp(2rem,5.4vw,5rem)] font-display tracking-[0.3em] text-white">
                {letters.map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    className="hero-letter inline-block"
                  >
                    {letter}
                  </span>
                ))}
              </h1>
              <p className="max-w-2xl text-base text-slate-300 md:text-lg">
                Built with care: a pinned hero that responds to scroll, subtle
                easing, and lightweight motion that keeps everything smooth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm text-slate-200 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="metric rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none relative z-0 mt-10 flex w-full max-w-[560px] items-center justify-center self-center md:absolute md:bottom-16 md:right-0 md:mt-0 md:w-[55%] md:max-w-[760px]">
            <div
              ref={visualRef}
              className="relative aspect-[16/9] w-full will-change-transform"
            >
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-slate-800/90 via-slate-900 to-black shadow-2xl" />
              <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-emerald-400/40 blur-2xl" />
              <div className="absolute bottom-8 right-16 h-16 w-16 rounded-full bg-blue-500/40 blur-2xl" />
              <svg
                viewBox="0 0 720 360"
                className="absolute inset-0 h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M110 220 C170 150 290 120 380 120 C470 120 545 145 600 190 C630 215 655 245 668 280 L80 280 C90 255 98 238 110 220 Z"
                  fill="#0F172A"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />
                <path
                  d="M190 210 C235 165 310 150 380 150 C450 150 510 165 560 200"
                  stroke="#A3E635"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="210" cy="280" r="32" fill="#0B1120" />
                <circle cx="210" cy="280" r="14" fill="#38BDF8" />
                <circle cx="520" cy="280" r="32" fill="#0B1120" />
                <circle cx="520" cy="280" r="14" fill="#38BDF8" />
              </svg>
              <div className="absolute right-8 top-6 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
                Motion Lab
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
