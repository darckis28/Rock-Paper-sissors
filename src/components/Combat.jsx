import { useGetContext } from "../hooks/useGetContext";
import { CircleCombat } from "./CircleCombat";
import { Containner } from "./Containner";
import { useEffect } from "react";
export const Combat = () => {
  const { state, dispach } = useGetContext();
  useEffect(() => {
    if (state.phase === 1) {
      const selectEnemy = ["rock", "sicssor", "paper"];
      setTimeout(() => {
        dispach({
          type: "ENEMY_PICK",
          payload: { enemyPick: selectEnemy[Math.floor(Math.random() * 3)] },
        });
      }, 1000);
    }
    if (state.phase === 2) {
      setTimeout(() => {
        dispach({ type: "RESULT" });
      }, 1000);
    }
  }, [state.phase, dispach]);
  return (
    <Containner>
      <section className="[grid-area:main] flex justify-between mt-6   sm:min-w-96 lg:min-w-full  flex-col mx-auto">
        <div className="flex justify-between w-full lg: ">
          <div className="flex flex-col gap-6 lg:flex-col-reverse lg:gap-20">
            <CircleCombat pick={state.pick} result={state.result === "win"} />
            <h2 className="text-base uppercase font-bold text-center">
              Your Piked
            </h2>
          </div>
          <div className="z-10 flex flex-col gap-6 lg:flex-col-reverse lg:gap-20 ">
            {state.phase >= 2 ? (
              <CircleCombat
                pick={state.enemyPick}
                result={state.result === "lose"}
              />
            ) : (
              <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full bg-Radial-Gradient"></div>
            )}
            <h2 className="text-base uppercase font-bold text-center z-40">
              the house Piked
            </h2>
          </div>
        </div>
        {state.phase === 3 && (
          <div>
            <h2 className="uppercase text-center text-4xl font-bold">
              you {state.result}
            </h2>
            <button
              className="bg-white text-Dark-Text tracking-widest uppercase font-bold py-2 px-10 rounded-lg mx-auto block mb-8 mt-3 hover:text-red-600"
              onClick={() => dispach({ type: "RESTART" })}>
              Play Again
            </button>
          </div>
        )}
      </section>
    </Containner>
  );
};
