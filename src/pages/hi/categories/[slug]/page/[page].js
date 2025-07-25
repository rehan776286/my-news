import { fetchCategoryArticles } from "@/utility/pagination";

import ArticleSubCard from "@/components/subArticle";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const page = parseInt(params.page, 10) || 1;

  const articles = await fetchCategoryArticles(slug, page);

  if (!articles || articles.length === 0) {
    return { notFound: true };
  }

  return {
    props: { slug, page, articles },
    revalidate: 60,
  };
}

export default function CategoryPagePagination({ slug, page, articles }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {slug} - Page {page}
      </h1>
      {articles.map((a) => (
        <ArticleSubCard key={a._id} {...a} />
      ))}
    </main>
  );
}
