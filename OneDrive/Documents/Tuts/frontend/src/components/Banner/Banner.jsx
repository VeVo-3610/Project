import React from "react";
import Apple from "../../assets/png/apple.png";
import kiwi from "../../assets/png/kiwi.png";
import lemon from "../../assets/png/lemon.png";
import leaf from "../../assets/png/leaf.png";
import tomato from "../../assets/png/tomato.png";
import PrimaryButton from "../shared/PrimaryButton";
import { FaTachometerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1
            className="py-8 tracking-wider text-2xl
        font-semibold text-dark text-center "
          >
            Taste the Healthy Difference
          </h1>
          {/* Text content section*/}
          <div className="space-y-10">
            <div
              className="grid grid-cols-1
         sm:grid-cols-2 gap-4 py-10"
            >
              <div>
                <p>
                  {" "}
                  We know that <span className="text-primary">time</span>
                  is the greatest value in the modren world. Our healthy meal
                  plan delievery service Good Food in Miami is the answer for
                  those who want to eat healthy, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1
         sm:grid-cols-2 gap-4 py-10"
            >
              <div>
                <p>
                  {" "}
                  We know that <span className="text-primary">time</span>
                  is the greatest value in the modren world. Our healthy meal
                  plan delievery service Good Food in Miami is the answer for
                  those who want to eat healthy, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
            </div>
          </div>

          {/* button section */}
          <div
            className="flex justify-center mt-10 
          sm:mt-14"
          >
            <PrimaryButton />
          </div>
        </div>

        {/* bg fruits pngs */}
        <div
          className="absolute top-5 -left-16
        sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
        >
          <img src={leaf} alt="" className="max-w-[160px]" />
        </div>
        <div
          className="absolute -bottom-16 -left-16
        sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
        >
          <img src={tomato} alt="" className="max-w-[280px]" />
        </div>
        <div
          className="absolute top-5 -right-16
        sm:bottom-0 sm:right-0 opacity-50 sm:opacity-100"
        >
          <img src={lemon} alt="" className="max-w-[200px]" />
        </div>
        <div
          className="hidden sm:block absolute bottom-0
           right-0"
        >
          <img src={Apple} alt="" className="max-w-[160px]" />
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/3 
        -translate-x-1/2 opacity-50 sm:opacity-100"
        >
          <img src={kiwi} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
