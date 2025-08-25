import Heading from "../Heading/Heading";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import styles from "./Portfolio.module.css";
const images = Object.values(
  import.meta.glob("../../assets/images/portfolio/*", {
    eager: true,
    import: "default",
  })
);

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <>
      <section>
        <Heading text={"portfolio component"} />
        <div className="row g-4 g-md-5">
          {images.map((image, ind) => {
            return (
              <div className="col-md-4" key={ind}>
                <div className={` ${styles.content} position-relative`}>
                  <img src={image} alt="" className="w-100 rounded-3" />
                  <div
                    onClick={() => {
                      handleShow(image);
                    }}
                    className={`${styles.overlay_plus}  rounded-3  position-absolute top-0 end-0 start-0  bottom-0 `}
                  >
                    <FaPlus color="white" size={`5rem`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          centered={true}
          contentClassName="border-0"
          backdropClassName="bg-info"
        >
          <Modal.Body className={`p-0`}>
            <img src={selectedImage} className="w-100" alt="" />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
