"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      {
            name: "Our Services",
            href: "/services",
            submenu: [
                  { name: "Mentoring", href: "/services/mentoring" },
                  { name: "Webinar", href: "/services/webinar" },
                  { name: "Kelas Online", href: "/services/kelas-online" },
            ],
      },
      { name: "FAQ", href: "/faq" },
];

export default function AboutPage() {
      const pathname = usePathname();
      const [menuOpen, setMenuOpen] = useState(false);
      const [servicesOpen, setServicesOpen] = useState(false);
      const [footerServicesOpen, setFooterServicesOpen] = useState(false);

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
                        <ul className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-[16px] md:text-[18px] font-extrabold`}>
                              {navItems.map((item) => (
                                    <li key={item.name} className="relative group">
                                          {item.submenu ? (
                                                <>
                                                      {/* Mobile */}
                                                      <div className="md:hidden">
                                                            <span className="block px-4 py-2 rounded-md text-gray-800 hover:bg-[#d1f0ee] transition">
                                                                  {item.name}
                                                            </span>
                                                            <button
                                                                  onClick={() => setServicesOpen(!servicesOpen)}
                                                                  className="md:hidden absolute right-2 top-2 px-2"
                                                            >
                                                                  <span className="text-sm">▼</span>
                                                            </button>
                                                      </div>
                                                      {/* Desktop */}
                                                      <div className="hidden md:block">
                                                            <span className="block px-4 py-2 rounded-md text-gray-800 cursor-default hover:bg-[#d1f0ee] transition">
                                                                  <span className="flex items-center">
                                                                        {item.name}
                                                                        <span className="text-sm ml-1">▼</span>
                                                                  </span>
                                                            </span>
                                                      </div>
                                                      {/* Submenu Mobile */}
                                                      <ul
                                                            className={`${servicesOpen ? "block" : "hidden"
                                                                  } md:hidden absolute left-0 top-full bg-white rounded-lg shadow-lg w-40 z-50`}
                                                      >
                                                            {item.submenu.map((sub) => (
                                                                  <li key={sub.href}>
                                                                        <Link
                                                                              href={sub.href}
                                                                              className="block px-4 py-2 hover:bg-[#d1f0ee] text-gray-800 transition"
                                                                        >
                                                                              {sub.name}
                                                                        </Link>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                      {/* Submenu Desktop */}
                                                      <div className="hidden md:group-hover:block absolute left-0 top-full pt-1 z-50">
                                                            <ul className="bg-white rounded-lg shadow-lg w-40">
                                                                  {item.submenu.map((sub) => (
                                                                        <li key={sub.href}>
                                                                              <Link
                                                                                    href={sub.href}
                                                                                    className="block px-4 py-2 hover:bg-[#d1f0ee] text-gray-800 transition"
                                                                              >
                                                                                    {sub.name}
                                                                              </Link>
                                                                        </li>
                                                                  ))}
                                                            </ul>
                                                      </div>
                                                </>
                                          ) : (
                                                <Link
                                                      href={item.href}
                                                      className={`block px-4 py-2 rounded-md ${pathname === item.href ? "text-teal-500" : "text-gray-800"
                                                            } hover:bg-[#d1f0ee] transition`}
                                                >
                                                      {item.name}
                                                </Link>
                                          )}
                                    </li>
                              ))}
                        </ul>
                  </nav>
                  {/* Decorative Background Images */}
                  <Image
                        className="absolute w-32 sm:w-44 md:w-[298px] h-auto top-[210px] left-0 z-0"
                        alt="Vector"
                        src="/vector-1.png"
                        width={600}
                        height={600}
                  />
                  <Image
                        className="absolute w-32 sm:w-44 md:w-[251px] h-auto top-[850px] right-0 z-0"
                        alt="Vector"
                        src="/vector-2.png"
                        width={600}
                        height={600}
                  />
                  {/* Hero Section */}
                  <section className="text-center py-20 px-6 sm:px-12 md:px-32 relative z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-[64px] font-extrabold mb-4">
                              Empowering People to <br /> Find Their Path
                        </h1>
                        <p className="text-[#5E6366] text-sm sm:text-base md:text-[24px]">
                              We believe everyone deserves clarity and confidence in their{" "}
                              <br className="hidden sm:block" /> career journey.
                        </p>
                  </section>
                  {/* About Section */}
                  <section className="bg-white border-4 border-[#71a894] rounded-lg shadow-md mx-6 md:mx-32 px-6 py-10 md:py-14 md:px-20 mb-20 relative z-10">
                        <div className="grid md:grid-cols-2 gap-10">
                              <div>
                                    <p className="text-xl md:text-[36px] font-bold mb-4">About Us</p>
                                    <p className="mb-4 text-[#5E6366] md:text-[20px]">
                                          NextStep is a career development startup designed to empower high
                                          school students, college students, and fresh graduates to level up
                                          their skills and confidently take on the challenges of the modern
                                          workforce.
                                    </p>
                                    <p className="text-[#5E6366] md:text-[20px]">
                                          NextStep helps young talents bridge the gap between education and
                                          employment. Whether you&apos;re figuring out what path to take or
                                          ready to take your next big leap, we&apos;re here to help you
                                          grow, get skilled, and stay ahead. Your journey starts here. Take
                                          the NextStep.
                                    </p>
                              </div>
                              <div>
                                    <p className="text-xl md:text-[36px] font-bold mb-4">Our Story</p>
                                    <p className="mb-4 text-[#5E6366] md:text-[20px]">
                                          Our journey began with a simple idea: to help students and young
                                          professionals navigate the complexities of career growth in an
                                          evolving industry landscape.
                                    </p>
                                    <p className="text-[#5E6366] md:text-[20px]">
                                          Through NextStep, we aim to empower the next generation to take
                                          confident strides towards their dreams, offering guidance, skill
                                          development, and a roadmap to unlock their full potential. The
                                          future is bright, and we&apos;re here to help you take that first
                                          step, and the many after it.
                                    </p>
                              </div>
                        </div>
                  </section>
                  {/* Values Section */}
                  <section className="text-center py-20 px-6 md:px-32 relative z-10">
                        <h2 className="text-3xl font-bold mb-12 text-[#303031] md:text-[64px]">
                              Our Values
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                              {[
                                    {
                                          title: "Empowerment",
                                          desc: "Empowering individuals to take control of their career journey and confidently step into the professional world.",
                                    },
                                    {
                                          title: "Growth",
                                          desc: "Both personal and professional growth are key themes in career development.",
                                    },
                                    {
                                          title: "Collaboration",
                                          desc: "Building connections and networking is vital for career success.",
                                    },
                              ].map((item, index) => (
                                    <div
                                          key={index}
                                          className="w-full sm:w-[300px] bg-[#f3f0ea] border-4 border-[#71a894] rounded-lg shadow-md px-6 py-6 flex flex-col justify-center items-center text-center"
                                    >
                                          <p className="text-2xl md:text-[32px] font-bold text-[#303031] mb-4">
                                                {item.title}
                                          </p>
                                          <p className="text-base text-[#303031]">
                                                {item.desc
                                                      .replace(/'s/g, "&rsquo;s")
                                                      .replace(/'re/g, "&rsquo;re")}
                                          </p>
                                    </div>
                              ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                              {[
                                    {
                                          title: "Innovation",
                                          desc: "We&rsquo;re committed to creative solutions and forward-thinking ideas.",
                                    },
                                    {
                                          title: "Accessibility",
                                          desc: "Ensuring that career guidance and resources are available to all.",
                                    },
                              ].map((item, index) => (
                                    <div
                                          key={index}
                                          className="w-full sm:w-[300px] bg-[#f3f0ea] border-4 border-[#71a894] rounded-lg shadow-md px-6 py-6 flex flex-col justify-center items-center text-center"
                                    >
                                          <p className="text-2xl md:text-[32px] font-bold text-[#303031] mb-4">
                                                {item.title}
                                          </p>
                                          <p className="text-base text-[#303031]">{item.desc}</p>
                                    </div>
                              ))}
                        </div>
                  </section>
                  {/* CTA Section */}
                  <footer
                        className="relative py-16 px-6 md:px-8 text-center overflow-hidden"
                        style={{
                              backgroundImage: 'url("/rectangle-2.png")',
                              backgroundBlendMode: "overlay",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                        }}
                  >
                        <div className="relative z-10">
                              <p className="text-lg md:text-xl font-semibold mt-2">
                                    Your journey starts here.{" "}
                                    <span className="text-teal-500 font-bold">#TaketheNextStep</span>
                              </p>
                              <p className="text-lg md:text-xl font-semibold mt-2">
                                    &ldquo;Unlocking the full potential of the next generation through
                                    skill, confidence, and direction.&rdquo;
                              </p>
                        </div>
                  </footer>
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
                                          <li className="hover:text-teal-500"><Link href="/">Home</Link></li>
                                          <li className="hover:text-teal-500"><Link href="/about">About us</Link></li>
                                          <li className="hover:text-teal-500 flex justify-between items-center cursor-pointer md:cursor-default"
                                                onClick={() => setFooterServicesOpen(!footerServicesOpen)}
                                          >
                                                <span className="font-semibold">Our Services</span>
                                                <span className={`ml-2 transition-transform md:hidden ${footerServicesOpen ? "rotate-180" : ""}`}>▼</span>
                                          </li>
                                          {/* Submenu - always visible on desktop, toggle on mobile */}
                                          <ul className={`ml-4 mt-1 space-y-1 text-sm ${footerServicesOpen ? "block" : "hidden"} md:block`}>
                                                <li className="hover:text-teal-400"><Link href="/services/mentoring">Mentoring</Link></li>
                                                <li className="hover:text-teal-400"><Link href="/services/webinar">Webinar</Link></li>
                                                <li className="hover:text-teal-400"><Link href="/services/kelas-online">Kelas Online</Link></li>
                                          </ul>
                                          <li className="hover:text-teal-500"><Link href="/faq">FAQ</Link></li>
                                    </ul>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Contact</h4>
                                    <p>partnership@nextstep.id</p>
                                    <Link href="https://wa.me/+6282298073454">
                                          <p className="hover:text-teal-500">0822-9807-3454 (Chat only)</p>
                                    </Link>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Follow Us</h4>
                                    <Link href="https://www.instagram.com/lets.nextstep?igsh=dDVzaWw2NmhxbzMw">
                                          <p className="hover:text-teal-500">Instagram</p>
                                    </Link>
                              </div>
                        </div>
                        <div className="mt-10 text-center text-gray-400 text-[10px] sm:text-xs">
                              © 2025 NextStep. All rights reserved.
                        </div>
                  </footer>
            </div>
      );
}
