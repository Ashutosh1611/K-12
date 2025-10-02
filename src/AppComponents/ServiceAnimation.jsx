import Wifi from "../assets/Wi-Fi.png"
import VDILabs from "../assets/VDI-Labs.png"
import GoogleClassroom from "../assets/Google-classroom.png"
import Security from "../assets/Security.png"
import BetterData from "../assets/Turning-Data-Better.png"
import IconWIFI from "../assets/service-animation-wifi.png"
import IconVDILabs from "../assets/service-animation-vdi-labs.png"
import IconGoogleClassroom from "../assets/service-animation-google-classroom.png"
import IconMindSecurity from "../assets/service-animation-mind-security.png"
import IconBetterData from "../assets/service-animation-turning-data-better.png"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function ServicesSection() {
    const images = [Wifi, GoogleClassroom, Security, BetterData, VDILabs];
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll progress inside this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Listen to scrollYProgress changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollProgress(latest);
    });

    // Right column width: shrink from 100% → 60%
    const rightColWidth = useTransform(scrollYProgress, [0, 0.25], ["100%", "55%"]);
    const leftColOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScroll = rect.height - windowHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
            const progress = scrolled / totalScroll;

            // Only start changing images after 30% scroll
            if (progress > 0.30) {
                const adjustedProgress = (progress - 0.30) / 0.70; // normalize 0–1 after threshold
                const index = Math.min(
                    images.length - 1,
                    Math.floor(adjustedProgress * images.length)
                );
                setCurrentIndex(index);
            } else {
                setCurrentIndex(0); // lock to first image until shrink is done
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [images.length]);

    const listItems = [
        {
            icon: IconWIFI,
            title: "More Than Just Wi-Fi",
            description: "We’re not here to just put routers in your classrooms. Cyber24 is a telecom partner who delivers end-to-end internet + Wi-Fi with a deep understanding of how K-12 schools work. From your learning apps to your exam platforms, we ensure every connection is fast, reliable, and ready to inspire young minds.",
        },
        {
            icon: IconGoogleClassroom,
            title: "Google Classroom, done in 30 Days",
            description: "We’ve built a proven, ready-to-go Google Workspace template designed especially for schools. We’ll move your entire coursework online, integrate your APIs, set up reporting, train your teachers and have you up and running in just 30 days.",
        },
        {
            icon: IconMindSecurity,
            title: "Security That Protects Minds and Data",
            description: "Your school building is important to protect but so is your data. Student records, lesson plans, research, they’re all part of your school’s intellectual property. We give you custom-built Endpoint Protection & DLP solutions made for schools, so your data is as safe as your campus.",
        },
        {
            icon: IconBetterData,
            title: "Turning Data into Better Decisions",
            description: "Our Business Intelligence tools go beyond numbers; they tell the story of your school. Track student and teacher performance, spot learning gaps, and make informed decisions that shape brighter futures.",
        },
        {
            icon: IconVDILabs,
            title: "VDI Labs – Your Classroom, Anywhere",
            description: "Empower students with on-demand access to fully equipped virtual labs — anytime, anywhere. Our VDI (Virtual Desktop Infrastructure) makes learning flexible, cost-effective, and future ready. ",
        },
    ];

    return (
        <section className="relative bg-white">
            {/* Section Header */}
            <div className="bg-[#EAEAF2] text-center p-4 sm:p-8 rounded-b-3xl shadow-[0_10px_20px_-4px_rgba(0,0,0,0.3)] px-4 sm:px-52">
                <h2 className="text-2xl sm:text-4xl font-bold text-[#373A5C] leading-snug">
                    Securing the Spaces <span className="text-[#5360C6]">Where Futures Are Built.</span>
                </h2>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">
                    We enable connected learning environments where every device, classroom, and user is seamlessly connected, insights are delivered through real-time reporting, and security is built into every layer.
                </p>
            </div>

            {/* Scroll Container */}
            <div ref={containerRef} className="relative h-[500vh] bg-white">
                <div className="sticky top-0 rounded-b-3xl bg-gradient-to-t from-[#AAADFE] to-white mt-16 h-screen">
                    <div className="relative h-full">
                        {/* Left Section */}
                        <motion.div
                            style={{ opacity: leftColOpacity }}
                            className="relative z-0 w-[45%] h-full overflow-y-auto px-10 py-6"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                What Sets Our Class Apart
                            </h3>
                            <p className="text-lg text-indigo-600 font-semibold mb-2">
                                India’s Academic & Research Network (IARNet)
                            </p>
                            <p className="text-gray-600 mb-4 text-sm">
                                In collaboration with AARNet and backed by MEITY, we’re providing a dedicated fibre network exclusively for educational institutions. Unlike regular ISPs, IARNet is purpose-built for education, ensuring world-class speed, reliability, and security to power the future of learning.
                            </p>

                            <ul className="space-y-6">
                                {listItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`transition-colors duration-500 ${currentIndex === index ? "p-3 rounded-xl" : ""
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <img
                                                src={item.icon}
                                                alt={`${item.title} icon`}
                                                className={`w-6 h-6 mt-1 rounded-sm ${currentIndex === index && scrollProgress >= 0.25 ? "bg-[#5461C7]" : "invert"}`}
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                <AnimatePresence>
                                                    {/* Only animate text after shrink finishes */}
                                                    {currentIndex === index && scrollProgress >= 0.25 && item.description && (
                                                        <motion.p
                                                            key={index}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                                            className="text-gray-600 text-sm overflow-hidden"
                                                        >
                                                            {item.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Section - covers text until shrink */}
                        <motion.div
                            style={{ width: rightColWidth }}
                            className="absolute right-0 top-0 bottom-0 z-10 rounded-xl overflow-hidden flex items-center justify-center"
                        >
                            <img
                                src={images[currentIndex]}
                                alt="Dashboard preview"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
