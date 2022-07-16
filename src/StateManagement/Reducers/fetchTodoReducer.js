import { errorTodo, requestTodo, successTodo } from "../Constants/Constants";

const initialFetchingTodoState = {
  isLoading: false , 
  todo : [] , 
  error : null
}

export const fetchTodoReducer = (state = initialFetchingTodoState , action ) => {
  switch (action.type) {
    case requestTodo:
      return {
        ...state , 
        isLoading : true , 
      }
    case successTodo:
      return {
        ...state , 
        isLoading : false, 
        todo: [...action.payload]
      }
    case errorTodo:
      return {
        ...state , 
        isLoading : false, 
        error : [...action.payload]
      }
  
    default:
      return state;
  }
}

