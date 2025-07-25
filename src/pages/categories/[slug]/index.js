import ArticleSubCard from "@/components/subArticle";
import api from "@/utility/api";
import Layout from "@/components/Layout";
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
      const res = await api.get(`/category/${slug}?page=${page}&limit=5`);
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
    <Layout>
      {articles.length > 0 && <ArticleCard {...articles[0]} />}
      <div className="space-y-4 mt-6">
        {articles.slice(1).map((article) => (
          <Link href={`/${article.slug}`} key={article._id}>
            <ArticleSubCard {...article} />
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
    </Layout>
  );
}

// Static paths for categories
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

// Initial article load
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const articles = await fetchCategoryArticles(slug, 1, "en");

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
//   console.log(articles);
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
//     console.log(res);

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
//           <Link href={`/${article.slug}`} key={article._id}>
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
//   console.log(params);
//   const slug = params.slug;
//   const articles = await fetchCategoryArticles(slug, 1, "en");

//   if (!articles || articles.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: { slug, initialArticles: articles },
//     revalidate: 60,
//   };
// }

// export default function TestScroll() {
//   const [items, setItems] = useState([...Array(20).keys()]);
//   const [page, setPage] = useState(2);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMore = () => {
//     console.log("✅ fetchMore triggered");
//     const newItems = [...Array(20).keys()].map((n) => n + page * 20);
//     setItems((prev) => [...prev, ...newItems]);
//     setPage((p) => p + 1);

//     if (page >= 5) setHasMore(false);
//   };

//   return (
//     <div
//       id="scrollableDiv"
//       style={{ height: "90vh", overflow: "auto", border: "1px solid #ddd" }}
//     >
//       <InfiniteScroll
//         dataLength={items.length}
//         next={fetchMore}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//         endMessage={<p>No more items</p>}
//         scrollableTarget="scrollableDiv"
//       >
//         {items.map((item) => (
//           <div
//             key={item}
//             style={{
//               padding: "16px",
//               borderBottom: "1px solid #ccc",
//               fontSize: "18px",
//             }}
//           >
//             Item {item}
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// }

// pages/category/[slug]/index.js

// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default function CategoryPage({
//   slug,
//   initialArticles = [],
//   hasMore = true,
// }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(2);
//   const [hasNext, setHasNext] = useState(hasMore);
//   const [loading, setLoading] = useState(false);
//   console.log("farhan khan");

//   const fetchMore = async () => {
//     console.log("zohan khan");
//     try {
//       setLoading(true);

//       const res = await axios.get(`/category/${slug}?page=${page}&limit=20`);
//       const data = res.data;

//       const newArticles = data.articles || [];
//       setArticles((prev) => [...prev, ...newArticles]);
//       setPage((p) => p + 1);

//       if (!data.hasMore || newArticles.length === 0) {
//         setHasNext(false);
//       }
//       fetchMore();
//     } catch (err) {
//       console.error("Error fetching more articles", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!Array.isArray(articles)) {
//     return <p className="p-4">Something went wrong. Please try again later.</p>;
//   }

//   return (
//     <Layout title={`${slug} News`}>
//       <div id="scrollableDiv" style={{ height: "80vh", overflow: "auto" }}>
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMore}
//           hasMore={hasNext}
//           loader={<p>Loading more...</p>}
//           scrollableTarget="scrollableDiv"
//         >
//           {articles.map((article) => (
//             <ArticleCard key={article._id} {...article} />
//           ))}
//         </InfiniteScroll>
//       </div>
//     </Layout>
//   );
// }

// export default function CategoryPage({ slug, initialArticles, hasMore }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(2);
//   const [hasNext, setHasNext] = useState(hasMore);

