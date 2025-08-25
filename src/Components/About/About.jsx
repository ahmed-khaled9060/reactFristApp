import React from "react";
import { FaStar } from "react-icons/fa";
import "./About.module.css";
import Heading from "../Heading/Heading";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <section className="px-5">
        <Heading text={"about component"} />
        <div className="row">
          <div className="col-md-6">
            <p className="text-start text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-start text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
