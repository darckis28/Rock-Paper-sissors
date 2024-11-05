import { useGetContext } from "../hooks/useGetContext";
export const Circle = ({ pick, select = true }) => {
  const { dispach } = useGetContext();
  const circleStyle = {
    sicssor: {
      background: "bg-Scissors-Gradient",
      icons: "/images/icon-scissors.svg",
    },
    rock: {
      background: "bg-Rock-Gradient",
      icons: "/images/icon-rock.svg",
    },
    paper: {
      background: "bg-Paper-Gradient",
      icons: "/images/icon-paper.svg",
    },
  };
  return (
    <div
      onClick={() =>
        select && dispach({ type: "START_GAME", payload: { pick } })
      }
      className={`flex items-center cursor-pointer relative justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full ${circleStyle[pick].background}`}>
      <div
        className={`grid w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full place-items-center shadow-inherit  `}>
        <img src={circleStyle[pick].icons} alt="images" />
      </div>
    </div>
  );
};
