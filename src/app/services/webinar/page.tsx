'use client';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

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
      { name: "FAQ", href: "/faq" }
];
const WebinarPage = () => {
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
                  {/* Maintenance Message */}
                  <div className="flex items-center justify-center min-h-screen text-center">
                        <h1 className="text-3xl font-bold text-gray-800">This service is not available for now</h1>
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
                                    <Link href="https://wa.me/+6288211912324">
                                          <p className="hover:text-teal-500">088211912324 (Chat only)</p>
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
};

export default WebinarPage;