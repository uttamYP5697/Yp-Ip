"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { animatePageOut } from "@/utils/animations";
import { useRouter } from "next/navigation";

const Casesutdybox = (props) => {
  console.log("🚀 ~ Casesutdybox ~ props:", props)
  const router = useRouter();
  const [isVisible, setVisible] = useState(true);
  const domRef = React.useRef();

  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => setVisible(entry.isIntersecting));
    // });
    // observer.observe(domRef?.current);
    // return () => observer?.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } group casestudy-box even:mt-0 md:even:mt-10 xl:even:mt-16.5 h-fit border border-gray-700 cursor-pointer overflow-hidden rounded-[30px] xl:rounded-[60px] bg-gray-900 hover:shadow-lg transition-all`}
    >
      <div
        className="casestudy-top"
        
      >
        {/* Image Section */}
        <div className="casestudy-img relative overflow-hidden">
          {props.datax.thumbnail_image && (
            <div className="overflow-hidden rounded-[30px] xl:rounded-[60px] casestudy-img-inner">
              <Image
                src={props.datax.thumbnail_image.src}
                className="w-full transition-all group-hover:scale-125 duration-700"
                width="1636"
                height="440"
                alt={props.datax.title}
              />
            </div>
          )}

          {/* Overlay */}
          <div className="casestudy-overlay w-full transition-all duration-700 bg-[#000000a8] opacity-0 h-0 group-hover:h-full group-hover:opacity-100 absolute bottom-0 left-0 p-4 md:p-8">
            <div className="flex flex-col h-full justify-end">
              {props.datax.logo && (
                <Image
                  src={props.datax.logo}
                  className="mb-2 md:mb-6.5 max-w-full object-contain"
                  width="138"
                  height="80"
                  alt={props.datax.title}
                />
              )}
              {props.datax.sub_title && (
                <p className="text-xs xl:text-lg text-white font-light">
                  {props.datax.sub_title}
                </p>
              )}
              {props.datax.our_work_services?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {props.datax.our_work_services.map((single, index) => (
                    <div
                      key={index}
                      className="inline-block bg-white text-black border border-gray-300 rounded-full px-4 py-2 text-xs md:text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    >
                      {single.services_title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="casestudy-content mt-0 md:mt-6.5 p-4 md:p-6 flex justify-between items-center">
          {props.datax.title && (
            <h3
              onClick={() =>
                animatePageOut(`/our-portfolio/${props.datax.slug}`, router)
              }
              className="text-base md:text-lg uppercase font-bold text-white"
            >
              {props.datax.title}
            </h3>
          )}
          <Link
            href="#"
            scroll={false}
            onClick={() =>
              animatePageOut(`/our-portfolio/${props.datax.slug}`, router)
            }
            className="transition-transform group-hover:-rotate-90"
            title="arrows"
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19" cy="19" r="19" fill="white" />
              <path
                d="M13.5714 13.5716L16.2857 16.2859M24.4285 24.4288H14.7777M24.4285 24.4288V14.7779M24.4285 24.4288L19 19.0002L18.3214 18.3216"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Casesutdybox;
