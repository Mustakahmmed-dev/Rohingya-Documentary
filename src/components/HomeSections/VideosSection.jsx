"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const videos = [
    {
        id: 1,
        title: "Life in Rohingya Refugee Camps",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/images/video1.jpg",
    },
    {
        id: 2,
        title: "Eyewitness: 2017 Genocide",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        thumbnail: "/images/video2.jpg",
    },
    {
        id: 3,
        title: "Rohingya Stories from the Camps",
        videoUrl: "/videos/video3.mp4",
        thumbnail: "/images/video3.jpg",
    },
    {
        id: 4,
        title: "Children of Rohingya",
        videoUrl: "/videos/video4.mp4",
        thumbnail: "/images/video4.jpg",
    },
];

export default function VideosSectionSimple() {
    return (
        <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                        Documentary Videos
                    </h2>
                    <Link
                        href="/videos"
                        className="text-blue-400 hover:text-red-500 font-medium"
                    >
                        View All Videos
                    </Link>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video bg-black">
                                {video.videoUrl.includes("youtube.com") ||
                                    video.videoUrl.includes("youtu.be") ? (
                                    <iframe
                                        src={video.videoUrl}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <video
                                        controls
                                        poster={video.thumbnail}
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={video.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-base md:text-lg font-semibold mb-1">
                                    {video.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Independent stories told through authentic voices.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/videos"
                        className="text-blue-400 hover:text-red-500 font-semibold flex items-center "
                    >
                        See all videos <ChevronsRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
