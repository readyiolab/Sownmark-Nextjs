import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Clock } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & About */}
          <div>
            <Image src="/logo.webp" alt="Sownmark Logo" width={179} height={36} className="h-9 w-auto mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Sownmark builds custom Multi AI Agents that answer calls, text and email leads, qualify prospects and book appointments—supported by custom software engineering and performance digital marketing.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/company/sownmark', label: 'LinkedIn' },
                { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/sownmark_', label: 'Instagram' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Sownmark143641', label: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Core AI Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">AI Agent Solutions</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/ai-agents', label: 'Multi AI Agents (Core)' },
                { to: '/ai-voice-agents', label: 'AI Voice Agents' },
                { to: '/ai-sms-email-automation', label: 'SMS & Email Automation' },
                { to: '/ai-appointment-scheduling', label: 'Appointment Scheduling' },
                { to: '/ai-lead-qualification', label: 'Lead Qualification' },
                { to: '/industries', label: 'Industry Workflows' },
                { to: '/website-software-development', label: 'Software Development' },
                { to: '/digital-marketing', label: 'Digital Marketing' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Company & Resources</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/resources', label: 'Resources & Guides' },
                { to: '/#calculator', label: 'Lost Revenue Calculator' },
                { to: '/about', label: 'About Sownmark' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/contact#strategy-call', label: 'Book Strategy Call' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Direct Connect</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="text-blue-600 mr-3 shrink-0" />
                <a
                  href="mailto:hello@sownmark.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-semibold"
                >
                  hello@sownmark.com
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={16} className="text-blue-600 mr-3 shrink-0" />
                <a
                  href="tel:+919792166702"
                  className="hover:text-blue-600 transition-colors duration-300 font-semibold"
                >
                  +91 97921 66702
                </a>
              </li>
              <li className="flex items-start text-xs text-gray-500">
                <Clock size={16} className="text-blue-600 mr-3 shrink-0 mt-0.5" />
                <span>Strategy calls scheduled across US, AU, CA, SG & UK time zones.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-100" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {currentYear} Sownmark. All rights reserved.</p>
          <p>Custom Multi AI Agents, Software Development & Performance Lead Generation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
