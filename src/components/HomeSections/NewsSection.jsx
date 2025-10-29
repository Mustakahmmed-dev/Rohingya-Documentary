"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const sampleNews = [
  {
    id: 1,
    title: "Rohingya Voices Rise as New Investigations Begin",
    date: "October 25, 2025",
    excerpt:
      "Global human rights groups renew calls for accountability amid new evidence of war crimes in northern Rakhine.",
    image: "/images/Hero2.jpg",
    slug: "rohingya-voices-rise",
  },
  {
    id: 2,
    title: "Satellite Analysis Reveals Systematic Village Destruction",
    date: "October 22, 2025",
    excerpt:
      "Recent satellite imagery provides visual proof of large-scale burning in Rohingya settlements.",
    image: "/images/History1.jpg",
    slug: "village-destruction-satellite",
  },
  {
    id: 3,
    title: "Regional Leaders Call for Safe Repatriation Efforts",
    date: "October 19, 2025",
    excerpt:
      "ASEAN ministers discuss new frameworks for voluntary repatriation under international supervision.",
    image: "/images/Hero2.jpg",
    slug: "repatriation-efforts",
  },
  {
    id: 4,
    title: "New Report Highlights Education Crisis in Refugee Camps",
    date: "October 15, 2025",
    excerpt:
      "A UNICEF-backed report shows thousands of Rohingya children still without formal education access.",
    image: "/images/History1.jpg",
    slug: "education-crisis",
  },
];

export default function NewsSection() {
  const featured = sampleNews[0];
  const others = sampleNews.slice(1);

  return (
    <section className="bg-neutral-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold">News & Updates</h2>
          <Link
            href="/news"
            className="text-red-500 hover:text-red-400 font-semibold transition-all flex items-center gap-1"
          >
            See all news <ChevronsRight />
          </Link>
        </div>
        <p>Stay up to date with our latest news and updates from Arakan state of Myanmar. We are writing from the most persecuted Rohingya community in Arakan state. </p>

        <Link
          href={`/news/${featured.slug}`}
          className="group relative rounded-xl overflow-hidden block"
        >
          <div className="relative h-[380px] md:h-[450px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 max-w-xl">
              <p className="text-gray-300 text-sm mb-1">{featured.date}</p>
              <h3 className="text-3xl font-semibold group-hover:text-red-500 transition-colors mb-2">
                {featured.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {featured.excerpt}
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          {others.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.slug}`}
              className="group flex flex-row bg-[#1a1a1a] rounded-xl overflow-hidden hover:bg-[#222] transition-all duration-300 border border-[#222]"
            >
              <div className="w-[45%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-44 md:h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center p-4 md:p-6 w-[55%] sm:w-[60%] md:w-[65%] lg:w-[70%]">
                <p className="text-gray-400 text-xs md:text-sm mb-1">{news.date}</p>
                <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:text-red-500 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm line-clamp-3">
                  {news.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
