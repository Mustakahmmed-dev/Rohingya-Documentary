"use client";

import React from "react";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="bg-[#070707] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mission</h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Our mission is to document, verify and publish evidence of crimes and systemic
              abuses committed against Rohingya communities. We gather testimony, imagery and
              archival materials in order to create a durable record that supports ethical
              journalism, independent research and legal processes. We focus on accuracy,
              verification and the dignity of survivors in every stage of documentation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Vision</h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We envision a future in which truth leads to accountability, reparations and
              meaningful protections for Rohingya communities. We aim to make documented evidence
              accessible to researchers, human rights organisations and public institutions so
              that crimes are not denied, erased or forgotten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
