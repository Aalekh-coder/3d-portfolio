import React from "react";
import { testimonials } from "../constant";

const TestimonialCard = ({ testimonal }) => {
  return (
    <div className="col-span-1 bg-black-300 testimonial-card rounded-xl">
      <div className="">
        <div className="flex items-center justify-between">
          <img
            src={testimonal?.imgPath}
            alt="cover"
            className="md:w-36 md:h-36 w-24 h-24"
          />
          <img src="/images/quote.png" className="md:w-28 md:h-28 w-14 h-14" />
        </div>

        <div className="mt-10">
          <p className="md:text-2xl font-light">{testimonal?.review}</p>
        </div>

        <div>
          <div className="">
            <h1 className="text-blue-50 md:text-3xl text-lg font-medium mb-1">
              {testimonal?.name}
            </h1>
            <p className="md:text-xl text-sm opacity-70 font-light">{testimonal?.pos}</p>
          </div>
                  <div className="">
                      <img src="" alt="" />
                      <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
