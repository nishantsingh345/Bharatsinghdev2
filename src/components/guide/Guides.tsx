import React from "react";
import Link from "next/link";

const cards = [
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "How TypeScript helps you build better React apps",
    para: " In which situations should you give React with TypeScript a try, and when is it better to stick to JavaScript? Speaking of my own experience…",
  },
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "How TypeScript helps you build better React apps",
    para: " In which situations should you give React with TypeScript a try, and when is it better to stick to JavaScript? Speaking of my own experience…",
  },
  {
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    title: "How TypeScript helps you build better React apps",
    para: " In which situations should you give React with TypeScript a try, and when is it better to stick to JavaScript? Speaking of my own experience…",
  },
];

type Props = {};

const Guides = (props: Props) => {
  return (
    <div className="relative bg-slate-900 py-16 sm:py-24 lg:py-32 ">
      <div className="relative ">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Guides
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-300">
            These are tutorials or articles that explain a topic from start to finish.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {cards.map((item, index) => (
            <div
              key={index}
              className="box-border flex ring-transparent hover:ring-blue-500 border-solid ring-2 rounded-xl transition duration-300 ease-in-out"
            >
              <Link
                href="/"
                className="m-1 flex-grow flex-col flex-1 flex rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-48 w-full object-cover rounded-lg overflow-hidden isolate">
                    <div className="max-width: 160px; display: block;">
                      <img
                        src={item?.img}
                        alt=""
                        className="opacity: 0; transition: opacity 500ms linear; object-fit: cover;"
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-white">{item?.title}</p>
                        <p className="mt-3 text-base text-gray-300">{item?.para}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;
