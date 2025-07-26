import Head from "next/head";
import React from "react";

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>
          Official Disclaimer - TrendMode News: Your Trustworthy Source
        </title>
        <meta
          name="description"
          content="Important disclaimer for TrendMode News regarding accuracy, content usage, external links, and limitation of liability. Your guide to understanding our journalistic principles."
        />
        <meta
          name="keywords"
          content="TrendMode News disclaimer, legal notice, content accuracy, information reliability, liability waiver, external links, intellectual property, contact TrendMode"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/disclaimer" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/disclaimer" />
        <meta
          property="og:title"
          content="Official Disclaimer - TrendMode News: Your Trustworthy Source"
        />
        <meta
          property="og:description"
          content="Important disclaimer for TrendMode News regarding accuracy, content usage, external links, and limitation of liability. Your guide to understanding our journalistic principles."
        />
        <meta property="og:image" content="https://trendmode.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://trendmode.in/disclaimer"
        />
        <meta
          property="twitter:title"
          content="Official Disclaimer - TrendMode News: Your Trustworthy Source"
        />
        <meta
          property="twitter:description"
          content="Important disclaimer for TrendMode News regarding accuracy, content usage, external links, and limitation of liability. Your guide to understanding our journalistic principles."
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image.jpg"
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section for Disclaimer - similar to About page hero, but concise */}
        <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-xl shadow-lg mb-12">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Important <span className="text-orange-700">Disclaimer</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Transparency and trust are at the core of TrendMode News. This
              page outlines the terms and conditions governing the use of our
              website and the information provided.
            </p>
          </div>
          {/* Decorative background elements (adjusted colors) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Main Content Sections - broken down with titles and icons for better UI */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section: General Information */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">
                Information Provided
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              The content on TrendMode.in is provided for **general
              informational purposes only**. While we strive for accuracy and
              timeliness, we do not guarantee the completeness, reliability, or
              absolute accuracy of all information published.
            </p>
            <p className="leading-relaxed text-gray-700">
              News articles, analyses, and opinions presented reflect the state
              of knowledge at the time of publication and may become outdated
              due to rapid developments. We encourage readers to verify
              information independently before making any decisions based on
              content found here.
            </p>
          </section>

          {/* Section: Sources and Editorial Process */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-green-600 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">
                Sources & Editorial Standards
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News sources content from a variety of reputable
              national and international news agencies, including licensed
              partners, and employs an internal editorial review process...
            </p>

            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News publishes news articles and images under a valid
              content syndication license agreement with{" "}
              <strong>IANS (Indo-Asian News Service)</strong>. All such licensed
              content remains the <strong>intellectual property of IANS</strong>
              , and any unauthorized reuse, reproduction, or distribution is
              strictly prohibited. We do not alter core editorial content and
              ensure appropriate attribution to IANS where applicable.
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-red-600 mr-3 flex-shrink-0"
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Limitation of Liability
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News, its affiliates, employees, or partners will not be
              held liable for any direct, indirect, incidental, consequential,
              or punitive damages arising out of your access to, use of, or
              inability to use this website or any information on it.
            </p>
            <p className="leading-relaxed text-gray-700">
              Your use of the website is **solely at your own risk**. We
              disclaim all warranties, express or implied, including but not
              limited to, implied warranties of merchantability and fitness for
              a particular purpose.
            </p>
          </section>

          {/* Section: External Links */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-purple-600 mr-3 flex-shrink-0"
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
              <h2 className="text-2xl font-semibold text-gray-900">
                External Links
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              Our website may contain links to external websites that are not
              provided or maintained by or in any way affiliated with TrendMode
              News. Please note that TrendMode News does not guarantee the
              accuracy, relevance, timeliness, or completeness of any
              information on these external websites. We are not responsible for
              the privacy practices or the content of such websites.
            </p>
          </section>

          {/* Section: Intellectual Property */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0"
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Intellectual Property
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              All content, trademarks, logos, and intellectual property
              displayed on TrendMode.in are the property of TrendMode News or
              its respective licensors. Unauthorized reproduction or
              distribution of any material from this site is strictly
              prohibited. For licensing inquiries, please contact us.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600 mr-3 flex-shrink-0"
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              If you have any questions, clarifications, or requests regarding
              this disclaimer or any content on TrendMode.in, please reach out
              to us at:{" "}
              <a
                href="mailto:info@trendmode.in"
                className="text-blue-600 hover:underline font-medium"
              >
                info@trendmode.in
              </a>
              . We are committed to addressing your concerns promptly.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
