/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="flex flex-col flex-1 group relative border-solid border-2 border-sky-100">
      <div className="min-h-80 scale-75 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 sm:scale-50 lg:aspect-none lg:h-80">
        <img src={article.imgUrl} alt={article.model} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
      </div>
      <div className="mt-1 text-center">
        <p className="text-sm font-medium text-gray-900 mb-2">{article.brand}</p>
        <div className="mb-2">
          <h3 className="text-sm text-gray-700">
            <Link href={`/articles/${article.id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {article.model}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 mt-4 mb-2">{article.price} €</p>
      </div>
    </div>
  )
}
