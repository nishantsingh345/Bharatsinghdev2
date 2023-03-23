import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  return (
    <nav className="bg-slate-800 flex justify-between">
      <div className="pt-6">
        <div className="relative max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/" className="text-2xl font-bold text-slate-50 font-signature">
                  Bharat Singh
                </Link>
              </div>
            <div className="hidden space-x-8 mt-auto md:flex md:ml-10">
              <Link
                className="text-base m-auto font-medium text-gray-200 hover:text-gray-300"
                href="/"
              >
                Blog
              </Link>
              <Link
                className="text-base m-auto font-medium text-gray-200 hover:text-gray-300"
                href="/"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-end">
        <div onClick={() => setOpen(!open)} className="cursor-pointer text-white p-4 z-10 ">
          {open ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="absolute z-10 top-12 inset-x-0 p-2 transition transform origin-top md:hidden opacity-100 scale-100"
          >
            <div className="rounded-lg shadow-md shadow-slate-700 bg-slate-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-2 space-y-1  ">
                <div className="pt-5 pb-6">
                  <Link
                    className="block px-3 py-2 rounded-md text-lg m-auto font-medium text-gray-200 hover:text-gray-300"
                    href="/"
                  >
                    Blog
                  </Link>
                  <Link
                    className="block px-3 py-2 rounded-md text-lg m-auto font-medium text-gray-200 hover:text-gray-300"
                    href="/"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
