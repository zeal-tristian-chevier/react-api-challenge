import axios from "axios";
import React, { FC, useEffect, useRef, useState } from "react";
import VideoBackground from "../UI/VideoBackground";
import { Article } from "../../types";
import ArticleCard from "../UI/ArticleCard";
import { useNavigate, useParams } from "react-router-dom";

// Fetch news data based on search value
export async function fetchNewsData(
    searchValue: string
): Promise<Article[] | string> {
    if (searchValue.length <= 0) {
        return []; 
    }
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const newsData: Article[] = response.data.articles;
        const filteredData = newsData.filter(
            (article) => article.title !== "[Removed]"
        );
        if (filteredData.length <= 0) {
            return "No news found";
        }
        return filteredData;
    } catch (error) {
        console.error(error);
        return "Error fetching news";
    }
}

const Home = () => {

    const navigate = useNavigate();
    const { searchValue } = useParams<{ searchValue: string }>(); 
    const targetRef = useRef<HTMLDivElement>(null);
    const [news, setNews] = useState<Article[]>([]);
    const [search, setSearch] = useState(searchValue || "");
    const [pagination, setPagination] = useState(10);
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState("");
    const [prevSearch, setPrevSearch] = useState<string>("");

    // If the params consist of a search value already, refetch the data
    useEffect(() => {
        async function fetchData() {
            if (searchValue) {
                await fetchNews(searchValue);
            }
        }
        fetchData();
    }, [searchValue]);

    // If search is no longer empty remove error message
    useEffect(() => {
        if (search.length > 0) {
            setError("");
        }
    }, [search]);

    // Scroll to the targetRef when clicked
    useEffect(() => {
        if (clicked && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setClicked(false);
    }, [clicked]);

    // Fetch data from the API based on the search value
    const fetchNews = async (searchValue: string) => {

        // Prevent fetching if search value hasn't changed
        if (searchValue === prevSearch) {
            return;
        }
        setPrevSearch(searchValue);
        setNews([]); // Clear the news articles
        const result = await fetchNewsData(searchValue);
        if (typeof result === "string") {
            setError(result); // Error message or "No news found"
        } else {
            navigate(`/${searchValue}`)
            setNews(result); // Set the news articles
        }
    };

    return (
        <div className="">
            <VideoBackground />
            <form
                className="w-[20rem] sm:w-[30rem] absolute top-[18%] md:top-[40%] lg:top-[60%] left-1/2 -translate-x-1/2"
                onSubmit={(e) => {
                    e.preventDefault();
                    setClicked(true);
                    fetchNews(search);
                }}
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm rounded"
                        placeholder="Search any topic.."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="">
                <div>
                    {error && (
                        <p className="text-red-500 text-center p-5 bold text-lg">
                            {error}
                        </p>
                    )}
                </div>
                <div
                    className="place-items-center sm:place-items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-3"
                    ref={targetRef}
                >
                    {news.slice(0, pagination).map((article, index) => (
                        <ArticleCard key={index} article={article} searchValue={search}/>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-4 mb-4">
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
        </div>
    );
};

export default Home;
