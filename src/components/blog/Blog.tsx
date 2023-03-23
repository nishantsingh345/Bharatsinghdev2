import React from "react";
import Link from "next/link";

const articles = [
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "Lazy loading React components with React.lazy",
    para: "Learn how to improve performance by reducing the bundle size of your application.",
  },
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "Lazy loading React components with React.lazy",
    para: "Learn how to improve performance by reducing the bundle size of your application.",
  },
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "Lazy loading React components with React.lazy",
    para: "Learn how to improve performance by reducing the bundle size of your application.",
  },
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "Lazy loading React components with React.lazy",
    para: "Learn how to improve performance by reducing the bundle size of your application.",
  },
//   {
//     img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
//     title: "Lazy loading React components with React.lazy",
//     para: "Learn how to improve performance by reducing the bundle size of your application.",
//   },
//   {
//     img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
//     title: "Lazy loading React components with React.lazy",
//     para: "Learn how to improve performance by reducing the bundle size of your application.",
//   },
];

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className=" bg-slate-900 py-16 sm:py-24 lg:py-32 lg:-mb-12">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          Latest Blog
        </p>
      </div>
      <div className="mt-12 mx-auto max-w-md px-4 flex flex-col gap-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl">
        {articles.map((item, index) => (
          <div
            key={index}
            className="ring-transparent flex border-transparent hover:ring-blue-500 border-solid ring-2 rounded-xl transition duration-300 ease-in-out undefined"
          >
            <Link
              href="/"
              className="flex flex-col lg:flex-row m-1 w-full gap-8 border-0 bg-slate-800 overflow-hidden rounded-lg isolate ease-in-out"
            >
              <div className="hidden lg:block">
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained flex-grow h-full bg-blue-500">
                  <div className="w-[160px] block">
                    <img className="w-full static" src={item?.img} alt="" />
                  </div>
                </div>
              </div>
              <div className="p-8 lg:py-8 lg:pr-8 h-fit flex gap-4 flex-col lg:flex-row flex-grow">
                <div className="flex-shrink">
                  <p className="text-xl font-semibold text-white mb-2">{item?.title}</p>
                  <p className="text-gray-300 tracking-tight">{item?.para}</p>
                </div>
              </div>
              <div className="flex space-x-1 text-base whitespace-nowrap m-0 lg:ml-auto my-auto text-gray-500">
                <p>May 17th, 2022</p>
                <span>3. min read</span>
              </div>
            </Link>
          </div>
        ))}

        <div className="mt-5 flex">
          <Link
            href="/"
            className="block ring-2 ring-slate-800 m-auto py-3 px-8 rounded-md shadow text-white font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
          >
            See ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
