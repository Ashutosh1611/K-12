import Cyber24_logo from "../assets/cyber24-logo.png";
import GoogleEdu_logo from "../assets/google-edu.png";
import Didactics_logo from "../assets/DIDAC-logo.webp";

export default function Partners() {
  return (
    <div className="bg-[#D4D8FE] py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 gap-4 sm:gap-0">
        {/* Left Logo */}
        <div className="flex items-center mb-2 sm:mb-0">
          <img
            src={Cyber24_logo}
            alt="Cyber24"
            className="h-10 sm:h-12"
          />
        </div>

        {/* Right Side: Partner Logos + Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
          {/* Partner Logos */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <img src={GoogleEdu_logo} alt="Google for Education" className="h-10 sm:h-12" />
            </div>
            <div>
              <img src={Didactics_logo} alt="DIDAC Association" className="h-12 sm:h-14" />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => (window.location.href = "https://cyber24.com.au/contact/")}
            className="bg-[#6566DA] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#4338CA] transition w-full sm:w-auto mt-2 sm:mt-0"
          >
            Let&apos;s Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
