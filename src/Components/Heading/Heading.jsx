import React from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Heading({ text }) {
  const { pathname } = useLocation();
  return (
    <>
      <header className=" text-center">
        <h2
          className={` ${
            pathname == "/" || pathname == "/About"
              ? "text-white"
              : "text-second"
          } text-uppercase fw-bold h1`}
        >
          {text}
        </h2>
        <div
          className={` ${
            pathname == "/" || pathname == "/About" ? "star-light" : "star-dark"
          } position-relative mx-auto fs-5 mb-3`}
        >
          <FaStar
            className={`${
              pathname == "/" || pathname == "/About"
                ? "text-white"
                : "text-second"
            }`}
          />
        </div>
      </header>
    </>
  );
}
