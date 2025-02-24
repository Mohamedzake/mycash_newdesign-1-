import Link from 'next/link';
import React from 'react'

type ArticleCardProps = {
    id: string;
    title: string;
    excerpt: string;
  };
  const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, excerpt }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
        <Link href={`/articles/${id}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    );
  };
  export default ArticleCard;
