"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "/images/Hero1.png",
    title: "Rohingya refugees crossing the Naf River, 2017",
  },
  {
    src: "/images/Hero2.jpg",
    title: "Makeshift shelters in Kutupalong refugee camp",
  },
  {
    src: "/images/History1.jpg",
    title: "Children attending makeshift schools in camps",
  },
  {
    src: "/images/Hero1.png",
    title: "Portrait of displaced Rohingya woman",
  },
  {
    src: "/images/Hero2.jpg",
    title: "Aid distribution in Cox’s Bazar camp",
  },
  {
    src: "/images/History1.jpg",
    title: "Evening prayer in temporary camp mosque",
  },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-neutral-950 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Photo Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 sm:h-56 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm text-gray-200">
                View Photo
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryImages.map((img) => ({ src: img.src, title: img.title }))}
        />
      </div>
    </section>
  );
}
