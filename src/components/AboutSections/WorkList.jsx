"use client";

import React from "react";

const WorkItem = ({ title, children }) => (
  <div className="bg-[#101010] border border-[#1f1f1f] rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
  </div>
);

export default function WorkList() {
  return (
    <section id="what-we-do" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">What we do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WorkItem title="Atrocity documentation">
            We collect and verify eyewitness testimony, photographic and video evidence, and
            field reports. Each item is assessed for provenance and cross referenced to
            corroborate accounts and build a reliable record.
          </WorkItem>

          <WorkItem title="Survivor testimony and protection">
            We prioritise survivor dignity and safety. Testimonies are recorded with informed
            consent and stored according to data protection practices that minimise risk of harm.
          </WorkItem>

          <WorkItem title="Research and analysis">
            Our research synthesises primary materials into evidence-based reports, timelines
            and thematic briefings that support academic research and legal review.
          </WorkItem>

          <WorkItem title="Countering disinformation">
            We monitor narratives and digital content that seek to distort or erase Rohingya
            experiences. Verified material and contextual analysis are published to correct
            false claims.
          </WorkItem>

          <WorkItem title="Advocacy and partnerships">
            We work with journalists, human rights organisations and legal practitioners to ensure
            that documented evidence reaches decision makers and international forums.
          </WorkItem>

          <WorkItem title="Public records and archives">
            We maintain a searchable and citable archive of verified materials, preserved to
            support historical memory and future accountability mechanisms.
          </WorkItem>
        </div>
      </div>
    </section>
  );
}
