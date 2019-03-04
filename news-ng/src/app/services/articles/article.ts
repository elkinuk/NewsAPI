export interface Article {
    id: string;
    title: string;
    author: string;
    publishedAt: string;
    source: {
        name: string;
        id: string;
    };
    description: string;
    content: string;
    url: string;
    urlToImage: string;
}
