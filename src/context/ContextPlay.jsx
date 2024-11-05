import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const contextInit = createContext(null);

function ContextPlay({ children }) {
  const [state, dispach] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("history")) || {
      showModal: false,
      phase: 0,
      score: 0,
      pick: "",
      enemyPick: "",
      result: "",
    }
  );

  function reducer(state, action) {
    switch (action.type) {
      case "SHOW_MODAL":
        return { ...state, showModal: false };
      case "OPEN_MODAL":
        return { ...state, showModal: true };
      case "START_GAME":
        return { ...state, pick: action.payload.pick, phase: 1 };
      case "ENEMY_PICK":
        return { ...state, enemyPick: action.payload.enemyPick, phase: 2 };
      case "RESULT":
        if (state.pick === state.enemyPick) {
          return { ...state, result: "draw", phase: 3 };
        }
        if (
          (state.pick === "rock" && state.enemyPick === "sicssor") ||
          (state.pick === "paper" && state.enemyPick === "rock") ||
          (state.pick === "sicssor" && state.enemyPick === "paper")
        ) {
          localStorage.setItem(
            "history",
            JSON.stringify({
              ...state,
              score: state.score + 5,
              phase: 0,
              pick: "",
              enemyPick: "",
              result: ""
            })
          );
          return { ...state, result: "win", score: state.score + 5, phase: 3 };
        }
        return { ...state, result: "lose", phase: 3 };
      case "RESTART":
        localStorage.setItem(
          "history",
          JSON.stringify({
            ...state,
            score: state.score + 5,
            phase: 0,
            pick: "",
            enemyPick: "",
            result: "",
           
          })
        );
        return {
          ...state,
          phase: 0,
          pick: "",
          enemyPick: "",
          result: "",
        };
    }
  }

  return (
    <contextInit.Provider value={{ state, dispach }}>
      {children}
    </contextInit.Provider>
  );
}
export default ContextPlay;