//   const fetchMore = async () => {
//     const res = await api.get(`/category/${slug}?page=${page}&limit=20`);
//     console.log(res);
//     const newArticles = res.data.articles;
//     setArticles((prev) => [...prev, ...newArticles]);
//     setPage((prev) => prev + 1);
//     if (!res.data.hasMore || newArticles.length === 0) {
//       setHasNext(false);
//     }
//   };
//   console.log(articles);
//   if (!Array.isArray(articles)) return <p className="p-4">Loading...</p>;
//   return (
//     <Layout title={`${slug} News - Trendmode`}>
//       <h1 className="text-2xl font-semibold capitalize p-4">{slug} News</h1>

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMore}
//         hasMore={hasNext}
//         loader={<p className="text-center py-4">Loading...</p>}
//         endMessage={<p className="text-center py-4">You’ve reached the end.</p>}
//       >
//         {articles.map((article) => (
//           <ArticleSubCard key={article._id} {...article} />
//         ))}
//       </InfiniteScroll>
//     </Layout>
//   );
// }
// import Layout from "@/components/Layout";
// import ArticleSubCard from "@/components/subArticle";
// import { fetchCategoryArticles } from "@/utility/pagination";

// export default function CategoryPage({ articles: initialArticles, slug }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const loaderRef = useRef();
//   const observerRef = useRef();
//   const categoryRef = useRef(slug); // 🧠 Track old category

//   // 🔁 Reset data when slug changes
//   useEffect(() => {
//     setArticles(initialArticles);
//     setPage(1);
//     setHasMore(true);
//     categoryRef.current = slug;
//   }, [slug, initialArticles]);

//   // 🔁 Scroll trigger to load more
//   const loadMore = useCallback(async () => {
//     const nextPage = page + 1;

//     const res = await fetch(
//       `http://localhost:4000/api/category/${slug}?page=${nextPage}&limit=2`
//     );
//     const { articles: newArticles } = await res.json();

//     // ✅ Only update if category still matches
//     if (categoryRef.current !== slug) return;

//     if (!newArticles || newArticles.length === 0) {
//       setHasMore(false);
//     } else {
//       setArticles([...newArticles]);
//       setPage(nextPage);
//     }
//   }, [page, slug]);

//   // 👁️ IntersectionObserver setup
//   useEffect(() => {
//     if (!loaderRef.current || !hasMore) return;

//     if (observerRef.current) observerRef.current.disconnect();

//     observerRef.current = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         loadMore();
//       }
//     });

//     observerRef.current.observe(loaderRef.current);

//     return () => {
//       if (observerRef.current) observerRef.current.disconnect();
//     };
//   }, [loadMore, hasMore]);

//   return (
//     <Layout>
//       <main className="p-4">
//         <h1 className="text-xl font-bold capitalize mb-4">{slug} News</h1>
//         <div id="article-list">
//           {articles.map((a) => (
//             <ArticleSubCard key={a._id} {...a} />
//           ))}
//         </div>
//         {hasMore ? (
//           <div ref={loaderRef} className="h-10" />
//         ) : (
//           <p>🎉 End of {slug} news.</p>
//         )}
//       </main>
//     </Layout>
//   );
// }

// export default function CategoryPage({ articles: initialArticles, slug }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const loader = useRef();
//   const observer = useRef();
//   const justReset = useRef(false); // 👈 used to skip 1st observer call after category change

//   // 🔁 When slug (category) changes, reset everything
//   useEffect(() => {
//     setArticles(initialArticles);
//     setPage(1);
//     setHasMore(true);
//     justReset.current = true;
//   }, [slug, initialArticles]);

//   // 🔁 Load more on scroll
//   const loadMore = useCallback(async () => {
//     const nextPage = page + 1;
//     const res = await fetch(
//       `http://localhost:4000/api/category/${slug}?page=${nextPage}&limit=2`
//     );
//     const { articles: newArticles } = await res.json();

//     if (!newArticles || newArticles.length === 0) {
//       setHasMore(false);
//     } else {
//       setArticles((prev) => [...prev, ...newArticles]);
//       setPage(nextPage);
//     }
//   }, [page, slug]);

//   // 👀 Set up the observer
//   useEffect(() => {
//     if (!loader.current || !hasMore) return;

//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         if (justReset.current) {
//           justReset.current = false; // 🚫 skip this first load
//           return;
//         }
//         loadMore();
//       }
//     });

//     observer.current.observe(loader.current);

//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, [loadMore, hasMore]);

