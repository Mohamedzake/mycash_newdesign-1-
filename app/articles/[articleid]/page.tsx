// // import { articles } from "../articles";
// // "use client";

// // import { useParams } from "next/navigation";
// import React from "react";

// // export async function generateStaticParams() {
// //   const articles = [{ articleid: "1" }, { articleid: "2" }, { articleid: "3" }]; // Replace with real data source

// //   return articles;
// // }

// // const ArticleDetails = ({ params }: { params: { articleid: string } }) => {
// const ArticleDetails = () => {
//   // const { id } = useParams();
//   // console.log(id);
//   // const id = params.articleid;
//   // console.log(id);
//   // const unwrappedParams = React.use(params);

//   return <div className="p-6">Details for the post </div>;
// };

// export default ArticleDetails;

"use client";
import React from "react";
import { useParams } from "next/navigation";
import { articles } from "../page";

const ArticleDetails = () => {
  const { articleid } = useParams();

  const article = articles.find((a) => a.id === articleid);
  console.log(article);
  if (!article) {
    return <div className="p-6 text-red-500">Article not found!</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl">{article.id}</h2>
      <h1 className="text-2xl font-bold text-primary-blue">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default ArticleDetails;
