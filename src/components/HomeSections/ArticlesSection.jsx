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

const ArticlesSection = ({ articles }) => {
    const latestArticles = sampleArticles.slice(0, 6);

    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Headline top side */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-1 justify-between items-center mb-8">
                    <h2 className="text-xl md:text-4xl font-bold capitalize">Latest documentary articles </h2>
                    <Link href="/articles" className="text-blue-500 hover:text-red-500 font-semibold flex items-center">
                        View All Articles <ChevronsRight />
                    </Link>
                </div>

                {/* For article container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestArticles.map((article) => (
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
        </section>
    );
};

export default ArticlesSection;
