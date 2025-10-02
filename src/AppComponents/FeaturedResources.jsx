import imageFirst from "../assets/Featured-Resources-Images-1.png";
import imageSecond from "../assets/Featured-Resources-Images-2.png";
import imageThird from "../assets/Featured-Resources-Images-3.png";
import imageFourth from "../assets/Featured-Resources-Images-4.png";

export default function FeaturedResources() {
  const resources = [
    {
      title: "Why Your School Needs a Dedicated Network",
      description:
        "Learn how a purpose-built network boosts reliability, security, and performance for modern classrooms and digital tools.",
      image: imageFirst,
    },
    {
      title:
        "Future-Proofing Your School Network: Preparing for Wi-Fi 7 and IoT",
      description:
        "Explore strategies to upgrade infrastructure for next-generation Wi-Fi, supporting IoT devices and high-demand applications.",
      image: imageSecond,
    },
    {
      title: "How Google Classroom Enhances STEM and Project-Based Learning",
      description:
        "See how Google Classroom fosters collaboration, creativity, and hands-on STEM learning for students and educators.",
      image: imageThird,
    },
    {
      title: "Top 5 Issues facing K-12 Education Wi-Fi Networks",
      description:
        "Discover key issues like bandwidth limits and network congestion that hinder seamless digital learning experiences.",
      image: imageFourth,
    },
  ];

  return (
    <section className="bg-gradient-to-tl from-[#B0B3FF] to-[#F4F4F4] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <img
                src={res.image}
                alt={res.title}
                className="rounded-t-2xl h-40 w-full object-cover"
              />
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {res.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {res.description}
                </p>
                <button className="mt-4 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition w-fit mx-auto">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
