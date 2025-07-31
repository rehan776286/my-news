// components/LayoutHi.js

import Head from "next/head";
import Header from "../components/header";
import Navbar from "../components/navbar";
import HiFooter from "./hiFooter"; // ✅ Hindi-specific footer

const LayoutHi = ({
  children,
  pageType = "article",
  title = "TrendMode हिंदी - ताज़ा खबरें, ब्रेकिंग न्यूज़ और इनसाइट्स",
  description = "ताज़ा समाचार, प्रमुख सुर्खियाँ, राजनीति, व्यापार, तकनीक, मनोरंजन और अधिक पर गहन रिपोर्टिंग प्राप्त करें।",
  ogImage,
  slug = "",
  createdAt,
  updatedTime,
  authorName = "TrendMode हिंदी",
  articleSection = "",
  keywords = [],
  breadcrumbs = [],
}) => {
  const siteUrl = "https://trendmode.in";
  const fullUrl = `${siteUrl}/hi/${slug}`;
  const defaultOgImage = `${siteUrl}/default-og-image.jpg`;

  const breadcrumbJsonLd = breadcrumbs.length > 0 && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.url}`,
    })),
  };

  const articleJsonLd = pageType === "article" &&
    createdAt && {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": fullUrl,
      },
      headline: title,
      image: [ogImage || defaultOgImage],
      datePublished: createdAt,
      dateModified: updatedTime || createdAt,
      author: {
        "@type": "Organization",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: "TrendMode हिंदी",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },
      description,
      articleSection,
      keywords,
      isAccessibleForFree: true,
    };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={fullUrl} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="hi" />

        {/* OG / Twitter Meta */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={ogImage || defaultOgImage} />
        <meta property="og:locale" content="hi_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trendmodein" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage || defaultOgImage} />

        {/* Structured Data */}
        {articleJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
        )}
        {breadcrumbJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbJsonLd),
            }}
          />
        )}
      </Head>

      <div className="flex flex-col min-h-screen bg-white font-sans">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <Header />
          <Navbar />
        </header>

        <main className="flex-1 items-center justify-center px-1 md:px-2 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-14 center gap-4">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20 bg-gray-200 h-96 text-center p-2 text-sm text-gray-600">
                Left Ad
              </div>
            </aside>

            <section className="col-span-12 lg:col-span-6">{children}</section>

            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-20 bg-gray-200 h-96 text-center p-2 text-sm text-gray-600">
                Mid Ad
              </div>
            </aside>

            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20 bg-gray-200 h-96 text-center p-2 text-sm text-gray-600">
                Right Ad
              </div>
            </aside>
          </div>
        </main>

        <div className="min-h-[300px]">
          <HiFooter />
        </div>
      </div>
    </>
  );
};

export default LayoutHi;
