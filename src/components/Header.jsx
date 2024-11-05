import Logo from "/images/logo.svg";
import { useGetContext } from "../hooks/useGetContext";
const Header = () => {
  const { state } = useGetContext();
  return (
    <header className="flex justify-between p-4 rounded-md outline-Header-Outline outline [grid-area : header]">
      <img src={Logo} alt="logo" className="object-contain w-28 " />
      <div className="px-4 font-bold text-center uppercase bg-white rounded-md ">
        <p className="text-sm text-Score-Text">score</p>
        <span className="text-5xl font-bold text-Dark-Text ">
          {state.score}
        </span>
      </div>
    </header>
  );
};
export default Header;
