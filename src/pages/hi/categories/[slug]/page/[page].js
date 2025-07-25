// pages/categories/[slug]/page/[page].js
import ArticleCard from "@/components/articlesCard";
import ArticleSubCard from "@/components/subArticle";
import Link from "next/link";
import Head from "next/head";

export default function CategoryPage({ articles, slug, page }) {
  return (
    <>
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

  const res = await fetch(
    `http://localhost:4000/api/category/${slug}?page=${page}&lang=hi`
  );

  // const res = await fetch(
  //   `https://test-news-backend-1.onrender.com/api/category/${slug}?page=${page}&lang=en`
  // );

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
