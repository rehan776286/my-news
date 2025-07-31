import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import ArticleCard from "@/components/articlesCard";
import ArticleSubCard from "@/components/subArticle";
import LayoutHi from "@/components/HiLayout";
import api from "@/utility/api";

export default function HomePage({ initialData }) {
  const [allData, setAllData] = useState(initialData || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchMoreCategories = useCallback(async () => {
    if (!hasMore) return;

    try {
      const res = await api.get(`/home?page=${page}&lang=hi`);
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
    <LayoutHi>
      {allData.map((section) => (
        <div key={section.category} className="">
          <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600">
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
              <Link href={`/hi/${article.slug}`} key={article._id}>
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
    </LayoutHi>
  );
}

export async function getStaticProps() {
  const res = await api.get("/home?page=1&lang=hi");
  const data = await res.data;

  return {
    props: {
      initialData: data ? [data] : [],
    },
    revalidate: 60,
  };
}
