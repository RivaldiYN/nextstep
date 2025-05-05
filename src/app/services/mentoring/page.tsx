'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import Image from 'next/image';
import MentorModal from '@/components/mentormodal';

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

export default function MentoringPage() {
      const pathname = usePathname();
      const [menuOpen, setMenuOpen] = useState(false);
      const [servicesOpen, setServicesOpen] = useState(false);
      const [showModal, setShowModal] = useState(false);
      const [selectedMentor, setSelectedMentor] = useState<'fauzan' | 'dalimi' | 'syifa' | null>(null);
      const [footerServicesOpen, setFooterServicesOpen] = useState(false);

      const openModal = (mentorId: 'fauzan' | 'dalimi' | 'syifa') => {
            setSelectedMentor(mentorId);
            setShowModal(true);
      };

      const closeModal = () => {
            setSelectedMentor(null);
            setShowModal(false);
      };

      // Refs for scrolling
      const scheduleRef = useRef<HTMLElement>(null);
      const mentorsRef = useRef<HTMLElement>(null);

      type Mentor = {
            id: 'fauzan' | 'dalimi' | 'syifa'; // tambahkan ID yang cocok
            name: string;
            title: string;
            img: string;
            description: string;
      };

      const mentors: Mentor[] = [
            {
                  id: 'fauzan',
                  name: 'Fauzan Al-Rasyid',
                  title: 'Career & College Life Coach',
                  img: '/fauzan.png',
                  description:
                        'Fauzan memiliki pengalaman lebih dari 5 tahun dalam membimbing mahasiswa dan fresh graduate dalam membangun karier...'
            },
            {
                  id: 'dalimi',
                  name: 'Dalimi Nurdin',
                  title: 'Education Consultant',
                  img: '/dalimi.png',
                  description:
                        'Dalimi telah membantu ratusan pelajar dalam meraih beasiswa...'
            },
            {
                  id: 'syifa',
                  name: 'Syifa Aulia Putri',
                  title: 'Education Consultant',
                  img: '/syifa.png',
                  description:
                        'Syifa fokus pada pengembangan strategi belajar efektif...'
            }
      ];


      // Scroll functions
      const scrollToSchedule = () => {
            scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const scrollToMentors = () => {
            mentorsRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

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
                  {/* Hero Section */}
                  <section className="flex flex-col md:flex-row items-center px-6 md:px-8 pt-12 pb-16">
                        <div className="flex-1">
                              <p className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                    Building a relationship that supports growth, fosters learning, and opens doors for new opportunities
                              </p>
                              <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6">
                                    Connect with industry leaders who&apos;ve walked the path you aspire to take. Your journey to success starts with the right guidance.
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm">
                                    <button
                                          onClick={scrollToSchedule}
                                          className="bg-[#29B0AC] text-white py-2 px-6 rounded-xl text-base sm:text-lg cursor-pointer hover:bg-[#c3e3e2] transition hover:text-[#29B0AC]">
                                          Check Our Schedule
                                    </button>
                                    <button
                                          onClick={scrollToMentors}
                                          className="bg-white text-[#29B0AC] py-2 px-6 rounded-xl text-base sm:text-lg border border-[#29B0AC] cursor-pointer hover:bg-[#c3e3e2] transition hover:text-[#29B0AC]">
                                          View Our Mentors
                                    </button>
                              </div>
                        </div>
                        <div className="flex-1 flex justify-center mt-10 md:mt-0">
                              <Image
                                    src="/vector_service.png"
                                    alt="Hero Illustration"
                                    width={600}
                                    height={600}
                                    className="hidden md:block"
                                    priority
                              />
                        </div>
                  </section>
                  <section className="flex flex-col md:flex-row items-center px-6 md:px-32 py-16 space-y-8 md:space-y-0 md:space-x-[400px]">
                        <div className="relative w-[250px] h-[250px] flex-shrink-0 hidden md:block">
                              <Image
                                    src="/vector-3.png"
                                    alt="Background Shape"
                                    fill
                                    className="object-contain z-0"
                              />
                              <Image
                                    src="/vector_service_2.png"
                                    alt="Mentoring"
                                    width={350}
                                    height={350}
                                    className="relative z-10"
                              />
                        </div>
                        {/* Text Box */}
                        <div className="bg-white md:text-[24px] border-4 border-[#71a894] p-6 rounded-xl shadow-sm text-sm sm:text-base max-w-xl font-semibold">
                              Mentoring is a powerful tool for personal and professional development. It&apos;s not just about imparting knowledge; it&apos;s about creating meaningful connections that encourage progress. Through mentorship, individuals gain access to insights and experiences that might otherwise take years to discover on their own.
                        </div>
                  </section>
                  {/* Mentoring Schedule - Added ref here */}
                  <section ref={scheduleRef} className="scroll-mt-16">
                        <p className="text-xl md:text-[48px] sm:text-2xl font-bold mb-6 text-center">Mentoring Schedule</p>
                        <section className="bg-[#F3F0EA] py-10 px-6 md:px-20 lg:px-28 rounded-3xl border-4 border-[#71a894] max-w-5xl mx-auto">
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm sm:text-base">
                                    {[
                                          { day: 'Monday', date: '19 MAY' },
                                          { day: 'Tuesday', date: '20 MAY' },
                                          { day: 'Wednesday', date: '21 MAY' },
                                          { day: 'Thursday', date: '22 MAY' }
                                    ].map((item, index) => (
                                          <div key={index} className="bg-white p-4 rounded-xl border border-gray-300 flex flex-col items-center">
                                                <p className="font-extrabold">{item.day}</p>
                                                <p className="font-semibold mb-2">{item.date}</p>
                                                <div className="w-16 h-16 bg-[#F3F3F3] rounded-full shadow-md flex items-center justify-center mb-2">
                                                      <p className="font-semibold text-sm leading-tight">0%<br />Booked</p>
                                                </div>
                                                <p className="mt-1 text-[12px] text-semibold"><span className="font-bold">10+</span> jadwal tersedia</p>
                                          </div>
                                    ))}
                              </div>
                        </section>
                  </section>
                  {/* Meet Our Mentors - Added ref here */}
                  <section ref={mentorsRef} className="px-6 md:px-32 py-12 scroll-mt-16">
                        <p className="text-xl md:text-[48px] sm:text-2xl font-bold mb-8 text-center">Meet Our Mentors!</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                              {mentors.map((mentor, i) => (
                                    <div
                                          key={i}
                                          onClick={() => openModal(mentor.id)}
                                          className="bg-white p-4 rounded-xl border-4 border-[#71a894] shadow-sm cursor-pointer hover:shadow-lg transition duration-300"
                                    >
                                          <div className="relative w-28 h-28 mx-auto mb-4">
                                                <div className="absolute inset-0 bg-[#F3F0EA] rounded-full"></div>
                                                <Image
                                                      src={mentor.img}
                                                      alt={mentor.name}
                                                      width={500}
                                                      height={500}
                                                      className="rounded-full z-10 relative mx-auto"
                                                />
                                          </div>
                                          <p className="font-bold text-[24px]">{mentor.name}</p>
                                          <p className="text-xs text-[16px]">{mentor.title}</p>
                                    </div>
                              ))}
                        </div>
                  </section>
                  {/* Mentor Modal */}
                  {showModal && selectedMentor && (
                        <MentorModal
                              isOpen={showModal}
                              onClose={closeModal}
                              mentor={selectedMentor}
                        />
                  )}
                  {/* How to Join */}
                  <section className="py-10 px-6 md:px-32 text-center">
                        <p className="text-xl md:text-[48px] sm:text-2xl font-bold mb-6">How To Join Our Mentoring?</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
                              <div>
                                    <div className="w-40 h-40 bg-sky-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                          <Image src="/select_package.png" alt="Select package" width={150} height={150} />
                                    </div>
                                    <p className="md:text-[24px] font-bold">1. Select the package</p>
                              </div>
                              <div>
                                    <div className="w-40 h-40 bg-sky-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                          <Image src="/contact_us.png" alt="Contact Us" width={150} height={150} />
                                    </div>
                                    <p className="md:text-[24px] font-bold">2. Contact us on our Instagram</p>
                              </div>
                              <div>
                                    <div className="w-40 h-40 bg-sky-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                          <Image src="/reach_out.png" alt="Reach Out" width={150} height={150} />
                                    </div>
                                    <p className="md:text-[24px] font-bold">3. Our team will reach you out</p>
                              </div>
                        </div>
                  </section>
                  <section className="px-6 md:px-20 lg:px-32 py-12">
                        <h2 className="text-[28px] sm:text-3xl md:text-[48px] font-bold mb-12 text-center">
                              Our Packages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center gap-6">
                              {Array(1).fill(0).map((_, i) => (
                                    <div
                                          key={i}
                                          className="bg-white border border-gray-300 rounded-2xl p-6 shadow-md flex flex-col text-center w-full max-w-sm"
                                    >
                                          <div className="flex justify-between items-center text-sm mb-4">
                                                <p className="font-bold text-black md:text-[20px]">
                                                      Super Plus <br />
                                                      <span className="text-[#29B0AC]">Package</span>
                                                </p>
                                                <p className="text-[#29B0AC] font-semibold md:text-[24px]">Rp. 150k</p>
                                          </div>
                                          <div className="w-full border border-black rounded-md overflow-hidden text-xs mb-4">
                                                <div className="flex divide-x divide-black">
                                                      <div className="w-1/2 p-2 font-bold md:text-[20px]">1 SESI</div>
                                                      <div className="w-1/2 p-2 font-semibold md:text-[14px] text-left">
                                                            Consultation with Our Mentor Up to 60 Minutes
                                                      </div>
                                                </div>
                                          </div>
                                          <ul className="text-left text-xs space-y-1 font-semibold md:text-[14px]">
                                                <li>• 1-on-1 consultation with mentor</li>
                                                <li>• Online consultation via Zoom (75 mins)</li>
                                                <li>• Assessment pre-consultation</li>
                                                <li>• Assessment post-consultation</li>
                                          </ul>
                                    </div>
                              ))}
                        </div>
                  </section>
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