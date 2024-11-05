import { useGetContext } from "../hooks/useGetContext";
export const Footer = () => {
  const { dispach } = useGetContext();
  return (
    <div
      className="[grid-area:footer] "
      onClick={() => dispach({ type: "OPEN_MODAL" })}>
      <p className="block w-32 py-2 mx-auto lg:ml-auto lg:mx-0 rounded-md text-center uppercase border border-white ">
        Rules
      </p>
    </div>
  );
};
