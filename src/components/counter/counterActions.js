import { ActionCreator } from "redux"

export const increment = () => ({ type: "INC"});
export const decrement = () => ({ type: "DEC"});
export const stepChanged = (e) => ({ type: "STEP_CHANGED", payload: e.target.value});
