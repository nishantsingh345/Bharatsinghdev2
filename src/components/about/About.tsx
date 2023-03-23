import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const About = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="bg-slate-800">
      <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24 z-10">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6">
                  <span>React and JavaScript tutorials </span>
                  <span className="text-blue-500">delivered to your inbox</span>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Join over 1,000 developers who receive my tutorials via email.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      action=""
                      className="sm:max-w-xl sm:mx-auto lg:mx-0"
                    >
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="Email"></label>
                          <input
                            {...register("First name", { required: true, maxLength: 80 })}
                            type="text"
                            placeholder="Email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 text-lg px-4 rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        No spam. Unsubscribe at any time.
                      </p>
                      <div className="mt-6 md:mt-24 lg:mt-52 mb-0 lg:-mb-32">
                        <p className="text-sm text-slate-600 mb-4">What other are saying</p>
                        <div className="flex flex-wrap sm:flex-nowrap gap-4">
                          <div className="px-4 py-6 ring-2 ring-indigo-400/70 text-slate-400 relative z-10 text-sm bg-slate-700 rounded-lg transition duration-300 hover:-translate-y-5">
                            <p className="z-10 inline-block">
                              The whole blog was helpful to understand the memory management
                              concept.
                            </p>
                            <div className="text-9xl text-slate-800/30 absolute left-0 -top-2 -z-10">
                              B
                            </div>
                          </div>
                          <div className="px-4 py-6 ring-2 ring-indigo-400/70 text-slate-400 relative z-10 text-sm bg-slate-700 rounded-lg transition duration-300 hover:-translate-y-5">
                            <p className="z-10 inline-block">
                              The whole blog was helpful to understand the memory management
                              concept.
                            </p>
                            <div className="text-9xl text-slate-800/30 absolute left-0 -top-2 -z-10">
                              B
                            </div>
                          </div>
                          <div className="px-4 py-6 ring-2 ring-indigo-400/70 text-slate-400 relative z-10 text-sm bg-slate-700 rounded-lg transition duration-300 hover:-translate-y-5">
                            <p className="z-10 inline-block">
                              The whole blog was helpful to understand the memory management
                              concept.
                            </p>
                            <div className="text-9xl text-slate-800/30 absolute left-0 -top-2 -z-10">
                              B
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </h1>
              </div>
            </div>

            <div className="mt-12 flex lg:relative overflow-hidden">
              <div className="ml-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained hidden w-full z-10 py-10 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none lg:block transition-opacity ease-in-out delay-1000">
                  <div className="max-width: 600px; display: block;">
                    <img
                      src="/download.svg"
                      alt=""
                      className="max-width: 100%; display: block position: static"
                    />
                  </div>
                </div>
                <img
                  src="/main.avif"
                  alt=""
                  className="opacity: 0 transition: opacity 500ms linear w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
