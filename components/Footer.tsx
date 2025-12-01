'use client';

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-[#E2E8F0] section-padding border-t border-[#111827]">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 font-sans tracking-tighter text-white">
                <span className="text-[#EB0028]">TEDx</span>SRMIST NCR Ghaziabad
              </h3>
              <p className="text-[#E2E8F0] text-lg sm:text-xl mb-4 sm:mb-6 font-medium">
                Happiness & Ideas Worth Spreading
              </p>
              <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base md:text-lg">
                An independently organized TED event bringing together brilliant minds to share
                transformative ideas about happiness, wellbeing, and what truly matters in life.
                Join us for an inspiring journey of joy, innovation, and meaningful conversations.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#111827] flex items-center justify-center text-[#FFD700] hover:text-white hover:bg-[#EB0028] transition-all duration-300 rounded-none"
                  aria-label={label}
                >
                  <Icon size={16} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'About TEDx', href: '#about' },
                { label: 'Speakers', href: '#speakers' },
                { label: 'Schedule', href: '#schedule' },
                { label: 'Register', href: '#register' },
                { label: 'Sponsors', href: '#sponsors' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#EB0028] transition-colors duration-300 text-sm sm:text-base md:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#EB0028] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#E2E8F0] text-sm sm:text-base md:text-lg">tedx@srmist.edu.in</p>
                  <p className="text-[#E2E8F0] text-sm sm:text-base md:text-lg">info@tedxsrmist.edu.in</p>
                </div>
              </div>

              <div>
                <p className="text-[#E2E8F0] text-sm sm:text-base md:text-lg">
                  SRM Institute of Science and Technology,<br />
                  SRM IST NCR Campus, Delhi-Meerut Road,<br />
                  Modinagar, Ghaziabad District,<br />
                  Uttar Pradesh, 201204.
                </p>
              </div>

              <div className="pt-2 sm:pt-4">
                <p className="text-[#94A3B8] mb-1 sm:mb-2 font-medium text-xs sm:text-sm">Event Date:</p>
                <p className="text-[#EB0028] font-bold text-sm sm:text-base md:text-lg">January 21, 2026</p>
                <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-[#111827]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-[#94A3B8] text-center md:text-left">
              <p className="text-xs sm:text-sm">© 2025 TEDx SRMIST NCR Ghaziabad. All rights reserved.</p>
              <p className="mt-1 text-xs sm:text-sm">
                This independent TEDx event is operated under license from TED.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[#94A3B8]">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;