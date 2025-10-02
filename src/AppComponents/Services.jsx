// Import your PNG icons
import IARNetIcon from "../assets/iarnet.png";
import IARNetIconHover from "../assets/iarnet-hover.png";
import WifiIcon from "../assets/wifi.png";
import WifiIconHover from "../assets/wifi-hover.png";
import SecurityIcon from "../assets/datasecurity.png";
import SecurityIconHover from "../assets/datasecurity-hover.png";
import VdiIcon from "../assets/vdilabs.png";
import VdiIconHover from "../assets/vdilabs-hover.png";
import ClassroomIcon from "../assets/googleclassroomsetup.png";
import ClassroomIconHover from "../assets/googleclassroomsetup-hover.png";
import BIIcon from "../assets/bussinessintelligence.png";
import BIIconHover from "../assets/bussinessintelligence-hover.png";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const services = [
    { icon: IARNetIcon, hoverIcon: IARNetIconHover, title: "IARNet" },
    { icon: WifiIcon, hoverIcon: WifiIconHover, title: "Smart Wi-Fi" },
    { icon: SecurityIcon, hoverIcon: SecurityIconHover, title: "Data Security" },
    { icon: VdiIcon, hoverIcon: VdiIconHover, title: "VDI Labs" },
    { icon: ClassroomIcon, hoverIcon: ClassroomIconHover, title: "Google ClassroomSetup" },
    { icon: BIIcon, hoverIcon: BIIconHover, title: "Business Intelligence" },
  ];

  const preloadImages = (urls) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  preloadImages([
    IARNetIconHover,
    WifiIconHover,
    SecurityIconHover,
    VdiIconHover,
    ClassroomIconHover,
    BIIconHover
  ]);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto text-center">
        {/* Top Icons */}
        <div className="bg-[#D4D8FE] grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 place-items-center py-4 px-2 sm:px-0">
          {services.map((service, idx) => (
            <HoverIcon key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Separate Component for Animated Hover Icon --- */
function HoverIcon({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
    >
      <div className="relative h-12 w-12 flex items-center justify-center sm:h-14 sm:w-14">
        <AnimatePresence mode="wait">
          <motion.img
            key={hovered ? "hover" : "default"}
            src={hovered ? service.hoverIcon : service.icon}
            alt={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              rotate: [0, -10, 10, -8, 8, 0],
              scale: [1, 1.1, 1.05, 1.1, 1],
              transition: { duration: 0.4 }
            }}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain absolute"
          />
        </AnimatePresence>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-[#35395B] transition-colors duration-300 group-hover:text-indigo-600 text-center mt-2">
        {service.title}
      </p>
    </div>
  );
}