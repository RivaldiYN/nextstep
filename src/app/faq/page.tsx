"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "FAQ", href: "/faq" },
];

export default function FAQPage() {
      const pathname = usePathname();
      const [menuOpen, setMenuOpen] = useState(false);
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

      const faqs = [
            {
                  question: "What platform is used for mentoring sessions?",
                  answer:
                        "All mentoring sessions are conducted online via Zoom. You will receive the meeting link after booking and confirmation through the NextStep team.",
            },
            {
                  question: "How do I book a mentoring session?",
                  answer: [
                        "Choose your preferred mentoring package.",
                        "Send a DM to @lets.nextstep on Instagram.",
                        "Our team will follow up with scheduling options and instructions.",
                  ],
            },
            {
                  question: "What are the available mentoring times?",
                  answer:
                        "Mentoring sessions are available every: Monday, Tuesday, Friday, and Saturday From 09:00 to 19:00 WIB You can choose the time slot that fits your schedule (subject to mentor availability).",
            },
            {
                  question: "Is there a pre-assessment before the session?",
                  answer:
                        "Yes. After booking, you will receive a pre-consultation assessment to fill out. This helps the mentor understand your background, goals, and expectations before the session starts.",
            },
            {
                  question: "How will I receive follow-up support after my session?",
                  answer:
                        "Follow-up materials and continued guidance (like templates, notes, or a post-assessment form) will be shared via email or direct message, depending on your communication with the NextStep team.",
            },
      ];

      return (
            <div className="font-['Plus Jakarta Sans'] text-gray-800 bg-gradient-to-r from-[#A2D6EB] to-[#F3F0EA] min-h-screen">
                  <nav className="flex flex-wrap justify-between items-center py-4 px-6 md:px-32 border-b relative">
                        <div className="flex-shrink-0">
                              <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    className="w-16 md:w-20 lg:w-24 h-auto"
                                    priority
                              />
                        </div>
                        <button
                              onClick={() => setMenuOpen(!menuOpen)}
                              className="md:hidden text-gray-800 focus:outline-none"
                        >
                              ☰
                        </button>
                        <ul
                              className={`w-full md:w-auto ${menuOpen ? "block" : "hidden"
                                    } md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-[16px] md:text-[18px] font-extrabold`}
                        >
                              {navItems.map((item) => (
                                    <li key={item.href}>
                                          <Link
                                                href={item.href}
                                                className={
                                                      pathname === item.href
                                                            ? "text-teal-500 block"
                                                            : "text-gray-800 hover:text-teal-500 block"
                                                }
                                          >
                                                {item.name}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  </nav>
                  {/* Hero Section */}
                  <div className="text-center mt-12">
                        <button className="bg-white text-[#29B0AC] py-2 px-4 rounded-xl border border-white shadow-lg text-base sm:text-lg md:text-[24px] text-center">
                              ❓ Frequently Asked Questions
                        </button>
                        <h1 className="text-2xl md:text-3xl font-extrabold mt-6">
                              Have questions? We&rsquo;re here to help.
                        </h1>
                        <p className="text-md md:text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
                              Find answers to common questions about NextStep and how we can help
                              guide your career journey.
                        </p>
                  </div>
                  {/* FAQ Section */}
                  <div className="max-w-4xl mx-auto mt-10 px-4 space-y-4">
                        {faqs.map((faq, index) => (
                              <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer border hover:border-teal-500"
                                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                              >
                                    <div className="flex justify-between items-center">
                                          <h3 className="font-semibold text-md md:text-lg">
                                                {faq.question}
                                          </h3>
                                          <span className="text-lg">
                                                {activeIndex === index ? "▲" : "▼"}
                                          </span>
                                    </div>
                                    {activeIndex === index && (
                                          <div className="mt-2 text-sm md:text-base text-gray-600">
                                                {Array.isArray(faq.answer) ? (
                                                      <ol className="list-decimal list-inside space-y-1">
                                                            {faq.answer.map((step, i) => (
                                                                  <li key={i}>{step}</li>
                                                            ))}
                                                      </ol>
                                                ) : (
                                                      <p>{faq.answer}</p>
                                                )}
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>
                  {/* Collaboration Section */}
                  <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-8 px-6">
                        <div className="bg-[#F3F0EA] border border-[#71A894] rounded-xl p-6 md:max-w-md text-center">
                              <h2 className="text-xl font-bold mb-2 md:text-[24px]">
                                    Got another collaboration idea?
                              </h2>
                              <p className="text-sm text-[#5E6366]">
                                    No worries! NextStep is open to various forms of collaboration. If
                                    you have an idea that could bring value to the community,
                                    we&rsquo;re ready to team up! Our journey starts here.{" "}
                                    <span className="font-medium">#TaketheNextStep</span>.
                              </p>
                              <p className="text-sm text-[#5E6366] mt-2">
                                    Feel free to reach out to our contact person to collaborate with
                                    NextStep.
                              </p>
                        </div>
                        <div className="relative w-[400px] h-[400px] flex-shrink-0 hidden md:block">
                              <Image
                                    src="/vector-4.png"
                                    alt="Background Shape"
                                    fill
                                    className="object-contain z-0"
                              />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-10">
                                    <Image
                                          src="/vector_faq.png"
                                          alt="Mentoring"
                                          fill
                                          className="object-contain"
                                    />
                              </div>
                        </div>
                  </div>
                  {/* Contact Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto px-4">
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
                              <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="font-semibold">partnership@nextstep.id</p>
                              </div>
                              <div className="text-2xl">✉️</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
                              <div>
                                    <p className="text-sm text-gray-500">Check us on</p>
                                    <p className="font-semibold">@lets.nextstep</p>
                              </div>
                              <div className="text-2xl">📷</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
                              <div>
                                    <p className="text-sm text-gray-500">Message us on Whatsapp</p>
                                    <p className="font-semibold">+6281373670389</p>
                              </div>
                              <div className="text-2xl">💬</div>
                        </div>
                  </div>
                  {/* Footer */}
                  <footer className="bg-[#393737] text-white py-10 px-6 md:px-8 text-xs sm:text-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm sm:text-base">
                              <div>
                                    <div className="mb-3">
                                          <Image
                                                src="/logo.png"
                                                alt="NextStep Logo"
                                                width={100}
                                                height={100}
                                                className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
                                                priority
                                          />
                                    </div>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Quick Links</h4>
                                    <ul className="space-y-1">
                                          <li className="hover:text-teal-500">
                                                <Link href="/">Home</Link>
                                          </li>
                                          <li className="hover:text-teal-500">
                                                <Link href="/about">About us</Link>
                                          </li>
                                          <li className="hover:text-teal-500">
                                                <Link href="/services">Our Services</Link>
                                          </li>
                                          <li className="hover:text-teal-500">
                                                <Link href="/faq">FAQ</Link>
                                          </li>
                                    </ul>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Contact</h4>
                                    <p>partnership@nextstep.id</p>
                                    <p>0822-9807-3454 (Chat only)</p>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Follow Us</h4>
                                    <p>
                                          Twitter
                                          <br />
                                          LinkedIn
                                          <br />
                                          Instagram
                                    </p>
                              </div>
                        </div>
                        <div className="mt-10 text-center text-gray-400 text-[10px] sm:text-xs">
                              © 2025 NextStep. All rights reserved.
                        </div>
                  </footer>
            </div>
      );
}
