'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const navItems = [
      { name: 'Home', href: '/' },
      { name: 'About us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'FAQ', href: '/faq' }
];

export default function FAQPage() {
      const pathname = usePathname();
      const [menuOpen, setMenuOpen] = useState(false);

      return (
            <div className="font-['Plus Jakarta Sans'] text-gray-800 bg-gradient-to-r from-[#A2D6EB] to-[#F3F0EA] min-h-screen relative overflow-hidden">

                  {/* Navbar */}
                  <nav className="flex flex-wrap justify-between items-center py-4 px-6 md:px-32 border-b relative z-20 bg-transparent">
                        <div className="text-xl font-bold">LOGO</div>
                        <button
                              onClick={() => setMenuOpen(!menuOpen)}
                              className="md:hidden text-gray-800 focus:outline-none"
                        >
                              ☰
                        </button>
                        <ul className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-[16px] md:text-[18px] font-extrabold`}>
                              {navItems.map((item) => (
                                    <li key={item.href}>
                                          <Link
                                                href={item.href}
                                                className={pathname === item.href
                                                      ? 'text-teal-500 block'
                                                      : 'text-gray-800 hover:text-teal-500 block'}
                                          >
                                                {item.name}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  </nav>

                  {/* Footer */}
                  <footer className="bg-gray-900 text-white py-10 px-6 md:px-8 text-xs sm:text-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm sm:text-base">
                              <div>
                                    <div className="font-bold text-lg mb-2">LOGO</div>
                                    <p>Helping students find their path to success</p>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Quick Links</h4>
                                    <ul className="space-y-1 ">
                                          <li className="hover:text-teal-500"><Link href="/">Home</Link></li>
                                          <li className="hover:text-teal-500"><Link href="/about">About us</Link></li>
                                          <li className="hover:text-teal-500"><Link href="/services">Our Services</Link></li>
                                          <li className="hover:text-teal-500"><Link href="/faq">FAQ</Link></li>
                                    </ul>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Contact</h4>
                                    <p>partnership@nextstep.id</p>
                                    <p>0822-9807-3454 (Chat only)</p>
                              </div>
                              <div>
                                    <h4 className="font-semibold mb-2">Follow Us</h4>
                                    <p>Twitter<br />LinkedIn<br />Instagram</p>
                              </div>
                        </div>
                        <div className="mt-10 text-center text-gray-400 text-[10px] sm:text-xs">
                              © 2025 NextStep. All rights reserved.
                        </div>
                  </footer>
                  </div>
      );
}
