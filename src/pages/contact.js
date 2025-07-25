import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Head component for SEO and metadata */}
      <Head>
        <title>Contact Us - TrendMode News: Get In Touch</title>
        <meta
          name="description"
          content="Contact TrendMode News for inquiries, feedback, media partnerships, or support. Reach out via email or visit our office in Bihar, India."
        />
        <meta
          name="keywords"
          content="TrendMode contact, news contact, media inquiries, feedback, support, Bihar India, TrendMode email"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/contact" />
        <meta
          property="og:title"
          content="Contact Us - TrendMode News: Get In Touch"
        />
        <meta
          property="og:description"
          content="Contact TrendMode News for inquiries, feedback, media partnerships, or support. Reach out via email or visit our office in Bihar, India."
        />
        <meta
          property="og:image"
          content="https://trendmode.in/og-image-contact.jpg"
        />{" "}
        {/* Replace with your actual OG image */}
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trendmode.in/contact" />
        <meta
          property="twitter:title"
          content="Contact Us - TrendMode News: Get In Touch"
        />
        <meta
          property="twitter:description"
          content="Contact TrendMode News for inquiries, feedback, media partnerships, or support. Reach out via email or visit our office in Bihar, India."
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image-contact.jpg"
        />{" "}
        {/* Replace with your actual Twitter image */}
      </Head>

      {/* Main content area with responsive padding and background */}
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased">
        {/* Hero Section: Eye-catching introduction */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Get In <span className="text-blue-700">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We'd love to hear from you! Whether you have feedback, inquiries,
              or are interested in media partnerships, our team is ready to
              assist you.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send a Message
              </Link>
              <Link
                href="#contact-info"
                className="inline-flex items-center px-6 py-3  border-2 border-blue-600 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Our Details
              </Link>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section
          id="contact-info"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-600">Contact Details</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Email */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <svg
                  className="w-12 h-12 text-blue-600 mb-4"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-700">
                  For general inquiries and support.
                </p>
                <Link
                  href="mailto:info@trendmode.in"
                  className="text-blue-600 font-medium hover:underline mt-2"
                >
                  info@trendmode.in
                </Link>
              </div>

              {/* Location */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <svg
                  className="w-12 h-12 text-blue-600 mb-4"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Our Location
                </h3>
                <p className="text-gray-700">Our main office is located in:</p>
                <p className="text-gray-800 font-medium mt-2">India</p>
              </div>

              {/* Working Hours */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <svg
                  className="w-12 h-12 text-blue-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Working Hours
                </h3>
                <p className="text-gray-700">We are available during:</p>
                <p className="text-gray-800 font-medium mt-2">
                  Monday to Saturday
                </p>
                <p className="text-gray-800 font-medium">9 AM to 7 PM IST</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact-form"
          className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
              Send Us a <span className="text-blue-600">Message</span>
            </h2>
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Inquiry about..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Location Map Section (Placeholder) */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Find Us on the <span className="text-blue-600">Map</span>
            </h2>
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {/* This is a placeholder for an embedded map or a static image */}
              <img
                src="https://placehold.co/1200x400/e0e7ff/3f51b5?text=Map+Placeholder+-+Bihar,+India"
                alt="Map showing TrendMode News location in Bihar, India"
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1200x400/e0e7ff/3f51b5?text=Map+Unavailable";
                }}
              />
              <p className="p-4 text-gray-600 text-lg">
                While we don't display a live map here for performance, you can
                easily find us on Google Maps by searching for "Bihar, India".
                <br />
                <a
                  href="https://www.google.com/maps/search/Bihar,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline mt-2 inline-block"
                >
                  Open in Google Maps
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Tailwind CSS keyframes for animations (add to your global CSS or directly in style tag if not using PostCSS) */}
    </>
  );
}
