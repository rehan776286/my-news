import ArticleTop from "@/components/articleTop";
import Layout from "@/components/Layout";
import YtCard from "@/components/YtCard";
import SocialFollowCard from "@/components/follow&sub";
import { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useInfiniteRelatedArticles } from "@/hook/useInfiniteRelatedArticles";
const lang = "hi";
export default function RelatedArticles({
  slug,
  title,
  createdAt,
  htmlContent,
  summary,
  ogImage,
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteRelatedArticles(slug, lang);

  const loaderRef = useRef();

  // 👁️ IntersectionObserver for infinite scroll
  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, loaderRef.current]);

  // ✅ Remove duplicate articles by _id
  const uniqueArticles = useMemo(() => {
    const seen = new Set();
    const result = [];

    data?.pages.forEach((page) => {
      page.related.forEach((article) => {
        if (!seen.has(article._id)) {
          seen.add(article._id);
          result.push(article);
        }
      });
    });

    return result;
  }, [data]);

  return (
    <Layout
      pageType="article" // 'article' | 'homepage' | 'category'
      title="Budget 2025: Nirmala Sitharaman Unveils Major Tax Reforms"
      description="Finance Minister Nirmala Sitharaman announces significant tax reforms in Budget 2025. Get key highlights, expert analysis, and full coverage."
      ogImage={ogImage} // full URL for best Open Graph SEO
      slug="budget-2025-tax-reforms" // used for canonical and structured data
      createdAt={createdAt} // ISO string
      updatedTime={createdAt} // ISO string
      authorName="TrendMode News"
      articleSection="Business"
      keywords={["India", "Budget 2025", "Nirmala Sitharaman", "Tax Reforms"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Business", url: "/category/business" },
        { name: "Budget 2025", url: "/article/budget-2025-tax-reforms" },
      ]}
    >
      <section>
        <ArticleTop
          title={title}
          createdAt={createdAt}
          htmlContent={htmlContent}
          summary={summary}
          ogImage={ogImage}
          slug={slug}
        />

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <SocialFollowCard />

        <p className="text-lg font-bold font-sans text-gray-800 dark:text-white mt-8 mb-4 border-l-4 border-blue-600 pl-4">
          Related Articles
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl">
          {uniqueArticles.map((article) => (
            <Link href={`/hi/${article.slug}`} key={article._id}>
              <YtCard {...article} isHindi="hi" />
            </Link>
          ))}
        </div>

        <div
          ref={loaderRef}
          className="h-12 flex items-center justify-center py-6"
        >
          {isFetchingNextPage ? (
            <div className="flex items-center gap-2 animate-pulse text-blue-600">
              <div className="w-5 h-5 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p>Fetching the latest stories...</p>
            </div>
          ) : !hasNextPage ? (
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              You’ve reached the end — no more related articles.
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // const res = await fetch("http://localhost:4000/api/allslug");
    // const res = await fetch("http://localhost:4000/api/allslug?lang=hi");
    const res = await fetch(
      "https://test-news-backend-1.onrender.com/api/allslug?lang=hi"
    );

    const slugs = await res.json();

    // Optional: limit to latest 100 for performance
    const limitedSlugs = slugs.slice(0, 100);

    const paths = slugs.map(({ slug }) => ({
      params: { slug }, // ✅ slug is a string
    }));

    return {
      paths,
      fallback: "blocking", // ISR will build others on-demand
    };
  } catch (error) {
    console.error("❌ getStaticPaths error:", error.message);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // const res = await fetch(
    //   `http://localhost:4000/api/article/${params.slug}?lang=hi`
    // );
    const res = await fetch(
      ` https://test-news-backend-1.onrender.com/api/article/${params.slug}?lang=hi`
    );

    const data = await res.json();

    if (!data.article) return { notFound: true };

    // ✅ This line defines `article`
    const article = data.article;
    console.log(article);

    return {
      props: { ...article },
      revalidate: 60,
    };
  } catch (error) {
    console.error("getStaticProps error:", error.message);
    return { notFound: true };
  }
}
