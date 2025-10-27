"use client"
import { ChevronDown, ChevronsRight, ChevronUp, Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const drawerRef = useRef(null)

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setOpenDrawer(false)
        setOpenDropdown(false)
      }
    }

    if (openDrawer) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDrawer])

  // Toggle dropdown open/close for small devices
  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="sticky top-0 z-50">
      {/* For Large devices */}
      <div className="hidden md:flex bg-black text-white justify-between items-center p-3">
        <h2 className="text-xl font-semibold">AA<span className="text-blue-500">RA</span></h2>

        <ul className="flex items-center">
          <li><Link href="/" className="px-4 py-3 hover:text-red-500 ">Home</Link></li>
          <li><Link href="/" className="px-4 py-3 hover:text-red-500 ">About</Link></li>
          <li className="relative group">
            <button className="px-4 py-3 hover:text-red-500 flex items-center ">
              Documentaries
              <ChevronDown className="group-hover:hidden ml-1" />
              <ChevronUp className="hidden group-hover:block ml-1" />
            </button>
            <ul className="group-hover:block hidden absolute z-50 backdrop-blur-3xl bg-black/80 rounded w-[300px] py-3">
              <li><Link href="/" className="block px-3 py-2 hover:bg-red-500">Videos</Link></li>
              <li><Link href="/" className="block px-3 py-2 hover:bg-red-500">Article Stories</Link></li>
            </ul>
          </li>
          <li><Link href="/" className="px-4 py-3 hover:text-red-500 ">Rohingya History</Link></li>
          <li><Link href="/" className="px-4 py-3 hover:text-red-500 ">News & Updates</Link></li>
        </ul>

        <Search />
      </div>

      {/* For Small devices */}
      <div className="md:hidden bg-black text-white flex justify-between items-center p-3">
        <button onClick={() => setOpenDrawer(!openDrawer)}>
          {openDrawer ? <X /> : <Menu />}
        </button>
        <h2 className="text-xl font-semibold">AA<span className="text-blue-500">RA</span></h2>
        <Search />
      </div>

      {/* Drawer for mobile */}
      {openDrawer && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-50 backdrop-blur-2xl bg-black/80 text-white transition-all duration-300 overflow-y-auto"
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold">AA<span className="text-blue-500">RA</span></h2>
            <button onClick={() => setOpenDrawer(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="flex flex-col py-4 px-2 space-y-1">
            <li><Link href="/" onClick={() => setOpenDrawer(false)} className="px-4 py-3 hover:bg-red-500 rounded block">Home</Link></li>
            <li><Link href="/" onClick={() => setOpenDrawer(false)} className="px-4 py-3 hover:bg-red-500 rounded block">About</Link></li>

            {/* Dropdown with toggle for small devices */}
            <li>
              <button
                onClick={handleDropdownToggle}
                className="px-4 py-3 w-full flex justify-between items-center hover:bg-red-500 rounded"
              >
                <span>Documentaries</span>
                {openDropdown ? <ChevronUp /> : <ChevronDown />}
              </button>

              {openDropdown && (
                <ul className="bg-black/70 rounded w-full py-2 mt-1">
                  <li>
                    <Link href="/" onClick={() => setOpenDrawer(false)} className="block px-4 py-2 hover:bg-red-500 rounded">
                      <span className="flex items-center"><ChevronsRight size={18} className="text-gray-300 mr-1" /> Videos</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setOpenDrawer(false)} className="block px-4 py-2 hover:bg-red-500 rounded">
                      <span className="flex items-center"><ChevronsRight size={18} className="text-gray-300 mr-1" /> Article Stories</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link href="/" onClick={() => setOpenDrawer(false)} className="px-4 py-3 hover:bg-red-500 rounded block">Rohingya History</Link></li>
            <li><Link href="/" onClick={() => setOpenDrawer(false)} className="px-4 py-3 hover:bg-red-500 rounded block">News & Updates</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
