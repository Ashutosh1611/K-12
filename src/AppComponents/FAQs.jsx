import { useState } from "react";
import DigitalCampus from "./DigitalCampus";

const faqs = [
    {
        question: "How long does it take to set up Cyber24’s solutions in a school?",
        answer: "Implementation timelines vary depending on campus size and requirements, but most schools are fully operational within 4–6 weeks, including setup, training, and testing.",
    },
    {
        question: "Can Cyber24’s Smart Wi-Fi handle high-traffic situations like assemblies or online exams?",
        answer: "Yes. Our high-speed infrastructure is designed to maintain stable performance even when hundreds of devices connect simultaneously.",
    },
    {
        question: "Is our data safe with Cyber24?",
        answer: "Absolutely. We integrate enterprise-grade security measures — from endpoint protection to network segmentation — ensuring that student, teacher, and administrative data remains secure at all times.",
    },
    {
        question: "Can parents also access the reporting and analytics features?",
        answer: "Yes. Our Business Intelligence tools can provide real-time visibility into student progress, making parent–teacher communication stronger and more transparent.",
    },
    {
        question: "What if our staff is not familiar with Google Workspace or virtual labs?",
        answer: "We provide hands-on training sessions for teachers, administrators, and IT teams, plus ongoing support whenever you need assistance.",
    },
    {
        question: "Do we need to replace all our existing devices to use your solutions?",
        answer: "Not necessarily. Our solutions are designed to work with most existing hardware, and we can recommend upgrades only where necessary to ensure optimal performance.",
    },
    {
        question: "How does the VDI Labs solution work for practical subjects?",
        answer: "VDI Labs allow students to run simulations, coding environments, and specialized software from any device — even outside the campus — ensuring practical learning is not limited by physical labs.",
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-gradient-to-r from-[#AAADFE] via-white to-[#AAADFE]">
            <div className="bg-gradient-to-t from-[#C6CBFB] to-white py-16 px-6 shadow-xl">
                <div className="max-w-6xl mx-auto grid md:grid-cols-[40%_60%] gap-12 items-start">
                    {/* Left text */}
                    <div className="flex flex-col items-center justify-center text-center h-full z-2">
                        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                            Behind every secure business is a stronger network.Let us help you build and defend yours.
                        </h2>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h3 className="text-3xl font-bold text-black mb-6">
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-1">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border border-black transition-all duration-300 ${openIndex === index ? "rounded-xl" : "rounded-xl"
                                        }`}
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(openIndex === index ? null : index)
                                        }
                                        className="bg-inherit w-full flex justify-between items-center text-left px-5 py-4 font-medium text-black font-semibold focus:outline-none focus-visible:outline-none focus:ring-0"
                                    >
                                        <div className="relative flex flex-col items-center justify-between text-left ">
                                            {faq.question}
                                            {openIndex === index && faq.answer && (
                                                <div className="px-5 pb-4 text-gray-600 text-lg leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-purple-600">
                                            {openIndex === index ? "▲" : "▼"}
                                        </span>
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 bg-transparent text-center px-6">
                <DigitalCampus />
            </div>
        </section>
    );
}