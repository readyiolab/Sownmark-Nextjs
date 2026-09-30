"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  // Handle mobile nav link click: close first, then navigate
  const handleMobileNavClick = useCallback((path: string) => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    // Small delay to let the menu close visually before navigation
    setTimeout(() => {
      router.push(path);
    }, 150);
  }, [router]);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change (safety net)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'SEO + GEO + AEO', path: '/services/seo' },
    { name: 'Display Advertising', path: '/services/display-advertising' },
    { name: 'Social Media Management', path: '/services/social-media-management' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Hiring Solutions', path: '/services/hiring-solutions' },
  ];

  const mainLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/sownmark_', label: 'Instagram' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/company/sownmark', label: 'LinkedIn' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Sownmark143641', label: 'Twitter' },
  ];

  const isHomePage = pathname === '/';
  const activeScrolled = isScrolled || !isHomePage;

  const headerBg = activeScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1.5' : 'bg-transparent py-2.5';
  const textColor = activeScrolled ? 'text-[#1a2957]' : 'text-white';
  const logoInvert = !activeScrolled ? 'brightness-100 invert' : '';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
        <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-[70] py-6" onClick={closeMenu}>
              <Image
                src="/logo.webp"
                alt="Sownmark"
                width={139}
                height={28}
                preload
                className={`h-7 w-auto transition-all duration-300 ${logoInvert}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Services Dropdown Trigger */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-[13px] font-bold tracking-wide transition-all duration-300 hover:opacity-70 py-2 ${textColor}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 transition-all duration-300 origin-top-left z-[100] ${isDropdownOpen
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="block px-5 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {mainLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-[13px] font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${textColor} ${isActive ? 'opacity-100 border-b-2 border-current' : 'opacity-70'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all duration-300 ${isScrolled
                  ? 'bg-[#1a2957] text-white hover:bg-[#1a2957]/90'
                  : 'bg-white text-[#1a2957] hover:bg-white/90'
                  }`}
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={isMenuOpen ? closeMenu : openMenu}
              className={`relative z-[70] p-2 lg:hidden transition-colors duration-200 ${isMenuOpen ? 'text-[#1a2957]' : textColor
                }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 left-0 z-[60] w-full bg-white lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 pt-8 border-b border-gray-100">
          <span className="text-sm font-black uppercase tracking-widest text-[#1a2957]">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:text-[#1a2957] hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 text-[17px] font-semibold text-[#1a2957] hover:text-blue-600 transition-colors border-b border-gray-50"
            >
              <span>Services</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
            </button>

            {/* Services Sub-links */}
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[380px] mt-2 pb-2 pl-4 border-l-2 border-gray-100' : 'max-h-0'}`}>
              {serviceLinks.map((service) => (
                <button
                  key={service.path}
                  onClick={() => handleMobileNavClick(service.path)}
                  className="w-full text-left py-2.5 text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-colors block"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {mainLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleMobileNavClick(link.path)}
                className={`group w-full flex items-center justify-between py-3.5 text-[17px] font-semibold transition-colors border-b border-gray-50 ${isActive ? 'text-blue-600' : 'text-[#1a2957] hover:text-blue-600'
                  }`}
              >
                <span className="flex items-center gap-3">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />}
                  {link.name}
                </span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </div>

        {/* Bottom Panel */}
        <div className="p-6 bg-gray-50 space-y-5 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-white text-[#1a2957] shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => handleMobileNavClick('/contact')}
            className="block w-full text-center py-4 rounded-2xl bg-[#1a2957] text-white font-bold shadow-lg hover:shadow-xl hover:bg-[#0f1d42] transition-all active:scale-[0.98]"
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
