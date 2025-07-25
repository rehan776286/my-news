// hooks/useInfiniteRelatedArticles.js
import { useInfiniteQuery } from "@tanstack/react-query";
import api from "@/utility/api";

export const useInfiniteRelatedArticles = (slug, lang) => {
  return useInfiniteQuery({
    queryKey: ["relatedArticles", slug],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(
        `/article/${slug}/related?page=${pageParam}&lang=${lang}`
      );
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    enabled: !!slug,
  });
};
