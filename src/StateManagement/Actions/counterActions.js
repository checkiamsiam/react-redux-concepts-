import { decrement, increment, reset } from "../Constants/Constants"

export const incrementAction = (amount) => {
  return {
    type: increment , 
    payload: amount
  }
}
export const decrementAction = (amount) => {
  return {
    type: decrement , 
    payload: amount
  }
}
export const resetAction = () => {
  return {
    type: reset
  }
}