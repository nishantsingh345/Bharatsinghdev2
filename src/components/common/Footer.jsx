import React from "react";
import Link from "next/link";
import Container from "../common/Container";
import { FaPhone, FaAddressBook, FaVoicemail, FaLocationArrow } from "react-icons/fa";

const corprate = [
  {
    id: 1,
    title: "Beautiful Ruby Stone Ring",
    url: "/corprate/refund",
  },
  {
    id: 2,
    title: "Flower Design Silver Ring",
    url: "/corprate/refund",
  },
  {
    id: 3,
    title: "Sterling Silver Plan Flower Ring",
    url: "/corprate/privacy",
  },
  {
    id: 4,
    title: "Plan Flower of Life Ring",
    url: "/corprate/about",
  },
];

const Quicklinks = [
  {
    id: 1,
    title: "Our Services",
    url: "/",
  },
  {
    id: 2,
    title: "Custom Jewelry Manufacture",
    url: "/",
  },
  {
    id: 3,
    title: "Size Chart",
    url: "/",
  },
  {
    id: 4,
    title: "Stone Story",
    url: "/",
  },
  {
    id: 5,
    title: "All Gemstones",
    url: "/",
  },
  {
    id: 6,
    title: "Faq",
    url: "/",
  },
  {
    id: 7,
    title: "Contact Us",
    url: "/",
  },
  {
    id: 8,
    title: "My Account",
    url: "/",
  },
];

const gallery = [
  {
    id: 1,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
    url: "/",
  },
  {
    id: 2,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
    url: "/image",
  },
  {
    id: 3,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 4,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 5,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 6,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 7,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 8,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
  {
    id: 9,
    src: "https://www.surabhiinternational.com/wp-content/uploads/2020/08/83592_large-150x150.jpg",
  },
];

function Footer() {
  return (
    <div className="bg-[#272534] py-12 px-4  text-white lg:px-12">
      <Container>
        <div className="space-y-6">
          <div className="grid lg:grid-cols-4">
            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Contact Details</p>
              <hr className="my-2   w-32 text-white" />
              <ul className="flex flex-col gap-4 ">
                <li className="flex items-center gap-2">
                  <FaAddressBook /> <span>Surabhi International</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaLocationArrow /> <span>B-40 Sector-88 Noida, India, Pin - 201306</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone /> <span>+91-9810269830</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaVoicemail /> <span>mayank008@hotmail.com</span>
                </li>
              </ul>
              <div className="flex items-center gap-5">
                <img
                  className="w-[105px] h-[46]"
                  src="https://www.surabhiinternational.com/wp-content/uploads/2020/08/logo2.jpg"
                  alt=""
                />
                <img
                  className="w-[105px] h-[46]"
                  src="https://www.surabhiinternational.com/wp-content/uploads/2020/08/logo2.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Quick Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {Quicklinks.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer hover:text-[#C1184F] hover:underline hover:underline-offset-2">
                      {item?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Featured Product</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {corprate.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className=" flex items-center justify-between gap-2 cursor-pointer  hover:underline hover:underline-offset-2 hover:text-[#C1184F]">
                      {item?.title}
                      <img
                        className="w-7 h-7"
                        src="https://www.surabhiinternational.com/wp-content/uploads/2020/10/Ring-00134-300x300.jpg"
                        alt=""
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Gallery</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="grid grid-cols-3 gap-2">
                {gallery.map((item, index) => (
                  <Link key={index} href={""}>
                    <img className="h-[82px] w-[82px]" src={item?.src} alt="" />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
