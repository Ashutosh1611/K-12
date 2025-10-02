import GoogleClassroom from "../assets/Google-classroom.png"
import IconWIFI from "../assets/service-animation-wifi-dark-bg.png"
import IconVDILabs from "../assets/service-animation-vdi-labs-dark-bg.png"
import IconGoogleClassroom from "../assets/service-animation-google-classroom.dark-bg.png"
import IconMindSecurity from "../assets/service-animation-mind-security-dark-bg.png"
import IconBetterData from "../assets/service-animation-turning-data-better-dark-bg.png"

export default function ServiceAnimationMobile() {

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
        <section className="bg-gradient-to-t from-[#AAADFE] to-white px-4 py-10">
            {/* Header */}
            <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    What Sets Our Class Apart
                </h2>
                <p className="text-lg font-semibold text-indigo-600">
                    India’s Academic & Research Network (IARNet)
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    In collaboration with AARNet and backed by MEITY, we’re providing a
                    dedicated fibre network exclusively for educational institutions.
                    Unlike regular ISPs, <span className="font-semibold">IARNet</span> is
                    purpose-built for education, ensuring world-class speed, reliability,
                    and security to power the future of learning.
                </p>
                <img
                    src={GoogleClassroom}
                    alt="Google Classroom"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Features */}
            <div className="space-y-4">
                {listItems.map((item, index) => (
                    <div className="bg-transparent p-4 flex space-x-3">
                        <span className="text-2xl">
                            <img
                                src={item.icon}
                                alt={`${item.title} icon`}
                                className={`w-[8rem] h-[2rem] mt-1 rounded-sm object-contain`}
                            />
                        </span>
                        <div>
                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
