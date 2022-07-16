import { decrement, increment, reset } from "../Constants/Constants";

const initialCounterState = {
  counterNumber: 0
}

export const counterReducer = (state = initialCounterState , action) => {
  switch (action.type) {
    case increment:
      return {
        ...state , 
        counterNumber : state.counterNumber + action.payload
      }
    case decrement:
      return {
        ...state , 
        counterNumber : state.counterNumber - action.payload
      }
    case reset:
      return {
        ...state , 
        counterNumber : 0
      }
  
    default:
      return state ;
  }
}