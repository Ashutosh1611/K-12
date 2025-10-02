import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import edHero1 from "../assets/EducationHero1.png";
import edHero2 from "../assets/EducationHero2.png";
import edHero3 from "../assets/EducationHero3.png";
import edHero4 from "../assets/EducationHero4.png";
import edHero5 from "../assets/EducationHero5.png";
import arrow from "../assets/arrow.png";

const edHeroImages = [edHero1, edHero2, edHero3, edHero4, edHero5];

export default function EducationHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % edHeroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-start px-6 mt-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-left"
        >
          <h1 className="leading-tight text-left">
            <span className="font-bold text-[#FDC518] block text-4xl sm:text-6xl md:text-7xl">
              REIMAGINING
            </span>
            <span className="font-bold text-[#FEC619] block leading-snug text-6xl sm:text-8xl md:text-9xl tracking-tight">
              EDUCATION
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold md:font-bold text-[#4d5BC5] -mt-1 sm:-mt-2">
            Through the Power of Technology
          </h2>

          <p className="text-gray-600 max-w-lg text-lg sm:text-xl">
            We help schools embrace digital transformation, connecting classrooms,
            empowering teachers with insights, and inspiring students with tools
            built for modern education.
          </p>

          {/* Button + PNG Container */}
          <div className="flex items-center justify-start md:justify-between gap-4 w-full">
            <button
              onClick={() => (window.location.href = "https://cyber24.com.au/contact/")}
              className="bg-[#6565DA] hover:bg-indigo-600 text-[#E1B639] font-bold rounded-full px-6 py-3 shadow-lg transition"
            >
              Plan Your Transformation
            </button>

            {/* PNG Image */}
            <img
              src={arrow}
              alt="arrow"
              className="h-20 w-auto hidden md:block"
            />
          </div>
        </motion.div>

        {/* Right Image Section */}
        <div className="relative flex justify-center md:justify-end items-center">
          <div className="absolute w-80 h-80 bg-indigo-500 rounded-full -z-10"></div>

          <div className="relative w-[700px] h-[650px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={edHeroImages[index]}
                alt="Students img"
                className="absolute w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
