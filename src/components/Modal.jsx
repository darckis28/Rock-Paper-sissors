import Rules from "/images/image-rules.svg";
import Close from "/images/icon-close.svg";
import { useGetContext } from "../hooks/useGetContext";
const Modal = () => {
  const { state, dispach } = useGetContext();

  return (
    <div
      id="modal"
      className={`${
        state.showModal ? "flex" : "hidden"
      } fixed top-0 left-0 lg:top-1/2  lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2  flex-col items-center justify-between w-full h-screen p-8 bg-white z-50 lg:w-80 lg:h-80 lg:rounded-lg`}>
      <h2 className="text-3xl font-extrabold text-center uppercase text-Dark-Text lg:absolute lg:top-3 lg:left-8">
        Rules
      </h2>
      <img src={Rules} alt="Rules" className="mx-auto mb-4 lg:mt-8" />
      <button
        className="lg:absolute lg:top-5 lg:right-8"
        onClick={() => dispach({ type: "SHOW_MODAL" })}>
        <img src={Close} alt="Close" />
      </button>
    </div>
  );
};
export default Modal;