//   return (
//     <Layout>
//       <main className="p-4">
//         <h1 className="text-xl font-bold capitalize mb-4">{slug} News</h1>
//         <div id="article-list">
//           {articles.map((a) => (
//             <ArticleSubCard key={a._id} {...a} />
//           ))}
//         </div>
//         {hasMore ? (
//           <div ref={loader} className="h-10" />
//         ) : (
//           <p>🎉 End of {slug} news.</p>
//         )}
//       </main>
//     </Layout>
//   );
// }
// export default function CategoryPage({ articles: initialArticles, slug }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const loader = useRef(null);
//   const observer = useRef(null);
//   const justChangedCategory = useRef(false); // 🧠 Used to skip loading on initial intersection

//   // 🚀 Reset all when category changes
//   useEffect(() => {
//     setArticles(initialArticles);
//     setPage(1);
//     setHasMore(true);
//     justChangedCategory.current = true;
//   }, [slug, initialArticles]);

//   // 🧠 Actual scroll load logic
//   const loadMore = useCallback(async () => {
//     const nextPage = page + 1;
//     const res = await fetch(
//       `http://localhost:4000/api/category/${slug}?page=${nextPage}&limit=2`
//     );
//     const { articles: newArticles } = await res.json();

//     if (!newArticles || newArticles.length === 0) {
//       setHasMore(false);
//     } else {
//       setArticles((prev) => [...prev, ...newArticles]);
//       setPage(nextPage);
//     }
//   }, [page, slug]);

//   // 👀 Intersection Observer setup
//   useEffect(() => {
//     if (!loader.current || !hasMore) return;

//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         if (justChangedCategory.current) {
//           justChangedCategory.current = false; // Skip first fire after slug change
//           return;
//         }
//         loadMore();
//       }
//     });

//     observer.current.observe(loader.current);

//     return () => observer.current.disconnect();
//   }, [loadMore, hasMore, slug]);

//   return (
//     <Layout>
//       <main className="p-4">
//         <h1 className="text-xl font-bold capitalize mb-4">{slug} News</h1>
//         <div id="article-list">
//           {articles.map((a) => (
//             <ArticleSubCard key={a._id} {...a} />
//           ))}
//         </div>
//         {hasMore ? (
//           <div ref={loader} className="h-10" />
//         ) : (
//           <p>🎉 End of {slug} news.</p>
//         )}
//       </main>
//     </Layout>
//   );
// }

// import SEOHead from "@/components/SEOHead";

// export default function CategoryPage({ articles: initialArticles, slug }) {
//   const [articles, setArticles] = useState(initialArticles);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const loader = useRef();
//   useEffect(() => {
//     setArticles(initialArticles);
//     setPage(1);
//     setHasMore(true);
//   }, [slug]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(async ([entry]) => {
//       if (entry.isIntersecting && hasMore) {
//         // 🛑 Skip first trigger after category reset
//         if (loader.current) {
//           loader.current = false;
//           return;
//         }

//         const nextPage = page + 1;
//         const res = await fetch(
//           `http://localhost:4000/api/category/${slug}?page=${nextPage}&limit=2`
//         );

//         const { articles: newArticles } = await res.json();

//         if (!newArticles || newArticles.length === 0) {
//           setHasMore(false);
//         } else {
//           setArticles((prev) => [...prev, ...newArticles]);
//           setPage(nextPage);
//         }
//       }
//     });

//     if (loader.current) observer.observe(loader.current);
//     return () => observer.disconnect();
//   }, [page, hasMore, slug]);
//   // useEffect(() => {
//   //   const observer = new IntersectionObserver(async ([entry]) => {
//   //     if (entry.isIntersecting && hasMore) {
//   //       const nextPage = page + 1;
//   //       const res = await fetch(
//   //         `http://localhost:4000/api/category/${slug}?page=${nextPage}&limit=2`
//   //       );

//   //       console.log(res);

//   //       const { articles } = await res.json();

//   //       if (articles.length === 0) {
//   //         setHasMore(false);
//   //       } else {
//   //         setArticles((prev) => [...prev, ...articles]);

