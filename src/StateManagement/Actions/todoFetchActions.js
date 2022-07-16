import axios from "axios"
import { errorTodo, requestTodo, successTodo } from "../Constants/Constants"

const fetchTodoData = () => {
  return (dispatch) => {
    dispatch({type: requestTodo })
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
      dispatch({type: successTodo , payload: data.data})
    })
    .catch( error => {
      dispatch({type: errorTodo , payload: error.message})
    })
  }
}

export default fetchTodoData ;