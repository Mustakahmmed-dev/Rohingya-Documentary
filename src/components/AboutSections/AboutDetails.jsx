"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Film, FileText, Image } from "lucide-react";

export default function AboutDetails() {
    return (
        <section className="relative bg-linear-to-b from-[#e9f3ff] to-[#dbeaff] text-gray-800 py-20 px-6 md:px-16 overflow-hidden">

            <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-6xl mx-auto relative">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className=" max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                        Who We Are and What We Do
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Action Against Rohingya Atrocities (AARA) is an
                        independent initiative committed to documenting and preserving evidence of
                        crimes, discrimination, and systematic persecution against the Rohingya
                        population in Arakan, Myanmar. The organization conducts continuous
                        research, field verification, and documentation to uncover the realities of
                        violence, displacement, and human-rights violations that have been
                        deliberately suppressed or ignored by mainstream narratives.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed mt-5">
                        AARA was established with a single objective: to confront denial through
                        truth. Our mission is to archive and present verified records of atrocities
                        committed against the Rohingya by both the Myanmar military and rakhine armed
                        groups operating in Rakhine State. Through visual documentation, survivor
                        testimonies, digital archiving, and independent research, we seek to ensure
                        that these crimes are not erased from collective memory. We work to create
                        an accessible and reliable source of information that serves researchers,
                        advocates, and institutions pursuing justice and accountability.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed mt-5">
                        AARA believes that documentation is a form of resistance. Each photograph,
                        video, and testimony represents a record of truth that challenges impunity
                        and strengthens the collective voice of the Rohingya community. Our work is
                        guided by the principles of accuracy, dignity, and transparency, ensuring
                        that every piece of information contributes to the historical and moral
                        record of the Rohingya struggle for justice, identity, and recognition.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {resources.map((res, i) => (
                        <Link
                            key={i}
                            href={res.href}
                            className="group bg-white/70 backdrop-blur-md border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {res.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                                        {res.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">{res.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const resources = [
    {
        title: "Documentary & Videos",
        desc: "Explore visual evidence and field recordings revealing the realities on the ground.",
        href: "/documentaries",
        icon: <Film size={22} />,
    },
    {
        title: "Articles & Reports",
        desc: "Read analytical articles and verified reports from our researchers and partners.",
        href: "/articles",
        icon: <FileText size={22} />,
    },
    {
        title: "Photo Gallery",
        desc: "Browse the gallery capturing moments of resilience, tragedy, and truth.",
        href: "/rohingya-genocide-gallery",
        icon: <Image size={22} />,
    },
];
