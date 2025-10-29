"use client";

import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="bg-[#0f0f0f] border border-[#222] rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Support the record of truth</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Researchers, journalists and human rights organisations may request access to
              verified materials for scholarly or legal work. If you have materials to
              contribute, please reach out through our secure channels.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-5 py-3 text-sm md:text-base font-medium bg-red-600 hover:bg-red-500 rounded-md transition"
            >
              Contact the team
            </Link>

            <Link
              href="/contribute"
              className="inline-block px-5 py-3 text-sm md:text-base font-medium border border-gray-700 rounded-md hover:border-red-500 transition"
            >
              Contribute materials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
