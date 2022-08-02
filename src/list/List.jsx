import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todo";
import { completeTodo } from "../redux/modules/todo";

const List = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos)

  return (
    <>
    <h1>Working</h1>
      <StTodos>
          {todos
          .filter((todo)=>todo.isDone===false)
          .map((todo) => ( 
            <StTodo key={todo.id}>
              <a href={todo.id}> 상세보기 </a> 
              <h2>{todo.title}</h2>  
              <p>{todo.body}</p>

              <StBtn color="violet" 
                onClick={()=>{
                dispatch(deleteTodo(todo.id)); // 1) 버튼 클릭시 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
                }}
              > 삭제 </StBtn>

              <StBtn color="skyblue" 
                onClick={()=>{
                dispatch(completeTodo(todo.id));
                }}
              > 완료 </StBtn>

            </StTodo>
          ))} 
      </StTodos>

      <h1>Done</h1>
      <StTodos>
          {todos
          .filter((todo)=>todo.isDone===true)
          .map((todo) => ( 
            <StTodo key={todo.id}>
              <a href={todo.id}> 상세보기 </a>
              <h2>{todo.title}</h2>  
              <p>{todo.body}</p>
              <StBtn color="orange"onClick={()=>{
                dispatch(deleteTodo(todo.id));
              }}> 삭제 </StBtn>
              <StBtn color="lightgray" onClick={()=>{
                dispatch(completeTodo(todo.id));
              }}>
              취소</StBtn>
            </StTodo>
          ))} 
      </StTodos>
    </>
  );
};

export default List;


const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StTodo = styled.div`
  background-color: hsl(91.5463917525773, 76.37795275590551%, 75.09803921568627%);
  min-width: 25%;
  min-height: 200px;
  padding: 0 24px;
  border-radius: 3px;
  padding-top: 10px;
`;

const StBtn = styled.button`
  width: 120px;
  padding: 10px;
  margin: 5px 0px 0px 20px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: ${props=>props.color};
`;