import Head from "next/head"; // Correct import for Next.js Head component
import Link from "next/link";
import React from "react"; // React is still needed for JSX

export default function AboutPage() {
  return (
    <>
      {/* Head component for SEO and metadata - rendered server-side by Next.js */}
      <Head>
        <title>About Us - TrendMode News: Fast, Factual & Future-Facing</title>
        <meta
          name="description"
          content="Discover TrendMode News – your trusted source for fast, factual, and future-facing news from India and around the world. Committed to unbiased, high-impact journalism."
        />
        <meta
          name="keywords"
          content="TrendMode, news, India news, global news, digital media, journalism, factual news, unbiased news, fast news, trusted news, Google News, AdSense approval"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/about" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/about" />
        <meta
          property="og:title"
          content="About Us - TrendMode News: Fast, Factual & Future-Facing"
        />
        <meta
          property="og:description"
          content="Discover TrendMode News – your trusted source for fast, factual, and future-facing news from India and around the world. Committed to unbiased, high-impact journalism."
        />
        <meta property="og:image" content="https://trendmode.in/og-image.jpg" />{" "}
        {/* Replace with your actual OG image */}
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trendmode.in/about" />
        <meta
          property="twitter:title"
          content="About Us - TrendMode News: Fast, Factual & Future-Facing"
        />
        <meta
          property="twitter:description"
          content="Discover TrendMode News – your trusted source for fast, factual, and future-facing news from India and around the world. Committed to unbiased, high-impact journalism."
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image.jpg"
        />{" "}
        {/* Replace with your actual Twitter image */}
      </Head>

      {/* Main content area with responsive padding and background */}
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased">
        {/* Hero Section: Eye-catching introduction */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              About <span className="text-blue-700">TrendMode News</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We are a next-generation digital media platform committed to
              delivering{" "}
              <span className="font-semibold text-blue-800">
                fast, factual, and future-facing news
              </span>{" "}
              from India and around the world. Our mission is to inform, engage,
              and empower millions with journalism that truly matters.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#our-mission"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Our Mission
              </a>
              <a
                href="#our-values"
                className="inline-flex items-center px-6 py-3  border-2 border-blue-600 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Our Values
              </a>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Core Content Section */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
          <div className="max-w-6xl mx-auto space-y-10 text-gray-800 text-lg leading-relaxed">
            <p>
              <strong>TrendMode News</strong> is an independent digital media
              company dedicated to delivering high-impact journalism across
              various categories — from breaking national headlines to
              insightful global coverage.
            </p>

            <p>
              Founded with a vision to compete with top-tier news platforms,
              TrendMode operates on strict editorial ethics, fast content
              workflows, and full content licensing. We combine powerful
              technology with newsroom expertise to ensure stories are accurate,
              balanced, and timely.
            </p>

            <p>
              Our editorial team comprises experienced journalists and analysts
              who bring sharp analysis, meticulously fact-checked reporting, and
              unbiased news. We publish content in both English and Hindi to
              serve a broad and diverse readership across India and globally.
            </p>

            {/* Key Highlights / Trust Signals */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 text-lg mb-2">
                <span className="font-bold text-blue-800">Our Pillars:</span>{" "}
                Credibility, Speed, Simplicity, and Global-Standard Publishing.
              </p>
              <ul className="list-none p-0 m-0 space-y-1 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Google News Approved
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Fully Mobile Optimized
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Licensed and Original Content
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Commitment to Digital Ethics & Privacy
                </li>
              </ul>
            </div>

            <p>
              We are fully committed to legal compliance, user privacy,
              transparency, and digital ethics. TrendMode News is designed to
              scale like a national media company while maintaining unwavering
              editorial integrity and independence. We believe in building trust
              through reliable reporting and a user-centric approach.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section
          id="our-mission"
          className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              To be the most trusted and fastest-growing digital news platform,
              delivering accurate, insightful, and accessible journalism that
              empowers our readers to make informed decisions and understand the
              world around them.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002 12c0 2.757 1.125 5.228 2.938 7.045l-.004.004-.001.001L12 22l7.062-7.045.001-.001.004-.004A12.007 12.007 0 0022 12c0-2.757-1.125-5.228-2.938-7.045z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accuracy
                </h3>
                <p className="text-gray-600">
                  Upholding the highest standards of factual reporting and
                  verification.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Speed
                </h3>
                <p className="text-gray-600">
                  Delivering breaking news promptly without compromising on
                  quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Impact
                </h3>
                <p className="text-gray-600">
                  Focusing on stories that truly matter and have a tangible
                  effect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          id="our-values"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600 text-center">
                  We uphold the highest ethical standards in all our reporting.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600 text-center">
                  Openness in our processes and sources builds reader trust.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  Leveraging technology to deliver news efficiently and
                  effectively.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 005.356-1.857M17 20h-2m2 0h-2M12 9a4 4 0 110-8 4 4 0 010 8zm0 12a9 9 0 110-18 9 9 0 010 18z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  User-Centric
                </h3>
                <p className="text-gray-600 text-center">
                  Our readers are at the heart of everything we do.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 12H8m4 0h2m4 0h2M7 20.409L2.5 15.909M16.5 20.409L21 15.909M7 3.591L2.5 8.091M16.5 3.591L21 8.091M12 2v20"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Global Perspective
                </h3>
                <p className="text-gray-600 text-center">
                  Covering news with a broad, international viewpoint.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Growth
                </h3>
                <p className="text-gray-600 text-center">
                  Continuously evolving to meet the demands of the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Meet Our <span className="text-blue-600">Founder</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-40 w-40 rounded-full object-cover border-4 border-blue-200 shadow-md"
                  src="https://placehold.co/160x160/cbd5e1/4a5568?text=Md+Rehan+Khan" // Placeholder image for the founder
                  alt="Md Rehan Khan - Founder of TrendMode News"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/160x160/cbd5e1/4a5568?text=Founder";
                  }}
                />
              </div>
              <div className="text-left max-w-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Md Rehan Khan
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Founder & CEO, TrendMode News
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Md Rehan Khan is the visionary behind TrendMode News, driven
                  by a passion for delivering unbiased and timely news in the
                  digital age. With a strong background in media and technology,
                  Rehan founded TrendMode to bridge the gap between traditional
                  journalism and modern digital consumption, ensuring that
                  quality news is accessible to everyone. His commitment to
                  ethical reporting and technological innovation forms the
                  bedrock of TrendMode's operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Legal Links Section */}
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 shadow-inner-top">
          <div className="max-w-6xl mx-auto border-t pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We value your feedback and inquiries. Feel free to reach out to
                us through the following channels:
              </p>
              <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                    ></path>
                  </svg>
                  Email:{" "}
                  <Link
                    href="mailto:info@trendmode.in"
                    className="text-blue-600 font-medium hover:underline ml-1"
                  >
                    info@trendmode.in
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Location: Bihar, India
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Important Links
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                For more information about our policies and terms, please visit:
              </p>
              <ul className="mt-4 space-y-3 text-lg">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 font-medium hover:underline flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
                      ></path>
                    </svg>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-blue-600 font-medium hover:underline flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-blue-600 font-medium hover:underline flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Tailwind CSS keyframes for animations (add to your global CSS or directly in style tag if not using PostCSS) */}
      {/* <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
    </>
  );
}
