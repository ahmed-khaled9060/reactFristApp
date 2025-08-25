import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <div className="boxs py-5">
            <div className="row gy-5">
              <div className="col-sm-4">
                <div className="box text-center">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons d-flex flex-wrap justify-content-center">
                    <span className=" d-flex justify-content-center align-items-center rounded-circle mx-1 ">
                      <FaFacebook />
                    </span>
                    <span className=" d-flex justify-content-center align-items-center rounded-circle mx-1">
                      <FaTwitter />
                    </span>
                    <span className=" d-flex justify-content-center align-items-center rounded-circle mx-1">
                      <FaLinkedinIn />
                    </span>
                    <span className=" d-flex justify-content-center align-items-center rounded-circle mx-1">
                      <FaGlobe />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box text-center">
                  <h3>ABOUT FREELANCER</h3>
                  <p className=" mx-auto">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <p className="text-center py-4 m-0">Copyright © Your Website 2021</p>
      </footer>
    </>
  );
}
