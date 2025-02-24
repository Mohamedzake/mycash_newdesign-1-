// import { articles } from "../articles";

import React from "react";

export async function generateStaticParams() {
  const articles = [{ articleid: "1" }, { articleid: "2" }, { articleid: "3" }]; // Replace with real data source

  return articles;
}

const ArticleDetails = ({ params }: { params: { articleid: string } }) => {
  const id = params.articleid;
  console.log(id);
  // const unwrappedParams = React.use(params);

  return <div className="p-6">Details for the post </div>;
};

export default ArticleDetails;
