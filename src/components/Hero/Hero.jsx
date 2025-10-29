"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { ChevronsDown, ArrowDownToLine } from "lucide-react";

const Hero = () => {
    const slides = [
        {
            title: "Reports and Articles",
            desc: "Detailed reports and field-based articles documenting patterns of violence, ethnic cleansing, and systematic persecution against the Rohingya. These works gather eyewitness accounts, verified data, and evidence from across Rakhine State and refugee camps.",
            bg: "/images/Hero2.jpg",
            btn: "Read Reports",
            href: "/articles",
        },
        {
            title: "Documentary Films",
            desc: "A visual record of the Rohingya genocide, filmed testimonies, field footage, and investigations that expose crimes committed by the Myanmar military and armed groups across Arakan. Each film preserves voices long silenced and memories under threat.",
            bg: "/images/Hero1.png",
            btn: "Explore Films",
            href: "/videos",
        },
        {
            title: "Rohingya History",
            desc: "An archive of historical evidence tracing the Rohingya people’s centuries-old roots in Arakan, their culture, and their struggle for recognition. This section connects past and present, from colonial records to the ongoing displacement and identity erasure.",
            bg: "/images/History1.jpg",
            btn: "Discover History",
            href: "/rohingya-history",
        },
    ];

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                effect="fade"
                loop={true}
                className="h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 max-w-3xl text-white">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className=" text-2xl md:text-5xl font-bold mb-4"
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="text-gray-300 tex-sm md:text-lg mb-6"
                                >
                                    {slide.desc}
                                </motion.p>
                                <div className="flex gap-5 items-center justify-between ">
                                    <motion.a href={slide.href}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-blue-600 hover:bg-red-500 transition px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold w-fit"
                                    >
                                        {slide.btn}
                                    </motion.a>
                                    <a href="#latestDocumentaries" className="animate-bounce text-blue-500 font-semibold"> <ChevronsDown size={40} /> </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    );
};

export default Hero;
