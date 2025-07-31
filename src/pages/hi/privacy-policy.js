import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Head component for SEO and metadata */}
      <Head>
        <title>गोपनीयता नीति - TrendMode News</title>
        <meta
          name="description"
          content="TrendMode News की गोपनीयता नीति पढ़ें। जानें कि हम आपकी व्यक्तिगत जानकारी और डेटा को कैसे एकत्र करते हैं, उपयोग करते हैं, सुरक्षित रखते हैं और संभालते हैं, जिसमें कुकीज़ और AdSense का विवरण शामिल है।"
        />
        <meta
          name="keywords"
          content="गोपनीयता नीति, TrendMode, डेटा गोपनीयता, व्यक्तिगत जानकारी, कुकीज़, Google AdSense, डेटा सुरक्षा, उपयोगकर्ता अधिकार, TrendMode.in"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/privacy-policy" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/privacy-policy" />
        <meta property="og:title" content="गोपनीयता नीति - TrendMode News" />
        <meta
          property="og:description"
          content="TrendMode News की गोपनीयता नीति पढ़ें। जानें कि हम आपकी व्यक्तिगत जानकारी और डेटा को कैसे एकत्र करते हैं, उपयोग करते हैं, सुरक्षित रखते हैं और संभालते हैं, जिसमें कुकीज़ और AdSense का विवरण शामिल है।"
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
          content="गोपनीयता नीति - TrendMode News"
        />
        <meta
          property="twitter:description"
          content="TrendMode News की गोपनीयता नीति पढ़ें। जानें कि हम आपकी व्यक्तिगत जानकारी और डेटा को कैसे एकत्र करते हैं, उपयोग करते हैं, सुरक्षित रखते हैं और संभालते हैं, जिसमें कुकीज़ और AdSense का विवरण शामिल है।"
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
            गोपनीयता <span className="text-blue-700">नीति</span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            अंतिम अपडेट: 18 जुलाई, 2025
          </p>

          <section className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p>
              {`यह गोपनीयता नीति बताती है कि TrendMode News ("हम," "हमें," या
              "हमारा") आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित
              करता है जब आप हमारी वेबसाइट,`}
              <Link
                href="https://trendmode.in"
                className="text-blue-600 hover:underline"
              >
                TrendMode.in
              </Link>
              {`( "वेबसाइट") पर जाते हैं। हमारी वेबसाइट का उपयोग करके, आप इस नीति
              के अनुसार जानकारी के संग्रह और उपयोग के लिए सहमत होते हैं।`}
            </p>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                1. हम जो जानकारी एकत्र करते हैं
              </h2>
              <p className="mb-4">
                हम आपको अपनी सेवा प्रदान करने और सुधारने के विभिन्न उद्देश्यों
                के लिए विभिन्न प्रकार की जानकारी एकत्र करते हैं।
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>गैर-व्यक्तिगत डेटा:</strong> जब आप हमारी वेबसाइट पर
                  जाते हैं, तो हम स्वचालित रूप से गैर-व्यक्तिगत डेटा जैसे आपका
                  ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, रेफरिंग यूआरएल,
                  देखे गए पृष्ठ और उपयोग पैटर्न एकत्र कर सकते हैं। यह जानकारी
                  विश्लेषणात्मक उद्देश्यों के लिए एकत्रित की जाती है ताकि यह
                  समझा जा सके कि हमारे उपयोगकर्ता वेबसाइट के साथ कैसे इंटरैक्ट
                  करते हैं और इसकी कार्यक्षमता और सामग्री में सुधार करते हैं।
                </li>
                <li>
                  <strong>{`व्यक्तिगत डेटा (स्वैच्छिक रूप से प्रदान किया गया):`}</strong>{" "}
                  हम केवल वही व्यक्तिगत डेटा एकत्र करते हैं जो आप हमें स्वैच्छिक
                  रूप से प्रदान करते हैं। इसमें शामिल है:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>
                      <strong>संपर्क जानकारी:</strong> यदि आप ईमेल, संपर्क
                      फ़ॉर्म या अन्य संचार चैनलों के माध्यम से हमसे संपर्क करते
                      हैं, तो हम आपका नाम, ईमेल पता और कोई भी अन्य जानकारी एकत्र
                      कर सकते हैं जो आप अपने संदेश में प्रदान करना चुनते हैं। इस
                      जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने और सहायता
                      प्रदान करने के लिए किया जाता है।
                    </li>
                    <li>
                      <strong>सदस्यता जानकारी:</strong> यदि आप हमारे
                      न्यूज़लेटर्स या अलर्ट की सदस्यता लेते हैं, तो हम आपको
                      अपडेट और प्रचार सामग्री भेजने के लिए आपका ईमेल पता एकत्र
                      करेंगे। आप किसी भी समय सदस्यता समाप्त कर सकते हैं।
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                2. हम आपकी जानकारी का उपयोग कैसे करते हैं
              </h2>
              <p className="mb-4">
                हम जो जानकारी एकत्र करते हैं उसका उपयोग निम्नलिखित उद्देश्यों के
                लिए किया जाता है:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>हमारी वेबसाइट प्रदान करने और बनाए रखने के लिए।</li>
                <li>
                  हमारी वेबसाइट की सामग्री और सुविधाओं को बेहतर बनाने, व्यक्तिगत
                  बनाने और विस्तारित करने के लिए।
                </li>
                <li>
                  यह समझने और विश्लेषण करने के लिए कि आप हमारी वेबसाइट का उपयोग
                  कैसे करते हैं।
                </li>
                <li>
                  {`आपसे संवाद करने के लिए, जिसमें आपकी पूछताछ का जवाब देना और
                  न्यूज़लेटर भेजना (यदि सदस्यता ली गई हो) शामिल है।`}
                </li>
                <li>
                  तकनीकी मुद्दों का पता लगाने, रोकने और उनका समाधान करने के लिए।
                </li>
                <li>हमारी वेबसाइट के उपयोग की निगरानी करने के लिए।</li>
                <li>कानूनी दायित्वों का पालन करने के लिए।</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                3. कुकीज़ और ट्रैकिंग टेक्नोलॉजीज
              </h2>
              <p className="mb-4">
                हम अपनी वेबसाइट पर गतिविधि को ट्रैक करने और कुछ जानकारी रखने के
                लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग करते हैं। कुकीज़ कम
                मात्रा में डेटा वाली फाइलें होती हैं जिनमें एक अनाम अद्वितीय
                पहचानकर्ता शामिल हो सकता है।
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>आवश्यक कुकीज़:</strong> ये कुकीज़ वेबसाइट के काम करने
                  के लिए आवश्यक हैं और हमारे सिस्टम में बंद नहीं की जा सकतीं। वे
                  आमतौर पर केवल आपके द्वारा की गई कार्रवाइयों के जवाब में सेट की
                  जाती हैं जो सेवाओं के लिए एक अनुरोध के बराबर होती हैं, जैसे
                  आपकी गोपनीयता प्राथमिकताओं को सेट करना, लॉग इन करना, या फ़ॉर्म
                  भरना।
                </li>
                <li>
                  <strong>विश्लेषणात्मक/प्रदर्शन कुकीज़:</strong> ये कुकीज़ हमें
                  विज़िट और ट्रैफ़िक स्रोतों की गणना करने की अनुमति देती हैं
                  ताकि हम अपनी साइट के प्रदर्शन को माप और सुधार सकें। वे हमें यह
                  जानने में मदद करते हैं कि कौन से पृष्ठ सबसे अधिक और सबसे कम
                  लोकप्रिय हैं और आगंतुक साइट पर कैसे घूमते हैं।
                </li>
                <li>
                  <strong>{`विज्ञापन/लक्षित कुकीज़ (Google AdSense):`}</strong>
                  {` हम अपनी वेबसाइट पर विज्ञापन दिखाने के लिए Google AdSense
                  का उपयोग करते हैं। Google AdSense हमारी वेबसाइट और अन्य
                  वेबसाइटों पर आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाने के
                  लिए कुकीज़ (जैसे DART कुकी) का उपयोग करता है। ये कुकीज़
                  Google और उसके भागीदारों को हमारी साइटों और/या इंटरनेट पर
                  अन्य साइटों पर आपकी विज़िट के आधार पर आपको विज्ञापन दिखाने
                  में सक्षम बनाती हैं।`}
                  <p className="mt-2 text-sm text-gray-600">
                    आप Google Ad और Content Network Privacy Policy पर जाकर DART
                    कुकी के उपयोग से ऑप्ट-आउट कर सकते हैं:{" "}
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
                    आप अपनी ब्राउज़र सेटिंग्स के माध्यम से अपनी कुकी
                    प्राथमिकताओं का प्रबंधन कर सकते हैं। कृपया ध्यान दें कि कुछ
                    कुकीज़ को अक्षम करने से वेबसाइट की कार्यक्षमता प्रभावित हो
                    सकती है।
                  </p>
                </li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                4. डेटा साझाकरण और प्रकटीकरण
              </h2>
              <p className="mb-4">
                हम आपके व्यक्तिगत डेटा को तीसरे पक्ष के साथ बेचते, किराए पर देते
                या व्यापार नहीं करते हैं। हम आपकी जानकारी को निम्नलिखित सीमित
                परिस्थितियों में साझा कर सकते हैं:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>आपकी सहमति से:</strong> जब आप हमें स्पष्ट सहमति देते
                  हैं तो हम आपकी व्यक्तिगत जानकारी का खुलासा कर सकते हैं।
                </li>
                <li>
                  <strong>कानूनी कारणों से:</strong>
                  {`कानून द्वारा ऐसा करने के लिए आवश्यक होने पर या सार्वजनिक
                  प्राधिकारियों (जैसे, एक अदालत या एक सरकारी एजेंसी) द्वारा
                  वैध अनुरोधों के जवाब में हम आपके व्यक्तिगत डेटा का खुलासा
                  कर सकते हैं।`}
                </li>
                <li>
                  <strong>व्यवसाय हस्तांतरण:</strong> विलय, अधिग्रहण, या संपत्ति
                  की बिक्री की स्थिति में, आपका व्यक्तिगत डेटा हस्तांतरित किया
                  जा सकता है। आपके व्यक्तिगत डेटा को हस्तांतरित होने और एक अलग
                  गोपनीयता नीति के अधीन होने से पहले हम सूचना प्रदान करेंगे।
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                5. डेटा सुरक्षा
              </h2>
              <p>
                आपके डेटा की सुरक्षा हमारे लिए महत्वपूर्ण है। हम आपके व्यक्तिगत
                डेटा को अनधिकृत पहुंच, उपयोग, परिवर्तन और प्रकटीकरण से बचाने के
                लिए उचित सुरक्षा उपाय लागू करते हैं। हालांकि, इंटरनेट पर
                ट्रांसमिशन का कोई भी तरीका या इलेक्ट्रॉनिक स्टोरेज का कोई भी
                तरीका 100% सुरक्षित नहीं है। जबकि हम आपके व्यक्तिगत डेटा को
                सुरक्षित रखने के लिए व्यावसायिक रूप से स्वीकार्य साधनों का उपयोग
                करने का प्रयास करते हैं, हम इसकी पूर्ण सुरक्षा की गारंटी नहीं दे
                सकते।
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                6. आपके डेटा सुरक्षा अधिकार
              </h2>
              <p className="mb-4">
                आपके स्थान के आधार पर, आपके पास निम्नलिखित डेटा सुरक्षा अधिकार
                हो सकते हैं:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>पहुंच का अधिकार:</strong> आपको अपने व्यक्तिगत डेटा की
                  प्रतियां मांगने का अधिकार है।
                </li>
                <li>
                  <strong>सुधार का अधिकार:</strong> आपको यह अनुरोध करने का
                  अधिकार है कि हम आपकी किसी भी जानकारी को सही करें जिसे आप गलत
                  मानते हैं या उस जानकारी को पूरा करें जिसे आप अधूरा मानते हैं।
                </li>
                <li>
                  <strong>मिटाने का अधिकार:</strong> आपको यह अनुरोध करने का
                  अधिकार है कि हम कुछ शर्तों के तहत आपके व्यक्तिगत डेटा को मिटा
                  दें।
                </li>
                <li>
                  <strong>प्रसंस्करण को प्रतिबंधित करने का अधिकार:</strong> आपको
                  यह अनुरोध करने का अधिकार है कि हम कुछ शर्तों के तहत आपके
                  व्यक्तिगत डेटा के प्रसंस्करण को प्रतिबंधित करें।
                </li>
                <li>
                  <strong>प्रसंस्करण पर आपत्ति करने का अधिकार:</strong> आपको यह
                  आपत्ति करने का अधिकार है कि हम कुछ शर्तों के तहत आपके
                  व्यक्तिगत डेटा को संसाधित करें।
                </li>
                <li>
                  <strong>डेटा पोर्टेबिलिटी का अधिकार:</strong> आपको यह अनुरोध
                  करने का अधिकार है कि हम उस डेटा को स्थानांतरित करें जिसे हमने
                  किसी अन्य संगठन को, या सीधे आपको, कुछ शर्तों के तहत एकत्र किया
                  है।
                </li>
              </ul>
              <p className="mt-4">
                यदि आप कोई अनुरोध करते हैं, तो हमारे पास आपको जवाब देने के लिए
                एक महीने का समय है। इन अधिकारों में से किसी का भी प्रयोग करने के
                लिए, कृपया नीचे दिए गए ईमेल पते पर हमसे संपर्क करें।
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                7. तीसरे पक्ष के लिंक
              </h2>
              <p>
                {`हमारी वेबसाइट में अन्य वेबसाइटों के लिंक हो सकते हैं जो हमारे
                द्वारा संचालित नहीं होते हैं। यदि आप किसी तीसरे पक्ष के लिंक पर
                क्लिक करते हैं, तो आपको उस तीसरे पक्ष की साइट पर निर्देशित किया
                जाएगा। हम आपको सलाह देते हैं कि आप हर उस साइट की गोपनीयता नीति
                की समीक्षा करें जिस पर आप जाते हैं। हमारा किसी भी तीसरे पक्ष की
                साइटों या सेवाओं की सामग्री, गोपनीयता नीतियों या प्रथाओं पर कोई
                नियंत्रण नहीं है और हम कोई जिम्मेदारी नहीं लेते हैं।`}
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                {`8. बच्चों की गोपनीयता`}
              </h2>
              <p>
                {`हमारी वेबसाइट 13 वर्ष से कम उम्र के बच्चों द्वारा उपयोग के लिए
                नहीं है। हम जानबूझकर 13 वर्ष से कम उम्र के किसी भी व्यक्ति से
                व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र नहीं करते हैं। यदि आप
                एक माता-पिता या अभिभावक हैं और आप जानते हैं कि आपके बच्चे ने हमें
                व्यक्तिगत डेटा प्रदान किया है, तो कृपया हमसे संपर्क करें। यदि हमें
                पता चलता है कि हमने माता-पिता की सहमति के सत्यापन के बिना बच्चों
                से व्यक्तिगत डेटा एकत्र किया है, तो हम अपने सर्वर से उस जानकारी
                को हटाने के लिए कदम उठाते हैं।`}
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                9. इस गोपनीयता नीति में परिवर्तन
              </h2>
              <p>
                {`हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम आपको
                इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके और शीर्ष पर "अंतिम
                अपडेट" तिथि को अपडेट करके किसी भी बदलाव के बारे में सूचित करेंगे।
                आपको किसी भी बदलाव के लिए समय-समय पर इस गोपनीयता नीति की
                समीक्षा करने की सलाह दी जाती है। इस गोपनीयता नीति में परिवर्तन
                इस पृष्ठ पर पोस्ट किए जाने पर प्रभावी होते हैं।`}
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                10. हमसे संपर्क करें
              </h2>
              <p className="mb-4">
                यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो आप
                हमसे संपर्क कर सकते हैं:
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
                  ईमेल:{" "}
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
                  मालिक: एमडी रेहान खान
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
          </section>
        </div>
      </main>

      {/* Tailwind CSS keyframes for animations (add to your global CSS or directly in style tag if not using PostCSS) */}
    </>
  );
}
