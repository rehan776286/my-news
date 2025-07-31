import Head from "next/head";
import React from "react";

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>आधिकारिक अस्वीकरण - TrendMode News: आपका विश्वसनीय स्रोत</title>
        <meta
          name="description"
          content="TrendMode News के लिए सटीकता, सामग्री के उपयोग, बाहरी लिंक और दायित्व की सीमा के संबंध में महत्वपूर्ण अस्वीकरण। हमारे पत्रकारिता सिद्धांतों को समझने के लिए आपकी मार्गदर्शिका।"
        />
        <meta
          name="keywords"
          content="ट्रेंडमोड न्यूज़ अस्वीकरण, कानूनी नोटिस, सामग्री सटीकता, जानकारी विश्वसनीयता, दायित्व छूट, बाहरी लिंक, बौद्धिक संपदा, ट्रेंडमोड से संपर्क करें"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/disclaimer" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/disclaimer" />
        <meta
          property="og:title"
          content="आधिकारिक अस्वीकरण - TrendMode News: आपका विश्वसनीय स्रोत"
        />
        <meta
          property="og:description"
          content="TrendMode News के लिए सटीकता, सामग्री के उपयोग, बाहरी लिंक और दायित्व की सीमा के संबंध में महत्वपूर्ण अस्वीकरण। हमारे पत्रकारिता सिद्धांतों को समझने के लिए आपकी मार्गदर्शिका।"
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
          content="आधिकारिक अस्वीकरण - TrendMode News: आपका विश्वसनीय स्रोत"
        />
        <meta
          property="twitter:description"
          content="TrendMode News के लिए सटीकता, सामग्री के उपयोग, बाहरी लिंक और दायित्व की सीमा के संबंध में महत्वपूर्ण अस्वीकरण। हमारे पत्रकारिता सिद्धांतों को समझने के लिए आपकी मार्गदर्शिका।"
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
              महत्वपूर्ण <span className="text-orange-700">अस्वीकरण</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              पारदर्शिता और विश्वास TrendMode News के मूल में हैं। यह पृष्ठ
              हमारी वेबसाइट के उपयोग और प्रदान की गई जानकारी को नियंत्रित करने
              वाले नियमों और शर्तों को रेखांकित करता है।
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
                प्रदान की गई जानकारी
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode.in पर सामग्री **केवल सामान्य जानकारी के उद्देश्य से**
              प्रदान की जाती है। जबकि हम सटीकता और समयबद्धता के लिए प्रयास करते
              हैं, हम प्रकाशित सभी जानकारी की पूर्णता, विश्वसनीयता या पूर्ण
              सटीकता की गारंटी नहीं देते हैं।
            </p>
            <p className="leading-relaxed text-gray-700">
              प्रस्तुत समाचार लेख, विश्लेषण और राय प्रकाशन के समय के ज्ञान की
              स्थिति को दर्शाते हैं और तेजी से विकास के कारण पुराने हो सकते हैं।
              हम पाठकों को यहां मिली सामग्री के आधार पर कोई भी निर्णय लेने से
              पहले जानकारी को स्वतंत्र रूप से सत्यापित करने के लिए प्रोत्साहित
              करते हैं।
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
                स्रोत और संपादकीय मानक
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News विभिन्न प्रतिष्ठित राष्ट्रीय और अंतर्राष्ट्रीय
              समाचार एजेंसियों से सामग्री प्राप्त करता है, जिसमें लाइसेंस
              प्राप्त भागीदार शामिल हैं, और एक आंतरिक संपादकीय समीक्षा प्रक्रिया
              का उपयोग करता है...
            </p>

            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News वैध सामग्री सिंडिकेशन लाइसेंस समझौते के तहत **IANS
              (इंडो-एशियन न्यूज़ सर्विस)** के साथ समाचार लेख और चित्र प्रकाशित
              करता है। ऐसी सभी लाइसेंस प्राप्त सामग्री **IANS की बौद्धिक संपदा**
              बनी हुई है, और किसी भी अनधिकृत पुन: उपयोग, प्रजनन या वितरण को
              कड़ाई से प्रतिबंधित किया गया है। हम मूल संपादकीय सामग्री को नहीं
              बदलते हैं और जहां लागू हो, IANS को उचित श्रेय सुनिश्चित करते हैं।
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
                दायित्व की सीमा
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              TrendMode News, इसके सहयोगी, कर्मचारी, या भागीदार इस वेबसाइट तक
              आपकी पहुंच, उपयोग या इसका उपयोग करने में असमर्थता या इस पर किसी भी
              जानकारी से उत्पन्न होने वाले किसी भी प्रत्यक्ष, अप्रत्यक्ष,
              आकस्मिक, परिणामी या दंडात्मक नुकसान के लिए उत्तरदायी नहीं होंगे।
            </p>
            <p className="leading-relaxed text-gray-700">
              वेबसाइट का आपका उपयोग **पूरी तरह से आपके अपने जोखिम पर** है। हम
              सभी वारंटी, व्यक्त या निहित, जिसमें व्यापारिकता और किसी विशेष
              उद्देश्य के लिए फिटनेस की निहित वारंटी शामिल हैं, लेकिन इन्हीं तक
              सीमित नहीं हैं, को अस्वीकार करते हैं।
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
                बाहरी लिंक
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              हमारी वेबसाइट में बाहरी वेबसाइटों के लिंक हो सकते हैं जो TrendMode
              News द्वारा प्रदान या बनाए नहीं जाते हैं या किसी भी तरह से संबद्ध
              नहीं हैं। कृपया ध्यान दें कि TrendMode News इन बाहरी वेबसाइटों पर
              किसी भी जानकारी की सटीकता, प्रासंगिकता, समयबद्धता या पूर्णता की
              गारंटी नहीं देता है। हम ऐसी वेबसाइटों की गोपनीयता प्रथाओं या
              सामग्री के लिए जिम्मेदार नहीं हैं।
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
                बौद्धिक संपदा
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              TrendMode.in पर प्रदर्शित सभी सामग्री, ट्रेडमार्क, लोगो और बौद्धिक
              संपदा TrendMode News या इसके संबंधित लाइसेंसकर्ताओं की संपत्ति
              हैं। इस साइट से किसी भी सामग्री का अनधिकृत प्रजनन या वितरण कड़ाई
              से प्रतिबंधित है। लाइसेंसिंग पूछताछ के लिए, कृपया हमसे संपर्क
              करें।
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
                हमसे संपर्क करें
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              यदि आपके पास इस अस्वीकरण या TrendMode.in पर किसी भी सामग्री के
              संबंध में कोई प्रश्न, स्पष्टीकरण या अनुरोध हैं, तो कृपया हमसे यहां
              संपर्क करें:{" "}
              <a
                href="mailto:info@trendmode.in"
                className="text-blue-600 hover:underline font-medium"
              >
                info@trendmode.in
              </a>
              । हम आपकी चिंताओं को तुरंत दूर करने के लिए प्रतिबद्ध हैं।
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
