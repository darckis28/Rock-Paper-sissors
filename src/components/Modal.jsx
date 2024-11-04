import Rules from "/images/image-rules.svg";
import Close from "/images/icon-close.svg";
import { useState } from "react";
const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } fixed top-0 left-0  flex-col items-center justify-between w-full h-screen p-8 bg-white`}>
      <h2 className="text-3xl font-extrabold text-center uppercase text-Dark-Text">
        Rules
      </h2>
      <img src={Rules} alt="Rules" className="mx-auto mb-4" />
      <button className="text-Cyan" onClick={() => setShowModal(!showModal)}>
        <img src={Close} alt="Close" />
      </button>
    </div>
  );
};
export default Modal;
