// pages/privacy-policy.js
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Head component for SEO and metadata */}
      <Head>
        <title>Privacy Policy - TrendMode News</title>
        <meta
          name="description"
          content="Read the Privacy Policy of TrendMode News. Learn how we collect, use, protect, and handle your personal information and data, including details on cookies and AdSense."
        />
        <meta
          name="keywords"
          content="privacy policy, TrendMode, data privacy, personal information, cookies, Google AdSense, data protection, user rights, TrendMode.in"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/privacy-policy" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - TrendMode News" />
        <meta
          property="og:description"
          content="Read the Privacy Policy of TrendMode News. Learn how we collect, use, protect, and handle your personal information and data, including details on cookies and AdSense."
        />
        <meta
          property="og:image"
          content="https://trendmode.in/og-image-privacy.jpg"
        />{" "}
        {/* Replace with your actual OG image */}
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://trendmode.in/privacy-policy"
        />
        <meta
          property="twitter:title"
          content="Privacy Policy - TrendMode News"
        />
        <meta
          property="twitter:description"
          content="Read the Privacy Policy of TrendMode News. Learn how we collect, use, protect, and handle your personal information and data, including details on cookies and AdSense."
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image-privacy.jpg"
        />{" "}
        {/* Replace with your actual Twitter image */}
      </Head>

      {/* Main content area with responsive padding and background */}
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
            Privacy <span className="text-blue-700">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Last updated: July 18, 2025
          </p>

          <section className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p>
              {`This Privacy Policy describes how TrendMode News ("we," "us," or
              "our") collects, uses, and protects your personal information when
              you visit our website,`}
              <Link
                href="https://trendmode.in"
                className="text-blue-600 hover:underline"
              >
                TrendMode.in
              </Link>
              {`(the "Website"). By using our Website, you agree to the collection
              and use of information in accordance with this policy.`}
            </p>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect various types of information for different purposes
                to provide and improve our service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Non-Personal Data:</strong> When you visit our
                  Website, we may automatically collect non-personal data such
                  as your browser type, operating system, IP address, referring
                  URLs, pages viewed, and usage patterns. This information is
                  aggregated and used for analytical purposes to understand how
                  our users interact with the Website and to improve its
                  functionality and content.
                </li>
                <li>
                  <strong>{`Personal Data (Voluntarily Provided):`}</strong> We
                  only collect personal data that you voluntarily provide to us.
                  This includes:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>
                      <strong>Contact Information:</strong> If you contact us
                      via email, contact forms, or other communication channels,
                      we may collect your name, email address, and any other
                      information you choose to provide in your message. This
                      information is used solely to respond to your inquiries
                      and provide support.
                    </li>
                    <li>
                      <strong>Subscription Information:</strong> If you
                      subscribe to our newsletters or alerts, we will collect
                      your email address to send you updates and promotional
                      content. You can unsubscribe at any time.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                The information we collect is used for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>To provide and maintain our Website.</li>
                <li>
                  To improve, personalize, and expand our Website's content and
                  features.
                </li>
                <li>To understand and analyze how you use our Website.</li>
                <li>
                  {` To communicate with you, including responding to your
                  inquiries and sending newsletters (if subscribed).`}
                </li>
                <li>To detect, prevent, and address technical issues.</li>
                <li>To monitor the usage of our Website.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                3. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track the
                activity on our Website and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the Website to function and cannot be switched
                  off in our systems. They are usually only set in response to
                  actions made by you which amount to a request for services,
                  such as setting your privacy preferences, logging in, or
                  filling in forms.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> These cookies
                  allow us to count visits and traffic sources so we can measure
                  and improve the performance of our site. They help us to know
                  which pages are the most and least popular and see how
                  visitors move around the site.
                </li>
                <li>
                  <strong>
                    {`Advertising/Targeting Cookies (Google AdSense):`}
                  </strong>
                  {` We use Google AdSense to serve advertisements on our Website.
                  Google AdSense uses cookies (such as the DART cookie) to serve
                  ads based on your prior visits to our Website and other
                  websites. These cookies enable Google and its partners to
                  serve ads to you based on your visit to our sites and/or other
                  sites on the Internet.`}
                  <p className="mt-2 text-sm text-gray-600">
                    You may opt out of the use of the DART cookie by visiting
                    the Google Ad and Content Network Privacy Policy at:{" "}
                    <Link
                      href="https://policies.google.com/technologies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://policies.google.com/technologies/ads
                    </Link>
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    You can manage your cookie preferences through your browser
                    settings. Please note that disabling certain cookies may
                    affect the functionality of the Website.
                  </p>
                </li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal data with third
                parties. We may share your information in the following limited
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>With Your Consent:</strong> We may disclose your
                  personal information when you give us explicit consent to do
                  so.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong>
                  {`We may disclose your
                  personal data if required to do so by law or in response to
                  valid requests by public authorities (e.g., a court or a
                  government agency).`}
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or asset sale, your personal data may be
                  transferred. We will provide notice before your personal data
                  is transferred and becomes subject to a different Privacy
                  Policy.
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                5. Data Security
              </h2>
              <p>
                The security of your data is important to us. We implement
                reasonable security measures to protect your personal data from
                unauthorized access, use, alteration, and disclosure. However,
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal data, we
                cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                6. Your Data Protection Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following data
                protection rights:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>The right to access:</strong> You have the right to
                  request copies of your personal data.
                </li>
                <li>
                  <strong>The right to rectification:</strong> You have the
                  right to request that we correct any information you believe
                  is inaccurate or complete information you believe is
                  incomplete.
                </li>
                <li>
                  <strong>The right to erasure:</strong> You have the right to
                  request that we erase your personal data, under certain
                  conditions.
                </li>
                <li>
                  <strong>The right to restrict processing:</strong> You have
                  the right to request that we restrict the processing of your
                  personal data, under certain conditions.
                </li>
                <li>
                  <strong>The right to object to processing:</strong> You have
                  the right to object to our processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  <strong>The right to data portability:</strong> You have the
                  right to request that we transfer the data that we have
                  collected to another organization, or directly to you, under
                  certain conditions.
                </li>
              </ul>
              <p className="mt-4">
                If you make a request, we have one month to respond to you. To
                exercise any of these rights, please contact us at the email
                address provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                7. Third-Party Links
              </h2>
              <p>
                {`Our Website may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit. We have no
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.`}
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                {`8. Children's Privacy`}
              </h2>
              <p>
                {`Our Website is not intended for use by children under the age of
                13. We do not knowingly collect personally identifiable
                information from anyone under the age of 13. If you are a parent
                or guardian and you are aware that your child has provided us
                with personal data, please contact us. If we become aware that
                we have collected personal data from children without
                verification of parental consent, we take steps to remove that
                information from our servers.`}
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                {`We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top. You
                are advised to review this Privacy Policy periodically for any
                changes. Changes to this Privacy Policy are effective when they
                are posted on this page.`}
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, you can
                contact us:
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
                  Owner: Md Rehan Khan
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
                  Location: India
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Tailwind CSS keyframes for animations (add to your global CSS or directly in style tag if not using PostCSS) */}
    </>
  );
}
