import React from "react";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ HandlePopup }) => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div
          className="container min-h-[500px] relative
      z-10"
        >
          <h1
            className="pt-20 tracking-wider text-4xl
        font-semibold text-white text-center"
          >
            About Us
          </h1>

          {/* card section */}
          <div className="bg-white/80 p-10 my-10">
            Welcome to Babagyi, where passion for food meets culinary artistry.
            Our journey began with a love for bringing people together over
            delicious meals. Founded on the belief that food is not just
            sustenance but a celebration of flavors, textures, and cultures, we
            strive to provide quality dishes. At Babagyi, we curate an exquisite
            selection of [mention your specialty dishes or cuisine types],
            sourced from local farms and artisans who share our commitment to
            quality and sustainability. Our team of chefs and food enthusiasts
            are dedicated to creating memorable dining experiences that [mention
            what sets you apart in terms of taste or service]. Join us in
            exploring the world of gastronomy through good serivice us, and
            discover how we're redefining the art of food enjoyment.
            <div className="pt-10 flex justify-center">
              <button
                onClick={HandlePopup}
                className="pt-10 flex justify-center items-center gap-2 w-45
              bg-green-300 text-xl h-[30px] text-white px-5 py-2 hover:scale-105
              duration-500 rounded-md"
              >
                <FaUser />
                About Us
              </button>
            </div>
          </div>
        </div>

        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
About;
