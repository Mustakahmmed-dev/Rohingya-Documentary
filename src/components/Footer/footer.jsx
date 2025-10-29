"use client";
import Link from "next/link";
import { Mail, Youtube, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            AA<span className="text-blue-500">RA</span>
          </h2>
          <p className="text-sm leading-relaxed">
            AARA is a documentary and archival platform preserving the truth,
            history, and resilience of the Rohingya people through verified
            stories, research, and media.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/documentaries" className="hover:text-red-500">Documentaries</Link></li>
            <li><Link href="/history" className="hover:text-red-500">Rohingya History</Link></li>
            <li><Link href="/news" className="hover:text-red-500">News & Updates</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">
            For any kind of information regarding the documentaries against the Rohingya Atrocities committed by Myanmar military and Arakan Army terrorists and beyond.
          </p>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <Link href="mailto:info@aara.org" className="hover:text-red-500">
              info@aara.org
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-red-500">
              <Youtube size={22} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Twitter size={22} />
            </Link>
            <Link href="mailto:info@aara.org" className="hover:text-red-500">
              <Mail size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AA<span className="text-blue-500">RA</span> | Rohingya Documentary Archives. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
