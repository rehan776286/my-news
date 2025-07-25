import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function TermsPage() {
  return (
    <>
      {/* Head component for SEO and metadata */}
      <Head>
        <title>Terms & Conditions - TrendMode News</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for using TrendMode.in. Understand our policies on content, user conduct, intellectual property, disclaimers, and more."
        />
        <meta
          name="keywords"
          content="terms and conditions, terms of service, TrendMode, website terms, user agreement, legal terms, content policy, intellectual property, disclaimer"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://trendmode.in/terms-of-service"
        />{" "}
        {/* Changed to /terms-of-service for clarity */}
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://trendmode.in/terms-of-service"
        />
        <meta
          property="og:title"
          content="Terms & Conditions - TrendMode News"
        />
        <meta
          property="og:description"
          content="Read the Terms & Conditions for using TrendMode.in. Understand our policies on content, user conduct, intellectual property, disclaimers, and more."
        />
        <meta
          property="og:image"
          content="https://trendmode.in/og-image-terms.jpg"
        />{" "}
        {/* Replace with your actual OG image */}
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://trendmode.in/terms-of-service"
        />
        <meta
          property="twitter:title"
          content="Terms & Conditions - TrendMode News"
        />
        <meta
          property="twitter:description"
          content="Read the Terms & Conditions for using TrendMode.in. Understand our policies on content, user conduct, intellectual property, disclaimers, and more."
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image-terms.jpg"
        />{" "}
        {/* Replace with your actual Twitter image */}
      </Head>

      {/* Main content area with responsive padding and background */}
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
            Terms & <span className="text-blue-700">Conditions</span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Last updated: July 18, 2025
          </p>

          <section className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p>
              {`Welcome to TrendMode News (`}
              <Link
                href="https://trendmode.in"
                className="text-blue-600 hover:underline"
              >
                TrendMode.in
              </Link>
              {` 
              ). These Terms and Conditions ("Terms") govern your access to and
              use of our website and services. By accessing or using the
              Website, you agree to be bound by these Terms. If you disagree
              with any part of the terms, then you may not access the Website.`}
            </p>

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using TrendMode.in, you acknowledge that you
                have read, understood, and agree to be bound by these Terms and
                Conditions, as well as our Privacy Policy. These Terms apply to
                all visitors, users, and others who access or use the Website.
              </p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                2. Content
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  All content provided on TrendMode.in is for general
                  informational purposes only. While we strive for accuracy and
                  timeliness, we make no representations or warranties of any
                  kind, express or implied, about the completeness, accuracy,
                  reliability, suitability, or availability with respect to the
                  Website or the information, products, services, or related
                  graphics contained on the Website for any purpose.
                </li>
                <li>
                  The content on this Website may be updated, changed, or
                  removed without prior notice.
                </li>
                <li>
                  TrendMode News reserves the right to modify, suspend, or
                  discontinue any aspect of the Website at any time, including
                  the availability of any features, databases, or content.
                </li>
              </ul>
            </div>

            {/* User Conduct */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                3. User Conduct
              </h2>
              <p className="mb-4">
                As a user of TrendMode.in, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Use the Website for any unlawful purpose or in any way that
                  could harm, disable, overburden, or impair the Website.
                </li>
                <li>
                  Reproduce, duplicate, copy, sell, resell, or exploit any
                  portion of the Website without express written permission from
                  TrendMode News.
                </li>
                <li>
                  Post or transmit any material that is defamatory, obscene,
                  indecent, abusive, offensive, harassing, violent, hateful,
                  inflammatory, or otherwise objectionable.
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use
                  or enjoyment of the Website, or which, as determined by us,
                  may harm TrendMode News or users of the Website or expose them
                  to liability.
                </li>
                <li>
                  Submit comments or any other user-generated content that
                  violates our content policy, which may be moderated or removed
                  at our sole discretion.
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                4. Intellectual Property
              </h2>
              <p>
                The Website and its original content, features, and
                functionality are and will remain the exclusive property of
                TrendMode News and its licensors. The Website is protected by
                copyright, trademark, and other laws of both India and foreign
                countries. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written
                consent of TrendMode News.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                5. Links to Other Websites
              </h2>
              <p>
                Our Website may contain links to third-party websites or
                services that are not owned or controlled by TrendMode News. We
                have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party
                websites or services. You further acknowledge and agree that
                TrendMode News shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with the use of or reliance on any
                such content, goods, or services available on or through any
                such websites or services. We strongly advise you to read the
                terms and conditions and privacy policies of any third-party
                websites or services that you visit.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                6. Disclaimer of Warranties
              </h2>
              <p>
                {`Your use of the Website is at your sole risk. The Website is
                provided on an "AS IS" and "AS AVAILABLE" basis. The Website is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.`}
              </p>
              <p className="mt-2">
                {`
                TrendMode News does not warrant that a) the Website will
                function uninterrupted, secure or available at any particular
                time or location; b) any errors or defects will be corrected; c)
                the Website is free of viruses or other harmful components; or
                d) the results of using the Website will meet your requirements.`}
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                7. Limitation of Liability
              </h2>
              <p>
                {` In no event shall TrendMode News, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Website; (ii) any conduct or content of any third party on the
                Website; (iii) any content obtained from the Website; and (iv)
                unauthorized access, use, or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence), or any other legal theory, whether or not we have
                been informed of the possibility of such damage, and even if a
                remedy set forth herein is found to have failed of its essential
                purpose.`}
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                8. Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of Bihar, India, without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of
                these Terms will not be considered a waiver of those rights. If
                any provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these
                Terms will remain in effect.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                9. Changes to These Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or
                use our Website after those revisions become effective, you
                agree to be bound by the revised terms. If you do not agree to
                the new terms, please stop using the Website.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none p-0 m-0 space-y-2">
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
                  <a
                    href="mailto:info@trendmode.in"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    info@trendmode.in
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
