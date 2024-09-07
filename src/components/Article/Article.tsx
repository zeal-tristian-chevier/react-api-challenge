import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Article } from "../../types";

const ArticlePage: React.FC = () => {
    const { title, searchValue } = useParams<{
        title: string;
        searchValue: string;
    }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
                );
                const articleData: Article = response.data.articles.find(
                    (article: Article) => article.title === title
                );
                setArticle(articleData);
            } catch (error) {
                setError("Error fetching article");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [title]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!article) return <div>No article found</div>;

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <img
                src={article.urlToImage}
                alt={article.title}
                className="mb-4 rounded-lg"
            />
            <p className="text-lg mb-4">{article.description}</p>
            <p className="text-sm text-gray-600 mb-4">
                {`Author: ${article.author || "Unknown"}`}
            </p>
            <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
            >
                Read More
            </a>
        </div>
    );
};

export default ArticlePage;
