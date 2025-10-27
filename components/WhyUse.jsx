import React from "react";
import target from "../src/assets/target.png";
import folder from "../src/assets/folder.png";
import cloud from "../src/assets/creative-cloud.png";

const WhyUse = () => {
  return (
    <div>
      <h1 className="font-bold md:text-4xl text-2xl md:p-10 p-5  md:ml-[3.7em]">
        Why Use My Smart List?
      </h1>

      <div className="container mb-5">
        <div className="grid md:grid-cols-3 gap-4 md:max-w-5xl max-w-xl mx-auto w-[90%] md:ml-[20em] mr-auto">
          <div className="bg-gray-100 p-6 rounded-2xl ">
            <img className="max-w-1/5" src={target} alt="Target" />
            <br />
            <h1 className="font-semibold text-2xl pb-1.5 mb-2">Stay Focused</h1>
            <p>Stay focused on your tasks and goals.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <img className="max-w-1/5" src={folder} alt="Folder" />
            <br />
            <h1 className="font-semibold text-2xl pb-1.5 mb-2">
              Organize Easily
            </h1>
            <p>Organize your tasks at one place with ease.</p>
          </div>

          <div className="bg-gray-100 p-6  rounded-2xl">
            <img className="max-w-1/5" src={cloud} alt="Cloud" />
            <br />
            <h1 className="font-semibold text-2xl pb-1.5 mb-2">
              Access Anywhere
            </h1>
            <p>Access your tasks from any device, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
