import { useEffect } from "react";
import Head from "next/head";
import Layout from "components/Layout";
import { getArticleData, getArticlesIds } from '../../lib/articles';
import { ArticleDetails } from "components/article-details";

export async function getStaticPaths() {
  const paths = await getArticlesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  const oneHour = 3600;
  return {
    props: {
      articleData,
    },
    revalidate: oneHour
  };
}

const ArticleView = ({ articleData }) => {
  const article = articleData?.articleInfo;

  useEffect(() => {
    sessionStorage.setItem('device', `${article?.brand} ${article?.model}`);
  },[article]);

  return (
    <>
      <Layout>
        <Head>
          <title>{article?.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ArticleDetails article={article} />
      </Layout>
    </>
  )
};

export default ArticleView;
