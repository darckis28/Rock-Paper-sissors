import { useContext } from "react";
import { contextInit } from "../context/ContextPlay";

export function useGetContext() {
  return useContext(contextInit);
}
