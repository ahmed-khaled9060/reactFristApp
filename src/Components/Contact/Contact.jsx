import React from "react";
import Heading from "../Heading/Heading";
import { FloatingLabel, Form } from "react-bootstrap";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section>
        <Heading text={"conatct section"} />
        <Form className={`${styles.form} form mx-auto`}>
          <FloatingLabel
            controlId="floatingInput"
            label="userName"
            className="mb-4"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="userAge"
            className="mb-4"
          >
            <Form.Control type="text" placeholder="userAge" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="userEmail"
            className="mb-4"
          >
            <Form.Control type="email" placeholder="userEmail" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="userPassword"
            className="mb-4"
          >
            <Form.Control type="password" placeholder="userPassword" />
          </FloatingLabel>
          <button
            className="bg-main border-0 text-white rounded-2 px-3 py-2 "
            type="submit"
          >
            send Message
          </button>
        </Form>
      </section>
    </>
  );
}
