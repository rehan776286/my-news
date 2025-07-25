import Head from "next/head";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "./footer";

// import Footer from "@/components/Footer"; // optional but good
// components/Layout.js

const Layout = ({
  children,
  pageType = "article", // 'article' | 'homepage' | 'category'
  title = "TrendMode -  Latest News, Breaking Headlines & Insights",
  description = "Get the latest breaking news, top headlines, and in-depth reporting across politics, business, tech, entertainment, and more.",
  ogImage,
  slug = "",
  createdAt,
  updatedTime,
  authorName = "TrendMode News",
  articleSection = "", // e.g. "Politics", "Business"
  keywords = [], // e.g. ["India", "Budget", "Nirmala Sitharaman"]
  breadcrumbs = [], // e.g. [{ name: "Home", url: "/" }, { name: "Business", url: "/category/business" }]
}) => {
  const siteUrl = "https://trendmode.in";
  const fullUrl = `${siteUrl}/${slug}`;
  const defaultOgImage = `${siteUrl}/default-og-image.jpg`;
  const isArticle = pageType === "article";
  const isHome = pageType === "homepage";
  const isCategory = pageType === "category";

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

  const articleJsonLd = isArticle &&
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
        name: "TrendMode",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },
      description: description,
      articleSection: articleSection,
      keywords: keywords,
      isAccessibleForFree: true,
    };

  const websiteJsonLd = isHome && {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "TrendMode",
    description: description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "TrendMode",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  const categoryJsonLd = isCategory && {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: fullUrl,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={fullUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={isArticle ? "article" : "website"} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={ogImage || defaultOgImage} />
        <meta property="og:site_name" content="TrendMode" />
        <meta property="og:locale" content="en_IN" />
        {isArticle && createdAt && (
          <meta property="article:published_time" content={createdAt} />
        )}
        {isArticle && updatedTime && (
          <meta property="article:modified_time" content={updatedTime} />
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trendmodein" />
        <meta name="twitter:creator" content="@trendmodein" />
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
        {websiteJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        )}
        {categoryJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
          />
        )}
      </Head>
      <div className={`flex flex-col min-h-screen bg-gray-100 font-sans`}>
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <Header />
          <Navbar />
        </header>
        <main className="flex-1 items-center justify-center px-1 md:px-2 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-14 center gap-4">
            {/* Left Ads */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20">
                {/* Replace with real ad code */}
                <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
                  Left Ad
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <section className="col-span-12 lg:col-span-6">{children}</section>
            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-20">
                {/* Replace with real ad code */}
                <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
                  Right Ad
                </div>
              </div>
            </aside>

            {/* Right Ads */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20">
                {/* Replace with real ad code */}
                <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
                  Right Ad
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;

// export default function Layout({ children, title, description }) {
//   // src/components/Layout.js (or _app.js)

//   return (
//     <>
//       <Head>
//         <title>{title || "TrendMode - Latest News"}</title>
//         <meta
//           name="description"
//           content={
//             description ||
//             "Get the latest Indian and global news on politics, business, sports, technology and more."
//           }
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://trendmode.in" />
//         <meta name="robots" content="index, follow" />
//       </Head>

//       {/* Page layout */}
//       <div className={`flex flex-col min-h-screen bg-gray-100 font-sans`}>
//         {/* Sticky Header */}
//         <header className="sticky top-0 z-50 bg-white shadow-sm">
//           <Header />
//           <Navbar />
//         </header>
//         <main className="flex-1 items-center justify-center px-1 md:px-2 py-1">
//           <div className="grid grid-cols-1 lg:grid-cols-14 center gap-4">
//             {/* Left Ads */}
//             <aside className="hidden lg:block lg:col-span-3">
//               <div className="sticky top-20">
//                 {/* Replace with real ad code */}
//                 <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
//                   Left Ad
//                 </div>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <section className="col-span-12 lg:col-span-6">{children}</section>
//             <aside className="hidden lg:block lg:col-span-2">
//               <div className="sticky top-20">
//                 {/* Replace with real ad code */}
//                 <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
//                   Right Ad
//                 </div>
//               </div>
//             </aside>

//             {/* Right Ads */}
//             <aside className="hidden lg:block lg:col-span-3">
//               <div className="sticky top-20">
//                 {/* Replace with real ad code */}
//                 <div className="bg-gray-200 h-96 w-full text-center p-2 text-sm text-gray-600">
//                   Right Ad
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </main>

//         <Footer></Footer>
//       </div>
//     </>
//   );
// }
