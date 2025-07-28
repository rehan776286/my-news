// pages/categories/[slug]/page/[page].js
import ArticleCard from "@/components/articlesCard";
import ArticleSubCard from "@/components/subArticle";
import Link from "next/link";

import Head from "next/head";

export default function CategoryPage({ articles, slug, page }) {
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
  const pageUrl = `https://trendmode.in/categories/${slug}/page/${page}`;

  return (
    <>
      <Head>
        <title>{`${capitalizedSlug} News - Page ${page} | TrendMode`}</title>
        <meta
          name="description"
          content={`Page ${page} of latest ${capitalizedSlug} news, breaking headlines, and in-depth coverage at TrendMode.`}
        />
        <link rel="canonical" href={pageUrl} />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://trendmode.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: capitalizedSlug,
                  item: `https://trendmode.in/categories/${slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `Page ${page}`,
                  item: pageUrl,
                },
              ],
            }),
          }}
        />

        {/* WebPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `${capitalizedSlug} News - Page ${page}`,
              url: pageUrl,
              isPartOf: {
                "@type": "CollectionPage",
                name: `${capitalizedSlug} News`,
              },
            }),
          }}
        />

        {/* ItemList Structured Data for Article List */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: articles.map((article, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://trendmode.in/${article.slug}`, // English slug
              })),
            }),
          }}
        />
      </Head>

      {/* Page Content Below */}
      {/* Render your articles here */}
      <h1 className="text-2xl font-bold">
        {slug} News - Page {page}
      </h1>
      <ArticleCard {...articles[0]} />
      <div className="space-y-6">
        {articles.map((article) => (
          <Link href={`/${article.slug}`} key={article._id}>
            <ArticleSubCard {...article} />
          </Link>
        ))}
      </div>
    </>
  );
}

// export default function CategoryPage({ articles, slug, page }) {
//   return (
//     <>

//       <Head>
//         <title>{`${
//           slug.charAt(0).toUpperCase() + slug.slice(1)
//         } News - Page ${page} | TrendMode`}</title>
//         <meta
//           name="description"
//           content={`Explore page ${page} of the latest ${slug} news on TrendMode. Stay informed with top headlines, breaking updates, and in-depth analysis.`}
//         />
//         <link
//           rel="canonical"
//           href={`https://trendmode.in/categories/${slug}/page/${page}`}
//         />

//         {/* Open Graph Tags for Facebook */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content={`${slug} News - Page ${page} | TrendMode`}
//         />
//         <meta
//           property="og:description"
//           content={`Top ${slug} news, headlines and updates on page ${page}.`}
//         />
//         <meta
//           property="og:url"
//           content={`https://trendmode.in/categories/${slug}/page/${page}`}
//         />
//         <meta property="og:site_name" content="TrendMode" />
//         <meta
//           property="og:image"
//           content="https://trendmode.in/default-og-image.jpg"
//         />

//         {/* Twitter Card Meta */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={`${slug} News - Page ${page} | TrendMode`}
//         />
//         <meta
//           name="twitter:description"
//           content={`Top ${slug} news and updates from page ${page}.`}
//         />
//         <meta
//           name="twitter:image"
//           content="https://trendmode.in/default-og-image.jpg"
//         />

//         {/* Robots tag for indexing (optional) */}
//         <meta name="robots" content="index, follow" />

//         {/* Breadcrumb Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               itemListElement: [
//                 {
//                   "@type": "ListItem",
//                   position: 1,
//                   name: "Home",
//                   item: "https://trendmode.in/",
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 2,
//                   name: slug.charAt(0).toUpperCase() + slug.slice(1),
//                   item: `https://trendmode.in/categories/${slug}`,
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 3,
//                   name: `Page ${page}`,
//                   item: `https://trendmode.in/categories/${slug}/page/${page}`,
//                 },
//               ],
//             }),
//           }}
//         />

//         {/* Pagination Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               name: `${
//                 slug.charAt(0).toUpperCase() + slug.slice(1)
//               } News - Page ${page}`,
//               url: `https://trendmode.in/categories/${slug}/page/${page}`,
//               isPartOf: {
//                 "@type": "CollectionPage",
//                 name: `${slug.charAt(0).toUpperCase() + slug.slice(1)} News`,
//               },
//               breadcrumb: {
//                 "@id": `https://trendmode.in/categories/${slug}/page/${page}#breadcrumb`,
//               },
//             }),
//           }}
//         />
//       </Head>
//       <h1 className="text-2xl font-bold">
//         {slug} News - Page {page}
//       </h1>
//       <ArticleCard {...articles[0]} />
//       <div className="space-y-6">
//         {articles.map((article) => (
//           <Link href={`/${article.slug}`} key={article._id}>
//             <ArticleSubCard {...article} />
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

export async function getStaticPaths() {
  const slugs = ["world", "politics", "sports"]; // Or fetch from DB
  const paths = [];

  for (const slug of slugs) {
    for (let page = 1; page <= 10; page++) {
      paths.push({
        params: { slug, page: page.toString() },
      });
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug, page } = params;
  console.log(slug);

  // const res = await fetch(
  //   `http://localhost:4000/api/category/${slug}?page=${page}&lang=en`
  // );

  const res = await fetch(
    `https://test-news-backend-1.onrender.com/api/category/${slug}?page=${page}&lang=en`
  );

  const data = await res.json();
  console.log(data);

  return {
    props: {
      articles: data.articles || [],
      slug,
      page: Number(page),
    },
    revalidate: 1800,
  };
}

// // pages/categories/[slug]/page/[page].js

// import { fetchCategoryArticles } from "@/utility/pagination";

// import ArticleSubCard from "@/components/subArticle";

// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const page = parseInt(params.page, 10) || 1;

//   const articles = await fetchCategoryArticles(slug, page, "en");
//   console.log(articles);

//   if (!articles || articles.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: { slug, page, articles },
//     revalidate: 60,
//   };
// }

// export default function CategoryPagePagination({ slug, page, articles }) {
//   return (
//     <main className="p-4">
//       <h1 className="text-2xl font-bold capitalize mb-4">
//         {slug} - Page {page}
//       </h1>
//       {articles.map((a) => (
//         <ArticleSubCard key={a._id} {...a} />
//       ))}
//     </main>
//   );
// }

// import { fetchCategoryArticles } from "@/utility/pagination";
// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const page = parseInt(params.page);
//   const articles = await fetchCategoryArticles(slug, page);

//   if (!articles || articles.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: { articles },
//     revalidate: 60,
//   };
// }

// export default function CategoryPagePagination({ articles }) {
//   return (
//     <main className="p-4">
//       {articles.map((a) => (
//         <ArticleCard key={a._id} {...a} />
//       ))}
//     </main>
//   );
// }
