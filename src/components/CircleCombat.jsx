export const CircleCombat = ({ pick, result }) => {
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
      className={`flex items-center relative justify-center w-32 h-32 lg:w-56 lg:h-56 rounded-full ${
        result && "z-10"
      } z-10 ${circleStyle[pick].background}`}>
      <div
        className={`grid w-24 h-24 lg:w-40 lg:h-40 bg-white rounded-full place-items-center shadow-inherit  `}>
        <img src={circleStyle[pick].icons} alt="images" />
      </div>
      {result && (
        <>
          <div
            className=" w-32 h-32 lg:w-56 lg:h-56 absolute  bg-white/10 rounded-full scale-125 -z-10 animate-pulse
      "></div>
          <div
            className=" w-32 h-32 lg:w-56 lg:h-56 absolute  bg-white/10 rounded-full scale-150 -z-10 animate-pulse
      "></div>
        </>
      )}
    </div>
  );
};
