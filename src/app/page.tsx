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
            We&rsquo;re here to make it clearer - now you can take the <span className="text-[#29B0AC]">NextStep</span> with us
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6">
            Everyone&apos;s asking what you want to be. But no one&apos;s helping you find the answer
          </p>
          <button className="bg-[#29B0AC] text-white py-2 px-4 rounded-xl text-base sm:text-lg md:text-[18px]">
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
      <section
        className="relative bg-gradient-to-b from-[#a2d6eb] to-[#F3F0EA] py-16 px-6 md:px-8 text-center overflow-hidden"
        style={{
          backgroundImage: 'url("/background-home.jpg"), linear-gradient(to bottom, #A2D6EB, #F3F0EA)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button className="bg-white text-[#29B0AC] py-2 px-4 rounded-full border border-white shadow-lg text-sm sm:text-base z-10 relative">
          ✨ Your Future Awaits
        </button>
        <p className="text-2xl sm:text-3xl md:text-[42px] font-semibold mb-4 mt-4 relative z-10">
          The best time to plan your future is now.
        </p>
        <p className="text-base sm:text-lg md:text-[24px] text-gray-600 max-w-2xl mx-auto mb-10 relative z-10">
          Let us help you discover where you&apos;re meant to go — and how to get there.
        </p>
        <div className="bg-white p-6 sm:p-8 rounded-lg max-w-xl mx-auto shadow-md z-10 relative">
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
          <Link href="/services">
          <button className="z-10 relative bg-[#29B0AC] text-white py-2 px-4 rounded-xl border border-white shadow-lg hover:bg-teal-600 transition text-base sm:text-lg md:text-[24px] cursor-pointer">
            ✨ Take the NextStep ✨
          </button>
          </Link>
        </div>
      </section>
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