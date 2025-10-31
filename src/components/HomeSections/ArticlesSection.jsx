"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const sampleArticles = [
    {
        id: 1,
        title: "Eyewitness Account: Maungdaw 2017",
        excerpt: "First-hand account of the military attack on villages in Maungdaw district...",
        img: "/images/Hero1.png",
        date: "March 25, 2023",
        slug: "eyewitness-maungdaw-2017"
    },
    {
        id: 2,
        title: "The 2012 Displacement Crisis",
        excerpt: "Documenting the forced displacement and the journey of thousands of Rohingya...",
        img: "/images/History1.jpg",
        date: "April 10, 2023",
        slug: "2012-displacement-crisis"
    },
    {
        id: 3,
        title: "The 2012 Displacement Crisis",
        excerpt: "Documenting the forced displacement and the journey of thousands of Rohingya...",
        img: "/images/History1.jpg",
        date: "April 10, 2023",
        slug: "2012-displacement-crisis"
    },
    {
        id: 4,
        title: "The 2012 Displacement Crisis",
        excerpt: "Documenting the forced displacement and the journey of thousands of Rohingya...",
        img: "/images/History1.jpg",
        date: "April 10, 2023",
        slug: "2012-displacement-crisis"
    },
    {
        id: 5,
        title: "The 2012 Displacement Crisis",
        excerpt: "Documenting the forced displacement and the journey of thousands of Rohingya...",
        img: "/images/History1.jpg",
        date: "April 10, 2023",
        slug: "2012-displacement-crisis"
    },
    {
        id: 6,
        title: "The 2012 Displacement Crisis",
        excerpt: "Documenting the forced displacement and the journey of thousands of Rohingya...",
        img: "/images/History1.jpg",
        date: "April 10, 2023",
        slug: "2012-displacement-crisis"
    },

];

const ArticlesSection = () => {
    const featuredArticle = sampleArticles[0];
    const leftArticles = sampleArticles.slice(1, 3);
    const rightArticles = sampleArticles.slice(3, 6);

    const latestArticles = sampleArticles.slice(0, 6);

    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Headline top side */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-1 justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold capitalize">Latest documentary articles </h2>
                    <Link href="/articles" className="text-blue-500 hover:text-red-500 font-semibold flex items-center">
                        View All Articles <ChevronsRight />
                    </Link>
                </div>

                {/* Articles section contents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                        {/* Featured big card */}
                        <Link
                            href={`/articles/${featuredArticle.slug}`}
                            className="group bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition relative"
                        >
                            <div className="h-80 md:h-96 w-full overflow-hidden">
                                <img
                                    src={featuredArticle.img}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                                    {featuredArticle.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-2 line-clamp-3">{featuredArticle.excerpt}</p>
                                <span className="text-gray-500 text-xs">{featuredArticle.date}</span>
                            </div>
                        </Link>

                        {leftArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/news/${article.slug}`}
                                className="group flex flex-row bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition relative"
                            >
                                <div className="w-[45%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-44 md:h-56 overflow-hidden">
                                    <img
                                        src={article.img}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-3 md:p-6 w-[55%] sm:w-[60%] md:w-[65%] lg:w-[70%] gap-1">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-sm line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm mb-1">{article.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        {rightArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/articles/${article.slug}`}
                                className="group bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition relative"
                            >
                                <div className="h-48 md:h-56 w-full overflow-hidden">
                                    <img
                                        src={article.img}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2 line-clamp-3">{article.excerpt}</p>
                                    <span className="text-gray-500 text-xs">{article.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
