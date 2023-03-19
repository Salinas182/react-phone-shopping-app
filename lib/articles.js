import articlesApi from "./api/articles-api";

export async function getArticlesIds() {
  const { data } = await articlesApi.get('api/product');
  let articlesIds = [];
  data?.forEach((article) => {
    articlesIds.push(
      {
        params: {
          id: article.id
        }
      }
    );
  });
  return articlesIds;
}

export async function getArticleData(id) {
  const { data } = await articlesApi.get(`api/product/${id}`);
  return {
    id,
    articleInfo: data,
  };
}
