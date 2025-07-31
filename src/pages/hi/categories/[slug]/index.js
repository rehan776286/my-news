import ArticleSubCard from "@/components/subArticle";
import api from "@/utility/api";
import LayoutHi from "@/components/HiLayout";
import Link from "next/link";
import ArticleCard from "@/components/articlesCard";
import { fetchCategoryArticles } from "@/utility/pagination";
import { useState, useEffect, useRef } from "react";

export default function CategoryPage({ slug, initialArticles = [] }) {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(2);
  const [hasNext, setHasNext] = useState(true);
  const loaderRef = useRef(null);

  // Reset when slug changes
  useEffect(() => {
    setArticles(initialArticles);
    setPage(2);
    setHasNext(true);
  }, [slug, initialArticles]);

  const fetchMore = async () => {
    try {
      const res = await api.get(
        `/category/${slug}?page=${page}&lang=hi&limit=5`
      );
      const data = res.data;
      const newArticles = data.articles || [];

      setArticles((prev) => [...prev, ...newArticles]);
      setPage((prev) => prev + 1);
      if (!data.hasMore || newArticles.length === 0) {
        setHasNext(false);
      }
    } catch (err) {
      console.error("Error fetching more articles", err);
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNext) {
          fetchMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef.current, hasNext]);

  return (
    <LayoutHi>
      {articles.length > 0 && <ArticleCard {...articles[0]} isHindi={"hi"} />}
      <div className="space-y-4 mt-6">
        {articles.slice(1).map((article) => (
          <Link href={`/hi/${article.slug}`} key={article._id}>
            <ArticleSubCard {...article} isHindi="hi" />
          </Link>
        ))}
      </div>

      {/* Loader div for intersection observer */}
      {hasNext && (
        <div ref={loaderRef} className="text-center py-6 text-gray-500">
          Loading more articles...
        </div>
      )}
      {!hasNext && (
        <div className="text-center py-6 text-gray-400">No more articles.</div>
      )}
    </LayoutHi>
  );
}

// Static paths for categories
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

// Initial article load
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const articles = await fetchCategoryArticles(slug, 1, "hi");

  if (!articles || articles.length === 0) {
    return { notFound: true };
  }

  return {
    props: { slug, initialArticles: articles },
    revalidate: 60,
  };
}

// import ArticleSubCard from "@/components/subArticle";
// import api from "@/utility/api";
// import Layout from "@/components/Layout";
// import Link from "next/link";

// import ArticleCard from "@/components/articlesCard";

// import { fetchCategoryArticles } from "@/utility/pagination";

// import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default function CategoryPage({ slug, initialArticles = [] }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(2);
//   const [hasNext, setHasNext] = useState(true);
//   useEffect(() => {
//     setArticles(initialArticles);
//     setPage(2);
//     setHasNext(true);
//   }, [slug, initialArticles]);

//   const fetchMore = async () => {
//     console.log("🔥 fetchMore running");
//     const res = await api.get(`/category/${slug}?page=${page}&limit=2`);
//     try {
//       console.log(res);
//       const data = res.data;
//       const newArticles = data.articles || [];

//       setArticles((prev) => [...prev, ...newArticles]);
//       setPage((prev) => prev + 1);

//       if (!data.hasMore || newArticles.length === 0) {
//         setHasNext(false);
//       }
//     } catch (err) {
//       console.error("Error fetching more articles", err);
//     }
//   };

//   return (
//     <Layout>
//       <ArticleCard {...articles[0]} />
//       {/* <div
//         id="scrollableDiv"
//         style={{ height: "90vh", overflow: "auto", border: "1px solid #eee" }}
//       > */}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMore}
//         hasMore={hasNext}
//         loader={<p className="p-4">Loading...</p>}
//         endMessage={<p className="p-4">No more articles.</p>}
//         scrollableTarget="scrollableDiv"
//       >
//         {articles.map((article) => (
//           <Link href={`/hi/${article.slug}`} key={article._id}>
//             <ArticleSubCard {...article} />
//           </Link>
//         ))}
//       </InfiniteScroll>
//       {/* </div> */}
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const articles = await fetchCategoryArticles(slug, 1);

//   if (!articles || articles.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: { slug, initialArticles: articles },
//     revalidate: 60,
//   };
// }
