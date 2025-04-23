'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "FAQ", href: "/faq" }
];

export default function HomePage() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-['Plus Jakarta Sans'] text-gray-800 bg-gradient-to-r from-[#A2D6EB] to-[#F3F0EA] min-h-screen">
      
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center py-4 px-6 md:px-32 border-b relative">
        <div className="text-xl font-bold">LOGO</div>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-[16px] md:text-[18px] font-extrabold`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href
                  ? "text-teal-500 block"
                  : "text-gray-800 hover:text-teal-500 block"}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-8 pt-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Choosing a college is hard. Choosing a career is harder. <br />
            We&rsquo;re here to make it clearer - now you can take the <span className="text-teal-500">NextStep</span> with us
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6">
            Everyone&apos;s asking what you want to be. But no one&apos;s helping you find the answer
          </p>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-xl border border-white shadow-lg text-base sm:text-lg md:text-[18px]">
            Take the NextStep ✨
          </button>
        </div>

        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <div className="relative w-full flex justify-center">
            <div className="absolute inset-0 w-[80%] h-[80%] rounded-full opacity-70 blur-md z-0" />
            <Image
              src="/vector_animasi.png"
              alt="Hero Illustration"
              width={600}
              height={400}
              className="w-2/3 sm:w-1/2 md:w-2/3 relative z-10"
              priority
            />
          </div>
        </div>
      </section>
            {/* Features Section */}
            <section className="text-center px-6 mb-32">
        <button className="bg-white text-[#29B0AC] py-2 px-4 rounded-full border border-white shadow-lg text-sm sm:text-base md:text-center">
          🎯 Our Mission
        </button>
        <p className="text-2xl sm:text-3xl md:text-[42px] font-semibold mb-4 mt-4">
          Everyone&apos;s asking what you want to be.<br />But no one&rsquo;s helping you find the answer.
        </p>
        <p className="text-base sm:text-lg md:text-[24px] text-gray-600 max-w-2xl mx-auto mb-10">
          You&rsquo;re expected to know what to study. You&rsquo;re expected to pick a career path. You&rsquo;re expected to &ldquo;have a plan.&rdquo;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Personalized Mentoring",
              desc: "Get one-on-one guidance from experienced mentors who understand your journey."
            },
            {
              title: "Career Discovery Tools",
              desc: "Access powerful tools that help you explore and understand different career paths."
            },
            {
              title: "Real Conversations",
              desc: "Connect with professionals and peers who can share their experiences and insights."
            }
          ].map((item, i) => (
            <div key={i} className="border border-teal-400 rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-2 text-xl sm:text-2xl md:text-[24px]">{item.title}</h3>
              <p className="text-base sm:text-[16px] md:text-[18px] text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-r from-[#A2D6EB] to-[#F3F0EA] py-16 px-6 md:px-8 text-center overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-10 z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hexPattern" width="20" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
              <polygon
                points="10,0 20,5 20,15 10,20 0,15 0,5"
                fill="#2c7a7b"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>

        <button className="bg-white text-[#29B0AC] py-2 px-4 rounded-full border border-white shadow-lg text-sm sm:text-base">
          ✨ Your Future Awaits
        </button>
        <p className="text-2xl sm:text-3xl md:text-[42px] font-semibold mb-4 mt-4">The best time to plan your future is now.</p>
        <p className="text-base sm:text-lg md:text-[24px] text-gray-600 max-w-2xl mx-auto mb-10">
          Let us help you discover where you&apos;re meant to go — and how to get there.
        </p>
        <div className="bg-white p-6 sm:p-8 rounded-lg max-w-xl mx-auto shadow-md z-10">
          <p className="text-left font-bold text-xl sm:text-2xl md:text-[28px] mb-4 text-gray-800">
            You don&rsquo;t need to have it all figured out
          </p>
          <p className="text-left text-base sm:text-lg md:text-[20px] text-gray-600 mb-4">
            At NextStep, we guide you through one of life&rsquo;s most important decisions. We&rsquo;re here to help you:
          </p>
          <ul className="text-left text-base sm:text-lg md:text-[20px] text-gray-700 mb-6 list-none space-y-2">
            {[
              "Understand your strengths and potential",
              "Discover career options that actually fit you",
              "Choose a major with confidence"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#29B0AC]">✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="z-10 relative bg-teal-500 text-white py-2 px-4 rounded-xl border border-white shadow-lg hover:bg-teal-600 transition text-base sm:text-lg md:text-[24px]">
            ✨ Take the NextStep ✨
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-8 text-xs sm:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm sm:text-base">
          <div>
            <div className="font-bold text-lg mb-2">LOGO</div>
            <p>Helping students find their path to success</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About us</li>
              <li>Our Services</li>
              <li>FAQ</li>
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