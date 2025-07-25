import api from "./api.js";

// Call your backend category route
export const fetchCategoryArticles = async (
  slug,
  page = 1,
  lang,
  limit = 2
) => {
  const url = `https://test-news-backend-1.onrender.com/api/category/${slug}?page=${page}&lang=${lang}&limit=${limit}`;

  // const url = `http://localhost:4000/api/category/${slug}?page=${page}&limit=${limit}&lang=${lang}`;
  const res = await fetch(url);
  console.log(res);
  const contentType = res.headers.get("content-type");
  if (!res.ok || !contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Invalid response from backend: ${text}`);
  }
  const data = await res.json();
  console.log(data);

  return data.articles;
  s;
};
