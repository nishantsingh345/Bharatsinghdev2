import React from "react";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Notifyme = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="bg-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get notified about new tutorials
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-400">
            Join over 1,000 developers who receive React and JavaScript tutorials via email.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form action="" className="sm:flex">
            <input
              {...register("First name", { required: true, maxLength: 80 })}
              type="text"
              placeholder="Enter-Your-Email"
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800  focus:ring-white focus:border-white sm:max-w-xs rounded-md"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"></div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="text-xl text-gray-200">You Can Reach Me Here</p>
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
  );
};

export default Notifyme;
