import React from "react";
import "./MinimalistRoom.css";
import minimalistRoomImg from "../assets/img/MinimalistRoom.jpg";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import Discuss from "./Discuss";

const MinimalistRoom = () => {
  return (
    <div>
      <section className="minimalist-wrapper">
        <div className="minimalist-hero">
          <div className="minimalist-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">Minimalist Room</h1>
            <p className="text-center md:max-w-screen-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="minimalist-img my-8">
            <img src={minimalistRoomImg} alt="group-pics" />
          </div>
        </div>

        {/* div for project and design process */}
        <div className="minimalist-overview flex flex-wrap md:flex-nowrap  flex-row justify-between mb-12 mx-auto">
          <div className="minimalist-project md:mr-8 mx-auto md:w-64 ">
            <h1 className="text-2xl font-semibold md:text-left text-center mb-4">
              Project Overview
            </h1>
            <p className="mb-8 text-base">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <div className="flex justify-between m-auto ">
              <h2 className="text-lg">July 22-2022</h2>
              <h2 className="mr-0 md:mr-40 text-lg">
                Interior Design-Furniture
              </h2>
            </div>
          </div>
          <div className="minimalist-design md:ml-8 mx-auto  md:w-64 mt-12 md:mt-0">
            <h1 className="text-2xl font-semibold md:text-left text-center mb-4">
              Design Process
            </h1>
            <p className="mb-10 text-base">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <p className="text-base">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </div>
        </div>

        {/* section for the pics */}
        <div className="minimalist-pics flex flex-wrap gap-8 justify-between mb-8">
          <img src={p1} alt="first-product" className="min-pics" />
          <img src={p2} alt="second-product" className="min-pics" />
          <img src={p3} alt="third-product" className="ma-pics" />
          <img src={p4} alt="first-product" className="min-pics" />
          <img src={p5} alt="second-product" className="min-pics" />
        </div>
      </section>
      <Discuss />
    </div>
  );
};

export default MinimalistRoom;
