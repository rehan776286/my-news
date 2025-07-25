import React from "react";
import Link from "next/link"; // Import Link for Next.js internal navigation

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            TrendMode News
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Your trusted source for fast, factual, and future-facing news from
            India and around the world. Committed to unbiased, high-impact
            journalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-white transition-colors duration-200"
              >
                Disclaimer
              </Link>
            </li>
            {/* Add more legal links as needed */}
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a
                href="mailto:info@trendmode.in"
                className="hover:text-white transition-colors duration-200"
              >
                info@trendmode.in
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Bihar, India
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.113 4.113 0 001.815-2.274 8.23 8.23 0 01-2.607.996 4.103 4.103 0 00-6.993 3.743 11.65 11.65 0 01-8.4-4.286 4.103 4.103 0 001.27 5.477A4.072 4.072 0 012 10.74a4.095 4.095 0 003.29 4.025 4.135 4.135 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.006A11.666 11.666 0 008.29 20.25z"></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C8.847 2 8.441 2.016 7.152 2.073 5.863 2.13 4.979 2.378 4.226 2.698 3.473 3.018 2.868 3.476 2.374 3.971 1.88 4.465 1.422 5.07 1.102 5.823.782 6.576.533 7.46.476 8.748.419 10.036.403 10.441.403 12s.016 3.559.073 4.848c.057 1.289.305 2.173.625 2.926.32 0.753.778 1.358 1.273 1.852.494.495 1.099.953 1.852 1.273.753.32 1.637.568 2.926.625 1.289.057 1.694.073 4.848.073s3.559-.016 4.848-.073c1.289-.057 2.173-.305 2.926-.625.753-.32 1.358-.778 1.852-1.273.495-.494.953-1.099 1.273-1.852.32-.753.568-1.637.625-2.926.057-1.289.073-1.694.073-4.848s-.016-3.559-.073-4.848c-.057-1.289-.305-2.173-.625-2.926-.32-.753-.778-1.358-1.273-1.852C20.535 2.868 19.93 2.41 19.177 2.09c-.753-.32-1.637-.568-2.926-.625C15.559 2.016 15.153 2 12 2zm0 1.6c3.2 0 3.633.015 4.897.072 1.17.052 1.777.291 2.296.505.518.214.954.512 1.307.865.353.353.651.79.865 1.307.214.52.453 1.126.505 2.296.057 1.264.072 1.697.072 4.897s-.015 3.633-.072 4.897c-.052 1.17-.291 1.777-.505 2.296-.214.518-.512.954-.865 1.307-.353.353-.79.651-1.307.865-.52.214-1.126.453-2.296.505-1.264.057-1.697.072-4.897.072s-3.633-.015-4.897-.072c-1.17-.052-1.777-.291-2.296-.505-.518-.214-.954-.512-1.307-.865-.353-.353-.651-.79-.865-1.307-.214-.52-.453-1.126-.505-2.296C3.615 15.633 3.6 15.2 3.6 12s.015-3.633.072-4.897c.052-1.17.291-1.777.505-2.296.214-.518.512-.954.865-1.307.353-.353.79-.651 1.307-.865.52-.214 1.126-.453 2.296-.505C8.367 3.615 8.8 3.6 12 3.6zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.6a3.4 3.4 0 110 6.8 3.4 3.4 0 010-6.8zm6.5-.82a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm pt-8">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          &copy; {currentYear} TrendMode News. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back to Top
        </button>
      </div>
    </footer>
  );
}
