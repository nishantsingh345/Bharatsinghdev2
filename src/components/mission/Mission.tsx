import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="bg-slate-800 py-8 ">
      <div className="mx-auto py-16 max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">About</h2>
          </div>

          <div className="flex flex-wrap lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 lg:gap-12 sm:space-y-0">
                  <div className="relative sm:aspect-w-3 sm:aspect-h-4">
                    <div>
                      <div className="absolute border-blue-500 top-0 left-0 right-0 bottom-0 h-full -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 md:-translate-x-5 md:-translate-y-5 rounded-lg opacity-30 border-2"></div>
                      <div className="object-cover grayscale overflow-hidden w-fit z-10 shadow-lg rounded-lg hover:-translate-x-5 hover:-translate-y-5 transition duration-500 hover:filter-none">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-full rounded-lg">
                          <div>
                            <img
                              className="h-96"
                              src="https://pps.whatsapp.net/v/t61.24694-24/312283883_131711346444948_5224899946872106202_n.jpg?ccb=11-4&oh=01_AdQjh146BoJ-8X-8njvX6rLNe2P0P1S4Aa8A8iC9PZvLxg&oe=64287459"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 text-white font-medium space-y-1">
                        <h1>Bharat Singh</h1>
                        <p className="text-blue-500">Full Stack Developer</p>
                      </div>
                      <div className="text-lg text-gray-400">
                        <p className="mb-2">
                          I ve been working as a software developer since 2017, mostly at small to
                          medium sized companies.
                        </p>
                        <p className="mb-2">
                          I ve been working as a software developer since 2017, mostly at small to
                          medium sized companies.
                        </p>
                        <p className="mb-2">
                          I ve been working as a software developer since 2017, mostly at small to
                          medium sized companies.
                        </p>
                        <p className="mb-2">
                          I ve been working as a software developer since 2017, mostly at small to
                          medium sized companies.
                        </p>
                      </div>
                      <div className="flex space-x-6 md:order-2 text-gray-400 hover:text-gray-300">
                        <Link href="/">
                          <FaFacebook size={25} />
                        </Link>
                        <Link href="/">
                          <FaLinkedin size={25} />
                        </Link>
                        <Link href="/">
                          <FaInstagram size={25} />
                        </Link>
                        <Link href="/">
                          <FaTwitter size={25} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Link
              href="/"
              className="ml-auto text-gray-300 font-medium tracking-lighter py-3 px-6 ring-2 ring-slate-400 transition duration-300 hover:ring-blue-500/70 hover:text-blue-500 hover:bg-blue-500/10 rounded-xl text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
