import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Head component for SEO and metadata */}
      <Head>
        <title>संपर्क करें - TrendMode News: संपर्क में रहें</title>
        <meta
          name="description"
          content="प्रश्नों, प्रतिक्रिया, मीडिया साझेदारी या सहायता के लिए TrendMode News से संपर्क करें। ईमेल के माध्यम से संपर्क करें या बिहार, भारत में हमारे कार्यालय पर आएं।"
        />
        <meta
          name="keywords"
          content="TrendMode संपर्क, समाचार संपर्क, मीडिया पूछताछ, प्रतिक्रिया, समर्थन, बिहार भारत, TrendMode ईमेल"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://trendmode.in/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendmode.in/contact" />
        <meta
          property="og:title"
          content="संपर्क करें - TrendMode News: संपर्क में रहें"
        />
        <meta
          property="og:description"
          content="प्रश्नों, प्रतिक्रिया, मीडिया साझेदारी या सहायता के लिए TrendMode News से संपर्क करें। ईमेल के माध्यम से संपर्क करें या बिहार, भारत में हमारे कार्यालय पर आएं।"
        />
        <meta
          property="og:image"
          content="https://trendmode.in/og-image-contact.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trendmode.in/contact" />
        <meta
          property="twitter:title"
          content="संपर्क करें - TrendMode News: संपर्क में रहें"
        />
        <meta
          property="twitter:description"
          content="प्रश्नों, प्रतिक्रिया, मीडिया साझेदारी या सहायता के लिए TrendMode News से संपर्क करें। ईमेल के माध्यम से संपर्क करें या बिहार, भारत में हमारे कार्यालय पर आएं।"
        />
        <meta
          property="twitter:image"
          content="https://trendmode.in/twitter-image-contact.jpg"
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased">
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              संपर्क <span className="text-blue-700">करें</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              {`हम आपसे सुनना पसंद करेंगे! चाहे आपके पास कोई प्रतिक्रिया हो,
              पूछताछ हो या मीडिया साझेदारी में रुचि हो, हमारी टीम आपकी सहायता
              के लिए तैयार है।`}
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                संदेश भेजें
              </Link>
              <Link
                href="#contact-info"
                className="inline-flex items-center px-6 py-3  border-2 border-blue-600 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                हमारे विवरण
              </Link>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        <section
          id="contact-info"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              हमारे <span className="text-blue-600">संपर्क विवरण</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
                  हमें ईमेल करें
                </h3>
                <p className="text-gray-700">
                  सामान्य पूछताछ और सहायता के लिए।
                </p>
                <Link
                  href="mailto:info@trendmode.in"
                  className="text-blue-600 font-medium hover:underline mt-2"
                >
                  info@trendmode.in
                </Link>
              </div>

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
                  हमारा स्थान
                </h3>
                <p className="text-gray-700">हमारा मुख्य कार्यालय स्थित है:</p>
                <p className="text-gray-800 font-medium mt-2">भारत</p>
              </div>

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
                  कार्य समय
                </h3>
                <p className="text-gray-700">हम उपलब्ध हैं:</p>
                <p className="text-gray-800 font-medium mt-2">
                  सोमवार से शनिवार
                </p>
                <p className="text-gray-800 font-medium">
                  सुबह 9 बजे से शाम 7 बजे IST
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-form"
          className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
              हमें <span className="text-blue-600">संदेश भेजें</span>
            </h2>
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  आपका नाम
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="राम कुमार"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  आपकी ईमेल
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="aap@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  विषय
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="पूछताछ के बारे में..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  आपका संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="यहां अपना संदेश लिखें..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  संदेश भेजें
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
