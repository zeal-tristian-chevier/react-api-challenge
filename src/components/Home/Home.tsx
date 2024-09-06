import axios from "axios";
import React, { useEffect, useState } from "react";

type Article = {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | undefined;
    publishedAt: Date;
    content: string | null;
};
// const exampleArticle: Article = {
//     source: {
//         id: null,
//         name: "Gizmodo.com",
//     },
//     author: "Ed Cara",
//     title: "Even Cats Can Mourn, Study Suggests",
//     content:
//         "A recent study is the latest to throw into the question the idea that cats are unfeeling masters of their domain. Based on interviews with hundreds of cat owners, scientists have found evidence that … [+2457 chars]",
//     description:
//         "Scientists have found evidence that cats do grieve after the loss of another pet in the home, including dogs.",

//     publishedAt: new Date("2024-08-07T20:55:56Z"),
//     url: "https://gizmodo.com/even-cats-can-mourn-study-suggests-2000484323",
//     urlToImage: "https://gizmodo.com/app/uploads/2024/08/sad-cat-1.jpg",
// };
const Home = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [search, setSearch] = useState("");
    const [pagination, setPagination] = useState(10);
    const [error, setError] = useState("");

    // If search is no longer empty remove error message
    useEffect(() => {
        if (search.length > 0) {
            setError("");
        }
    }, [search]);

    // Fetch data from the API
    async function fetchData() {
        if (search.length <= 0) {
            setNews([]);
            setError("");
            return;
        }
        try {
            axios
                .get(
                    `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
                )
                .then((res) => {
                    const newsData: Article[] = res.data.articles;
                    if (newsData.length <= 0) {
                        setError("No news found");
                        return;
                    }
                    console.log(newsData[0]);
                    setNews(newsData);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-[100vh] p-5">
            <div className="flex justify-center items-center h-20 gap-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-96 h-10 rounded-md border-2 border-gray-300 p-2"
                    placeholder="Search for news"
                />
                <button
                    type="submit"
                    onClick={fetchData}
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.slice(0, pagination).map((article, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md">
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                            className="h-48 w-full object-cover rounded-md"
                        />
                        <h1 className="text-lg font-semibold mt-2">
                            {article.title}
                        </h1>
                        <p className="text-sm mt-2">{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 mt-2"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                {news.length > pagination && (
                    <button
                        onClick={() => setPagination(pagination + 10)}
                        className="bg-blue-500 text-white p-2 rounded-md"
                    >
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};
export default Home;
