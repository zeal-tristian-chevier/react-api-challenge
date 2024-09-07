import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "../../types";

type ArticleCardProps = {
    article: Article;
    searchValue: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, searchValue }) => {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
        navigate(`/article/${article.title}/${searchValue}`);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={article.urlToImage}
                alt={article.title}
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {article.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {article.description}
                </p>
                <button
                    onClick={handleReadMoreClick}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Read More
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;
