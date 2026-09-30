import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
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
              Sownmark is India's leading full-service digital marketing and custom software development agency. We specialise in generative engine optimisation (GEO), answer engine optimisation (AEO), search engine optimisation (SEO), smart display advertising, programmatic ads, and tech recruitment, helping brands grow and scale across major cities like Delhi, Mumbai, and Bangalore.
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

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/services/digital-marketing', label: 'Digital Marketing' },
                { to: '/services/seo', label: 'SEO + GEO + AEO' },
                { to: '/services/display-advertising', label: 'Display Advertising' },
                { to: '/services/social-media-management', label: 'Social Media' },
                { to: '/services/influencer-marketing', label: 'Influencer Marketing' },
                { to: '/services/web-development', label: 'Web Development' },
                { to: '/services/software-development', label: 'Software Development' },
                { to: '/services/hiring-solutions', label: 'Hiring Solutions' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Major Cities & More */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Locations & Legal</h3>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <ul className="space-y-3">
                {[
                  { to: '/locations/delhi', label: 'Delhi' },
                  { to: '/locations/mumbai', label: 'Mumbai' },
                  { to: '/locations/bangalore', label: 'Bangalore' },
                  { to: '/locations/hyderabad', label: 'Hyderabad' },
                  { to: '/locations/chennai', label: 'Chennai' },
                  { to: '/locations/pune', label: 'Pune' },
                ].map((loc, index) => (
                  <li key={index}>
                    <Link href={loc.to} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {loc.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  { to: '/locations/kolkata', label: 'Kolkata' },
                  { to: '/locations/ahmedabad', label: 'Ahmedabad' },
                  { to: '/locations/noida', label: 'Noida' },
                  { to: '/locations/gurgaon', label: 'Gurgaon' },
                  { to: '/locations/jaipur', label: 'Jaipur' },
                ].map((loc, index) => (
                  <li key={index}>
                    <Link href={loc.to} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {loc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="space-y-3 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms-and-conditions', label: 'Terms & Conditions' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail size={18} className="text-gray-600 mr-3" />
                <a
                  href="mailto:hello@sownmark.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  hello@sownmark.com
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="font-medium mr-3 text-gray-900">Call:</span>
                <a
                  href="tel:+919792166702"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  +91 97921 66702
                </a>
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-900">Hours:</span> 24 Hours open
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-100" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} Sownmark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
