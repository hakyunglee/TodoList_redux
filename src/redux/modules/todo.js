// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO"

const DETAIL_TODO = "DETAIL_TODO";

// Action Creator 는 액션을 생성한다.
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload};
};
export const deleteTodo = (id) => {      // 2)
    console.log()
    return { type : DELETE_TODO, payload : id }; // 액션
  };
export const completeTodo = (id) => {
    return { type: COMPLETE_TODO, payload : id }
}
  

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
      body:"react 공부하기",
      isDone: false,
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      body:"redux 공부하기",
      isDone: false,
    },
  ],
};

 

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:    //3)
        return {todos: state.todos.filter((todo) => todo.id !== action.payload)}      //3)
        
    case DETAIL_TODO:

    case COMPLETE_TODO: 
      return {todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)}
        
    default:
      return state;
      
  }
};

export default todos;