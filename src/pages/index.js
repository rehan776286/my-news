import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import ArticleCard from "@/components/articlesCard";
import ArticleSubCard from "@/components/subArticle";
import Layout from "@/components/Layout";
import api from "@/utility/api";

export default function HomePage({ initialData }) {
  const [allData, setAllData] = useState(initialData || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchMoreCategories = useCallback(async () => {
    if (!hasMore) return;

    try {
      const res = await api.get(`/home?page=${page}&lang=en`);
      const data = await res.data;

      if (!data.articles || data.articles.length === 0) {
        setHasMore(false);
        return;
      }

      setAllData((prev) => [...prev, data]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to load more:", err);
      setHasMore(false);
    }
  }, [page, hasMore]);

  // IntersectionObserver to trigger fetch
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMoreCategories();
        }
      },
      { rootMargin: "200px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [fetchMoreCategories, hasMore]);

  return (
    <Layout>
      {allData.map((section) => (
        <div key={section.category} className="">
          <div className="relative w-full max-w-2xl mx-auto bg-white border border-gray-200 dark:border-gray-700 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600">
            <div className="flex items-center justify-center relative z-10">
              <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent to-blue-400 dark:to-blue-600 rounded-full mr-4 opacity-75 group-hover:to-blue-500 dark:group-hover:to-blue-700 transition-colors duration-300"></div>

              <h2 className="text-2xl font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-800 dark:from-blue-300 dark:to-purple-400 drop-shadow-md leading-tight text-center whitespace-nowrap">
                {section.category}
              </h2>

              <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent to-blue-400 dark:to-blue-600 rounded-full ml-4 opacity-75 group-hover:to-blue-500 dark:group-hover:to-blue-700 transition-colors duration-300"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out"></div>
          </div>

          <ArticleCard {...section.articles[0]} />
          <div className="">
            {section.articles.slice(1).map((article) => (
              <Link href={`/${article.slug}`} key={article._id}>
                <ArticleSubCard {...article} />
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center items-center mt-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-full py-2 text-lg font-semibold overflow-hidden shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-100 group"
            >
              <span className="relative z-10">View All</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-700 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <svg
                className="absolute right-4 z-10 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}

      {hasMore && (
        <div ref={loaderRef} className="text-center p-4 text-gray-500">
          Loading more categories...
        </div>
      )}
      {!hasMore && (
        <p className="text-center p-4 text-gray-500">All categories loaded.</p>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await api.get("/home?page=1&lang=en");
  const data = await res.data;

  return {
    props: {
      initialData: data ? [data] : [],
    },
    revalidate: 60,
  };
}

// import Image from "next/image";
// import ArticleCard from "@/components/articlesCard";

// import Header from "@/components/header";
// import ArticleSubCard from "@/components/subArticle";
// import Navbar from "@/components/navbar";
// import Layout from "@/components/Layout";
// import InfiniteScroll from "react-infinite-scroll-component";

// import axios from "axios";
// import api from "@/utility/api";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function HomePage({ initialData }) {
//   const [allData, setAllData] = useState(initialData || []);
//   const [page, setPage] = useState(2);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreCategories = async () => {
//     const res = await api.get(`/home?page=${page}&lang=en`);
//     const data = await res.data;
//     console.log(data);

//     if (!data.articles || data.articles.length === 0) {
//       setHasMore(false);
//       return;
//     }

//     setAllData((prev) => [...prev, data]);
//     setPage((prev) => prev + 1);
//   };

//   return (
//     <Layout>
//       <InfiniteScroll
//         dataLength={allData.length}
//         next={fetchMoreCategories}
//         hasMore={hasMore}
//         loader={<p className="p-4">Loading more categories...</p>}
//         endMessage={<p className="p-4">All categories loaded.</p>}
//       >
//         {allData.map((section) => (
//           <div key={section.category} className="">
//             <div class="relative w-full max-w-2xl mx-auto   bg-white dark:bg-gray-800   border border-gray-200 dark:border-gray-700 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600">
//               <div class="flex items-center justify-center relative z-10">
//                 <div class="flex-grow h-0.5 bg-gradient-to-r from-transparent to-blue-400 dark:to-blue-600 rounded-full mr-4 opacity-75 group-hover:to-blue-500 dark:group-hover:to-blue-700 transition-colors duration-300"></div>

//                 <h2 class="text-2xl font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-800 dark:from-blue-300 dark:to-purple-400 drop-shadow-md leading-tight text-center whitespace-nowrap">
//                   {section.category}
//                 </h2>

//                 <div class="flex-grow h-0.5 bg-gradient-to-l from-transparent to-blue-400 dark:to-blue-600 rounded-full ml-4 opacity-75 group-hover:to-blue-500 dark:group-hover:to-blue-700 transition-colors duration-300"></div>
//               </div>

//               <div class="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out"></div>
//             </div>

//             <ArticleCard {...section.articles[0]} />
//             <div className=" ">
//               {section.articles.slice(1).map((article) => (
//                 <Link href={`/${article.slug}`} key={article._id}>
//                   <ArticleSubCard {...article} />
//                 </Link>
//               ))}
//             </div>
//             <div className="w-full flex justify-center items-center">
//               <a
//                 href="#"
//                 class="relative inline-flex items-center justify-center w-full py-2  text-lg font-semibold overflow-hidden shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
//   bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-100 group"
//               >
//                 {" "}
//                 {/* <-- Key Changes Here */}
//                 <span class="relative z-10">View All</span>
//                 {/* Dynamic Background "Trail" - This animates over the default background */}
//                 <span class="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-700 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
//                 {/* Subtle Arrow on Hover */}
//                 <svg
//                   class="absolute right-4 z-10 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </InfiniteScroll>
//     </Layout>
//   );
// }
// // pages/index.js
// export async function getStaticProps() {
//   const res = await api.get("/home?page=1&lang=en");
//   const data = await res.data;
//   console.log(data);

//   return {
//     props: {
//       initialData: data ? [data] : [],
//     },
//     revalidate: 60,
//   };
// }

// pages/index.js
// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Head from "next/head";

// export default function Home({ initialData }) {
//   // const [breakingArticles, setBreakingArticles] = useState(
//   //   initialData.breakingArticles
//   // );
//   // const [trendingArticles, setTrendingArticles] = useState(
//   //   initialData.trendingArticles
//   // );
//   // const [categoryData, setCategoryData] = useState(
//   //   initialData.categoryArticles
//   // );

//   // const [page, setPage] = useState(2); // for infinite scroll (if needed later)
//   // console.log(initialData);

//   return (
//     <>
//         <Layout>
//           <ArticleCard {...articles[0]} />
//           {/* <div
//             id="scrollableDiv"
//             style={{ height: "90vh", overflow: "auto", border: "1px solid #eee" }}
//           > */}
//           <InfiniteScroll
//             dataLength={articles.length}
//             next={fetchMore}
//             hasMore={hasNext}
//             loader={<p className="p-4">Loading...</p>}
//             endMessage={<p className="p-4">No more articles.</p>}
//             scrollableTarget="scrollableDiv"
//           >
//             {articles.map((article) => (
//               <Link href={`/${article.slug}`} key={article._id}>
//                 <ArticleSubCard {...article} />
//               </Link>
//             ))}
//           </InfiniteScroll>
//           {/* </div> */}
//         </Layout>

//     </>
//   );
// }

// // function Section({ title, articles }) {
// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold mb-4">{title}</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {articles.map((article) => (
// //           <ArticleSubCard key={article.slug} {...article} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:4000/api/home`);
//   const data = await res.json();

//   return {
//     props: {
//       initialData: data,
//     },
//     revalidate: 300, // Rebuild homepage every 5 minutes
//   };
// }

// function ArticleCard({ article }) {
//   return (
//     <a href={`/article/${article.slug}`} className="block group rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition">
//       <img
//         src={article.coverImage?.url}
//         alt={article.title}
//         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{article.title}</h3>
//         <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.summary}</p>
//         <p className="text-xs text-gray-400 mt-2">{new Date(article.createdAt).toLocaleDateString()}</p>
//       </div>
//     </a>
//   );
// }

// export default function Home() {
//   const dummy = {
//     title: "IAF Jaguar Jet Crash Kills 2 Pilots in Rajasthan",
//     subTitle:
//       "A Jaguar fighter jet crashed during a training sortie in Rajasthan on July 9.",
//     category: "Defense",
//     date: "2025-07-09",
//     slug: "iaf-jaguar-crash",
//     img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
//   };

//   return (
//     <Layout>
//       {/* <Header />
//       <Navbar /> */}
//       <ArticleCard {...dummy} />
//       <ArticleSubCard {...dummy} />
//       <ArticleSubCard {...dummy} /> <ArticleSubCard {...dummy} />{" "}
//       <ArticleSubCard {...dummy} />
//     </Layout>
//   );
// }

// // export default function Home() {
// //   return (
// //     <div>
// //       <ArticleCard />
// //     </div>
// //   );
// // }
