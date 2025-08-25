import React from "react";
import HomeBg from "/src/assets/images/home/imgi_1_avataaars.svg";
import Heading from "../Heading/Heading";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="text-center">
        <img src={HomeBg} alt="" className="mb-4" />
        <Heading text={"start framework"} />
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </section>
    </>
  );
}
