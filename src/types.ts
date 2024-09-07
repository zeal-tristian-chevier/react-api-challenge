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

export type Article = {
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
