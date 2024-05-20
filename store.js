import { create } from "zustand";

const ArticlesStore = (set, get) => ({
  articles: [],
  categories:[],
  handleArticles: (categories,articles) => {
    set((state) => ({
      articles:articles,
      categories:categories
    }));
  },
  reset: () => {
    set({
      articles: [],
      categories:[],
    });
  },
});

const useArticlesStore = create(ArticlesStore);

export default useArticlesStore;