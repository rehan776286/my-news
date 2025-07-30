import Head from "next/head"; // Next.js Head कंपोनेंट के लिए सही आयात
import Link from "next/link";
import React from "react"; // JSX के लिए अभी भी React की आवश्यकता है

export default function AboutPage() {
  return (
    <>
      {/* SEO और मेटाडेटा के लिए हेड कंपोनेंट - Next.js द्वारा सर्वर-साइड प्रस्तुत किया गया */}
      <Head>
        <title>
          हमारे बारे में - TrendMode News: तेज़, तथ्यात्मक और भविष्य-उन्मुख
        </title>
        <meta
          name="description"
          content="TrendMode News खोजें – भारत और दुनिया भर से तेज़, तथ्यात्मक और भविष्य-उन्मुख समाचारों के लिए आपका विश्वसनीय स्रोत। निष्पक्ष, उच्च-प्रभाव वाले पत्रकारिता के लिए प्रतिबद्ध।"
        />
        <meta
          name="keywords"
          content="TrendMode, समाचार, भारत समाचार, वैश्विक समाचार, डिजिटल मीडिया, पत्रकारिता, तथ्यात्मक समाचार, निष्पक्ष समाचार, तेज़ समाचार, विश्वसनीय समाचार, Google समाचार, AdSense अनुमोदन"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/about" />
        {/* ओपन ग्राफ / फेसबुक */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/about" />
        <meta
          property="og:title"
          content="हमारे बारे में - TrendMode News: तेज़, तथ्यात्मक और भविष्य-उन्मुख"
        />
        <meta
          property="og:description"
          content="TrendMode News खोजें – भारत और दुनिया भर से तेज़, तथ्यात्मक और भविष्य-उन्मुख समाचारों के लिए आपका विश्वसनीय स्रोत। निष्पक्ष, उच्च-प्रभाव वाले पत्रकारिता के लिए प्रतिबद्ध।"
        />
        <meta property="og:image" content="https://trendmode.in/og-image.jpg" />{" "}
        {/* अपनी वास्तविक OG छवि से बदलें */}
        {/* ट्विटर */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trendmode.in/about" />
        <meta
          property="twitter:title"
          content="हमारे बारे में - TrendMode News: तेज़, तथ्यात्मक और भविष्य-उन्मुख"
        />
        <meta
          property="twitter:description"
          content="TrendMode News खोजें – भारत और दुनिया भर से तेज़, तथ्यात्मक और भविष्य-उन्मुख समाचारों के लिए आपका विश्वसनीय स्रोत। निष्पक्ष, उच्च-प्रभाव वाले पत्रकारिता के लिए प्रतिबद्ध।"
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image.jpg"
        />{" "}
        {/* अपनी वास्तविक ट्विटर छवि से बदलें */}
      </Head>

      {/* प्रतिक्रियाशील पैडिंग और पृष्ठभूमि के साथ मुख्य सामग्री क्षेत्र */}
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased">
        {/* हीरो सेक्शन: आकर्षक परिचय */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              <span className="text-blue-700">Trendmode news</span> के बारे में
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              हम एक अगली पीढ़ी का डिजिटल मीडिया प्लेटफॉर्म हैं जो भारत और दुनिया
              भर से{" "}
              <span className="font-semibold text-blue-800">
                तेज़, तथ्यात्मक और भविष्य-उन्मुख समाचार
              </span>
              प्रदान करने के लिए प्रतिबद्ध है। हमारा मिशन पत्रकारिता के साथ
              लाखों लोगों को सूचित करना, संलग्न करना और सशक्त बनाना है जो वास्तव
              में मायने रखती है।
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#our-mission"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                हमारा मिशन
              </a>
              <a
                href="#our-values"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                हमारे मूल्य
              </a>
            </div>
          </div>
          {/* सजावटी पृष्ठभूमि तत्व */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* मुख्य सामग्री अनुभाग */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
          <div className="max-w-6xl mx-auto space-y-10 text-gray-800 text-lg leading-relaxed">
            <p>
              <strong>ट्रेंडमोड न्यूज़</strong> एक स्वतंत्र डिजिटल मीडिया कंपनी
              है जो विभिन्न श्रेणियों में उच्च-प्रभाव वाली पत्रकारिता प्रदान
              करने के लिए समर्पित है - ब्रेकिंग राष्ट्रीय सुर्खियों से लेकर गहन
              वैश्विक कवरेज तक।
            </p>

            <p>
              शीर्ष-स्तरीय समाचार प्लेटफार्मों के साथ प्रतिस्पर्धा करने की
              दृष्टि से स्थापित, ट्रेंडमोड सख्त संपादकीय नैतिकता, तेज़ सामग्री
              वर्कफ़्लो और पूर्ण सामग्री लाइसेंसिंग पर काम करता है। हम यह
              सुनिश्चित करने के लिए शक्तिशाली तकनीक को न्यूज़ रूम विशेषज्ञता के
              साथ जोड़ते हैं कि कहानियाँ सटीक, संतुलित और समय पर हों।
            </p>

            <p>
              हमारी संपादकीय टीम में अनुभवी पत्रकार और विश्लेषक शामिल हैं जो
              तेज़ विश्लेषण, सावधानीपूर्वक तथ्य-जाँच रिपोर्टिंग और निष्पक्ष
              समाचार लाते हैं। हम भारत और विश्व स्तर पर एक व्यापक और विविध
              पाठकों की सेवा के लिए अंग्रेजी और हिंदी दोनों में सामग्री प्रकाशित
              करते हैं।
            </p>

            {/* मुख्य हाइलाइट्स / ट्रस्ट सिग्नल */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 text-lg mb-2">
                <span className="font-bold text-blue-800">हमारे स्तंभ:</span>{" "}
                विश्वसनीयता, गति, सरलता और वैश्विक-मानक प्रकाशन।
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
                  Google समाचार द्वारा अनुमोदित
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
                  पूरी तरह से मोबाइल अनुकूलित
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
                  लाइसेंसशुदा और मूल सामग्री
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
                  डिजिटल नैतिकता और गोपनीयता के प्रति प्रतिबद्धता
                </li>
              </ul>
            </div>

            <p>
              हम कानूनी अनुपालन, उपयोगकर्ता गोपनीयता, पारदर्शिता और डिजिटल
              नैतिकता के लिए पूरी तरह से प्रतिबद्ध हैं। ट्रेंडमोड न्यूज़ को एक
              राष्ट्रीय मीडिया कंपनी की तरह स्केल करने के लिए डिज़ाइन किया गया
              है, जबकि अविचल संपादकीय अखंडता और स्वतंत्रता बनाए रखी गई है। हम
              विश्वसनीय रिपोर्टिंग और उपयोगकर्ता-केंद्रित दृष्टिकोण के माध्यम से
              विश्वास बनाने में विश्वास करते हैं।
            </p>
          </div>
        </section>

        {/* हमारा मिशन अनुभाग */}
        <section
          id="our-mission"
          className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              हमारा <span className="text-blue-600">मिशन</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              सबसे विश्वसनीय और सबसे तेज़-बढ़ता डिजिटल समाचार प्लेटफॉर्म बनना,
              सटीक, अंतर्दृष्टिपूर्ण और सुलभ पत्रकारिता प्रदान करना जो हमारे
              पाठकों को सूचित निर्णय लेने और अपने आसपास की दुनिया को समझने में
              सशक्त करता है।
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
                  सटीकता
                </h3>
                <p className="text-gray-600">
                  तथ्यात्मक रिपोर्टिंग और सत्यापन के उच्चतम मानकों को बनाए रखना।
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
                  गति
                </h3>
                <p className="text-gray-600">
                  गुणवत्ता से समझौता किए बिना तुरंत ब्रेकिंग न्यूज़ प्रदान करना।
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
                  प्रभाव
                </h3>
                <p className="text-gray-600">
                  उन कहानियों पर ध्यान केंद्रित करना जो वास्तव में मायने रखती
                  हैं और जिनका मूर्त प्रभाव होता है।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* हमारे मूल्य अनुभाग */}
        <section
          id="our-values"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              हमारे <span className="text-blue-600">मूल्य</span>
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
                  अखंडता
                </h3>
                <p className="text-gray-600 text-center">
                  हम अपनी सभी रिपोर्टिंग में उच्चतम नैतिक मानकों को बनाए रखते
                  हैं।
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
                  पारदर्शिता
                </h3>
                <p className="text-gray-600 text-center">
                  हमारी प्रक्रियाओं और स्रोतों में खुलापन पाठक विश्वास बनाता है।
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
                  नवाचार
                </h3>
                <p className="text-gray-600 text-center">
                  कुशलतापूर्वक और प्रभावी ढंग से समाचार प्रदान करने के लिए
                  प्रौद्योगिकी का लाभ उठाना।
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
                  उपयोगकर्ता-केंद्रित
                </h3>
                <p className="text-gray-600 text-center">
                  हमारे पाठक वह सब कुछ हैं जो हम करते हैं।
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
                  वैश्विक परिप्रेक्ष्य
                </h3>
                <p className="text-gray-600 text-center">
                  एक व्यापक, अंतरराष्ट्रीय दृष्टिकोण के साथ समाचारों को कवर
                  करना।
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
                  विकास
                </h3>
                <p className="text-gray-600 text-center">
                  डिजिटल युग की मांगों को पूरा करने के लिए लगातार विकसित होना।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* संपर्क और कानूनी लिंक अनुभाग */}
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 shadow-inner-top">
          <div className="max-w-6xl mx-auto border-t pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                संपर्क करें
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                हम आपकी प्रतिक्रिया और पूछताछ को महत्व देते हैं। निम्नलिखित
                चैनलों के माध्यम से हमसे संपर्क करने में संकोच न करें:
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
                  ईमेल:{" "}
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
                  स्थान: भारत
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                महत्वपूर्ण लिंक
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                हमारी नीतियों और शर्तों के बारे में अधिक जानकारी के लिए, कृपया
                यहां जाएं:
              </p>
              <ul className="mt-4 space-y-3 text-lg">
                <li>
                  <Link
                    href="/hi/privacy-policy"
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
                    गोपनीयता नीति
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hi/terms-of-service"
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
                    सेवा की शर्तें
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hi/disclaimer"
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
                    अस्वीकरण
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
