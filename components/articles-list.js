import { useState } from "react";
import ArticleCard from "./article-card";
import SearchBox from "./search-box";

export default function ArticlesList({ allArticlesData }) {
  const [articleToSearch, setArticleToSearch] = useState([]);

  return (
    <>
      <div className="flex flex-col-reverse flex-wrap sm:flex-row justify-end">
        <SearchBox setArticleToSearch={setArticleToSearch} articles={allArticlesData} />
      </div>

      <div className="bg-white">
        <div className="mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {articleToSearch?.length ?
            (
              articleToSearch?.map((article, index) => {
                return (
                  <ArticleCard article={article} key={`article-${index}`} />
                )
              })
            ) :
            (
              allArticlesData?.map((article, index) => {
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
