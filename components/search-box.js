export default function SearchBox({ setArticleToSearch, articles }) {
  const searchArticle = (userInput) => {
    if (!userInput) {
      setArticleToSearch(null);
      return;
    }

    const articlesFound = articles?.filter((article) => article.model.includes(userInput) || article.brand.includes(userInput));
    setArticleToSearch(articlesFound || null);
  }

  return (
    <>
      <div className="relative text-gray-600 focus-within:text-gray-400 flex-none">
        <input
          type="search"
          className="py-2 text-sm text-gray-900 bg-white rounded-md pl-10 focus:outline-none focus:bg-slate-200 border-solid border-2 border-slate-200"
          placeholder="Buscar"
          id="searchBox"
          onChange={(e) => searchArticle(e.target.value)}
        />
      </div>
    </>
  )
}
