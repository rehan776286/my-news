// pages/article/[slug].js (or wherever you're rendering it)
import ArticleTop from "@/components/articleTop";
import Layout from "@/components/Layout";
import YtCard from "@/components/YtCard";
import SocialFollowCard from "@/components/follow&sub";
import { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useInfiniteRelatedArticles } from "@/hook/useInfiniteRelatedArticles";

export default function RelatedArticles({
  slug,
  title,
  createdAt,
  htmlContent,
  summary,
  ogImage,
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteRelatedArticles(slug, "en");

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
    <Layout>
      <section>
        <ArticleTop
          title={title}
          createdAt={createdAt}
          htmlContent={htmlContent}
          summary={summary}
          ogImage={ogImage}
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
            <Link href={`/${article.slug}`} key={article._id}>
              <YtCard {...article} />
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
    // const res = await fetch(
    //   "https://test-news-backend-1.onrender.com/api/allslug?lang=en"
    // );

    const res = await fetch("http://localhost:4000/api/allslug?lang=en");

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
    const res = await fetch(
      ` https://test-news-backend-1.onrender.com/api/article/${params.slug}?lang=en`
    );
    //     const res = await fetch(
    //   `http://localhost:4000/api/article/${params.slug}?lang=en`
    // );

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
// import ArticleTop from "@/components/articleTop";
// import Layout from "@/components/Layout";
// import YtCard from "@/components/YtCard";
// import api from "@/utility/api";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import SocialFollowCard from "@/components/follow&sub";

// export async function getStaticPaths() {
//   try {
//     // const res = await fetch("http://localhost:4000/api/allslug");
//     const res = await fetch("http://localhost:4000/api/allslug?lang=en");

//     const slugs = await res.json();

//     // Optional: limit to latest 100 for performance
//     const limitedSlugs = slugs.slice(0, 100);

//     const paths = slugs.map(({ slug }) => ({
//       params: { slug }, // ✅ slug is a string
//     }));

//     return {
//       paths,
//       fallback: "blocking", // ISR will build others on-demand
//     };
//   } catch (error) {
//     console.error("❌ getStaticPaths error:", error.message);
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// }

// export async function getStaticProps({ params }) {
//   try {
//     const res = await fetch(
//       `http://localhost:4000/api/article/${params.slug}?lang=en`
//     );
//     const data = await res.json();

//     if (!data.article) return { notFound: true };

//     // ✅ This line defines `article`
//     const article = data.article;
//     console.log(article);

//     return {
//       props: { ...article },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("getStaticProps error:", error.message);
//     return { notFound: true };
//   }
// }

// export default function RelatedArticles({
//   slug,
//   title,
//   createdAt,
//   htmlContent,
//   summary,
//   ogImage,
// }) {
//   const [relatedArticles, setRelatedArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchRelated = async () => {
//     try {
//       const res = await api.get(
//         `/article/${slug}/related?page=${page}&lang=en`
//       );

//       const newArticles = res.data.related;

//       // 🚫 Fix duplicates by using article._id as unique key
//       setRelatedArticles((prev) => {
//         const existingIds = new Set(prev.map((a) => a._id));
//         const filtered = newArticles.filter((a) => !existingIds.has(a._id));
//         return [...prev, ...filtered];
//       });

//       setHasMore(res.data.hasMore);
//       setPage((prev) => prev + 1);
//     } catch (err) {
//       console.error("❌ Error loading related articles:", err);
//     }
//   };

//   // useEffect(() => {
//   //   setRelatedArticles([]); // Reset on slug change
//   //   setPage(1);
//   //   setHasMore(true);
//   //   fetchRelated(); // Initial fetch
//   // }, [slug]);
//   useEffect(() => {
//     setRelatedArticles([]);
//     setPage(1);
//     setHasMore(true);
//   }, [slug]);

//   useEffect(() => {
//     if (page === 1) {
//       fetchRelated();
//     }
//   }, [page]);

//   return (
//     <Layout>
//       <section className="">
//         <ArticleTop
//           title={title}
//           createdAt={createdAt}
//           htmlContent={htmlContent}
//           summary={summary}
//           ogImage={ogImage}
//         />
//         <div
//           className="article-content"
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//         />
//         <SocialFollowCard />

//         <p className="text-lg font-bold  font-sans text-gray-800 dark:text-white mt-8 mb-4 border-l-4 border-blue-600 pl-4">
//           Related Articles
//         </p>

//         {/* <h2 className="text-xl font-semibold mb-4">Related Articles</h2> */}

//         <InfiniteScroll
//           dataLength={relatedArticles.length}
//           next={fetchRelated}
//           hasMore={hasMore}
//           loader={
//             <div className="flex items-center justify-center py-10 gap-3 animate-pulse">
//               <span className="inline-block w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//               <p className="text-sm text-blue-600 font-medium tracking-wide">
//                 Fetching the latest stories...
//               </p>
//             </div>
//           }
//           endMessage={
//             <div className="py-10 text-center text-gray-500 dark:text-gray-400">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span className="text-sm font-medium">
//                   You’ve reached the end — no more related articles.
//                 </span>
//               </div>
//             </div>
//           }

//           // loader={<p className="p-4">Loading...</p>}
//           // endMessage={<p className="p-4">No more related articles.</p>}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl">
//             {relatedArticles.map((article) => (
//               <Link href={`/${article.slug}`} key={article._id}>
//                 <YtCard {...article} />
//               </Link>
//             ))}
//           </div>
//         </InfiniteScroll>
//       </section>
//     </Layout>
//   );
// }

// export default function Cric({
//   title,
//   createdAt,
//   htmlContent,
//   summary,
//   coverImage,
//   tags,
// }) {
//   console.log(tags);
//   return (
//     <Layout>
//       <ArticleTop
//         title={title}
//         createdAt={createdAt}
//         htmlContent={htmlContent}
//         summary={summary}
//         coverImage={coverImage}
//       />
//       <div
//         className="article-content"
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />

//       {/* <div>

//         <YtCard />
//         <YtCard />
//         <YtCard />
//         <YtCard />
//         <YtCard />
//         <YtCard />
//       </div> */}
//     </Layout>
//   );
// }