//   //         setPage(nextPage);
//   //       }
//   //     }
//   //   });
//   //   console.log(page);

//   //   if (loader.current) observer.observe(loader.current);
//   //   return () => observer.disconnect();
//   // }, [page, hasMore, slug, initialArticles]);

//   return (
//     <>
//       {/* <SEOHead
//         title={`Latest ${slug} News - Trendmode`}
//         description={`Top ${slug} headlines in India & World`}
//         canonical={`https://trendmode.in/category/${slug}`}
//       /> */}
//       <Layout>
//         <main className="p-4">
//           <h1 className="text-xl font-bold capitalize mb-4">{slug} News</h1>
//           <div id="article-list">
//             {articles.map((a) => (
//               <ArticleSubCard key={a._id} {...a} />
//             ))}
//           </div>
//           {hasMore ? (
//             <div ref={loader} className="h-10" />
//           ) : (
//             <p>🎉 End of {slug} news.</p>
//           )}
//         </main>
//       </Layout>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const articles = await fetchCategoryArticles(slug, 1);
//   console.log(articles);

//   if (!articles || articles.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: { slug, articles },
//     revalidate: 60,
//   };
// }

// export default function Home({ articles }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div className="p-4">⏳ Loading...</div>;
//   }

//   if (!articles || articles.length === 0) {
//     return <div className="p-4">🚫 No articles found.</div>;
//   }
//   console.log(articles);

//   const topArticle = articles[0];

//   return (
//     <Layout>
//       <ArticleCard {...topArticle} />
//       {articles?.map((art) => {
//         console.log(art.slug);
//         return (
//           <Link href={`/${art.slug}`} key={art.slug}>
//             <ArticleSubCard {...art} />
//           </Link>
//         );
//       })}
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   const paths = newsCategories.map((cat) => ({
//     params: { slug: cat.slug },
//   }));

//   return {
//     paths,
//     fallback: true, // or 'blocking' for better SEO
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   try {
//     const res = await api.get(`/category/${slug}`);
//     console.log(res.data.articles);

//     return {
//       props: {
//         articles: res.data.articles || [],
//       },
//       revalidate: 60, // Regenerate every 60 seconds
//     };
//   } catch (error) {
//     console.error("Failed to fetch top news:", error);
//     return {
//       props: {
//         articles: [],
//       },
//       revalidate: 60,
//     };
//   }
// }

// export async function getStaticPaths() {
//   return { paths: [], fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const articles = await fetchCategoryArticles(slug, 1);
//   return {
//     props: { articles, slug },
//     revalidate: 60,
//   };
// }

// export default function CategoryPage({ articles, slug }) {
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const loader = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(async ([entry]) => {
//       if (entry.isIntersecting && hasMore) {
//         const nextPage = page + 1;
//         const html = await fetch(`/api/category/${slug}/page/${nextPage}`).then(res => res.text());
//         const doc = new DOMParser().parseFromString(html, 'text/html');
//         const cards = doc.querySelectorAll('.article-card');

//         if (cards.length === 0) setHasMore(false);
//         else {
//           const container = document.getElementById('article-list');
//           cards.forEach(card => {
//             const temp = document.createElement('div');
//             temp.innerHTML = card.outerHTML;
//             container.appendChild(temp.firstChild);
//           });
//           setPage(nextPage);
//         }
//       }
//     });

//     if (loader.current) observer.observe(loader.current);
//     return () => observer.disconnect();
//   }, [page, hasMore]);

//   return (
//     <>
//       <SEOHead
//         title={`Latest ${slug} News - Trendmode`}
//         description={`Top ${slug} headlines in India & World`}
//         canonical={`https://trendmode.in/category/${slug}`}
//       />
//       <main className="p-4">
//         <h1 className="text-xl font-bold capitalize mb-4">{slug} News</h1>
//         <div id="article-list">
//           {articles.map((a) => (
//             <ArticleCard key={a._id} {...a} />
//           ))}
//         </div>
//         {hasMore ? <div ref={loader} className="h-10" /> : <p>🎉 End of {slug} news.</p>}
//       </main>
//     </>
//   );
// }
