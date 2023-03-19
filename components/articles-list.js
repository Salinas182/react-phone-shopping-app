import { useState } from "react";
import ArticleCard from "./article-card";
import SearchBox from "./search-box";
import SortButtons from "./sort-buttons";

export default function ArticlesList({ allArticlesData }) {
  const [articles, setArticles] = useState(allArticlesData);
  const [articleToSearch, setArticleToSearch] = useState([]);

  return (
    <>
      <div className="flex flex-col-reverse flex-wrap sm:flex-row justify-end">
        <SortButtons articles={articles} setArticles={setArticles} />
        <br />
        <SearchBox setArticleToSearch={setArticleToSearch} articles={articles} />
      </div>

      <div className="bg-white">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {articleToSearch?.length ?
            (
              articleToSearch?.map((article, index) => {
                return (
                  <ArticleCard article={article} key={`article-${index}`} />
                )
              })
            ) :
            (
              articles?.map((article, index) => {
                return (
                  <ArticleCard article={article} key={`article-${index}`} />
                )
              })
            )
          }
        </div>
      </div>
    </>
  )
};
