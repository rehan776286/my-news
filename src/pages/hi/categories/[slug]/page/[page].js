// pages/categories/[slug]/page/[page].js
import ArticleCard from "@/components/articlesCard";
import ArticleSubCard from "@/components/subArticle";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/header";

import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CategoryPage({ articles, slug, page }) {
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
  const pageUrl = `https://trendmode.in/hi/categories/${slug}/page/${page}`;

  return (
    <>
      <Head>
        <title>{`${capitalizedSlug} News - Page ${page} | TrendMode`}</title>
        <meta
          name="description"
          content={`Read Page ${page} of the latest ${capitalizedSlug} news, breaking headlines, and exclusive coverage from TrendMode.`}
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
                  item: "https://trendmode.in/hi",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: capitalizedSlug,
                  item: `https://trendmode.in/hi/categories/${slug}`,
                },
                ...(page > 1
                  ? [
                      {
                        "@type": "ListItem",
                        position: 3,
                        name: `Page ${page}`,
                        item: pageUrl,
                      },
                    ]
                  : []),
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
              inLanguage: "hi",
            }),
          }}
        />

        {/* ItemList Structured Data for List of Articles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: articles.map((article, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://trendmode.in/${article.slug}`,
              })),
            }),
          }}
        />
      </Head>

      {/* Page Content Below */}
      {/* Render your articles here */}
      <Header />
      <Navbar />
      <ArticleCard {...articles[0]} />
      <div className="space-y-6">
        {articles.map((article) => (
          <Link href={`/${article.slug}`} key={article._id}>
            <ArticleSubCard {...article} isHindi={"hi"} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = [
    "bharat",
    "manoranjan",
    "raajniti",
    "vishwa",
    "vyapar",
    "technology",
    "vigyaan",
    "swasthya",
    "shiksha",
    "khel",
    "apraad",
    "explainers",
  ]; // Or fetch from DB
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
  //   `http://localhost:4000/api/category/${slug}?page=${page}&lang=hi`
  // );

  const res = await fetch(
    `https://test-news-backend-1.onrender.com/api/category/${slug}?page=${page}&lang=hi`
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
