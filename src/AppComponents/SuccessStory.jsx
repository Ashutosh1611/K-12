import { title } from "framer-motion/client";
import successStoryPNG from "../assets/success-story.png";
import cyberSecureConectivityIcon from "../assets/cyber-secure-connectivity.png";
import cyberSecureConectivityHoverIcon from "../assets/cyber-secure-connectivity-hover.png";
import dataDrivenInsightsIcon from "../assets/data-driven-insights.png";
import dataDrivenInsightsHoverIcon from "../assets/data-driven-insights-hover.png";
import digitalCourseworkIcon from "../assets/digital-coursework.png";
import digitalCourseworkHoverIcon from "../assets/digital-coursework-hover.png";
import smartWiFiIoTIcon from "../assets/smart-wifi.png";
import smartWiFiIoTHoverIcon from "../assets/smart-wifi-hover.png";
import virtualLabsIcon from "../assets/virtual-labs.png";
import virtualLabsHoverIcon from "../assets/virtual-labs-hover.png";

export default function SuccessStory() {

  const listItems = [
    {
      title: "Cyber-Secure Connectivity",
      icon: cyberSecureConectivityIcon,
      iconHover: cyberSecureConectivityHoverIcon
    },
    {
      title: "Smart Wi-Fi & IoT Integration",
      icon: smartWiFiIoTIcon,
      iconHover: smartWiFiIoTHoverIcon
    },
    {
      title: "Data-Driven Insights",
      icon: dataDrivenInsightsIcon,
      iconHover: dataDrivenInsightsHoverIcon
    },
    {
      title: "Fully Digital Coursework",
      icon: digitalCourseworkIcon,
      iconHover: digitalCourseworkHoverIcon
    },
    {
      title: "Virtual Labs in Action",
      icon: virtualLabsIcon,
      iconHover: virtualLabsHoverIcon
    }
  ]
  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="bg-white rounded-br-[2.5rem] sm:rounded-br-[5rem] px-2 sm:px-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 sm:gap-8 max-w-7xl mx-auto p-2">
          {/* Left Side - Image & Overlay */}
          <div className="relative flex justify-center items-center">
            <img
              src={successStoryPNG}
              alt="Education Digital Security"
              className="w-full max-w-xs sm:max-w-full object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="mt-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Customer Success Story
            </h2>
            <h3 className="text-lg sm:text-2xl font-semibold text-indigo-600 mb-4 sm:mb-6">
              Case Study: Catholic School of Diocese, Australia
            </h3>

            <div className="w-full sm:w-[50vw] mb-3 sm:mb-4">
              <h4 className="font-bold text-lg sm:text-2xl text-gray-800 mb-1 sm:mb-2">
                The Objective:
              </h4>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm pr-0 sm:pr-8">
                The Catholic School of Diocese, a prestigious institution recognized by the Australian Curriculum set out to digitally transform its campus. They wanted a network that offered deep analytics, centralized student data tracking, and seamless support for digital coursework and remote learning.
              </p>
            </div>

            {/* Cyber24 Solutions */}
            <h4 className="font-bold text-xl sm:text-3xl text-indigo-600 mb-2 sm:mb-4">
              The Cyber24 Solution:
            </h4>

            <div className="space-y-2 sm:mr-72">
              {
                listItems.map((item, index) => (
                  <div
                    key={index}
                    className="h-10 sm:h-[2rem] w-full sm:w-[17rem] bg-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition flex items-center"
                    style={{
                      background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)"
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-8 w-8 pl-1 hover:hidden"
                    />
                    <span className="ml-2 font-medium text-xs sm:text-base">{item.title}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
