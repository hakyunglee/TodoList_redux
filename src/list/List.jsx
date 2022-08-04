import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todo";
import { completeTodo } from "../redux/modules/todo";


const List = () => {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  console.log(todos)

//   const onDetailHandler = (todo) => {
//      navigate(`/todolist/${todo.id}`);
//   };

  return (
    <>
    <h1>Working</h1>
      <StTodos>
          {todos
          .filter((todo)=>todo.isDone===false)
          .map((todo) => (
            <StTodo key={todo.id}>
            <button onClick={()=>{
                navigate(`/Detail/${todo.id}`)
            }}> 상세보기 </button> 
            <h2>{todo.title}</h2>  
            <p>{todo.body}</p>

              <StBtn color="rgb(254, 187, 226)" 
                onClick={()=>{
                dispatch(deleteTodo(todo.id)); // 1) 버튼 클릭시 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
                }}
              > 삭제 </StBtn>

              <StBtn color="rgb(168, 214, 249)" 
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
              <button onClick={()=>{
                navigate(`/Detail/${todo.id}`)
            }}> 상세보기 </button> 
              <h2>{todo.title}</h2>  
              <p>{todo.body}</p>
              <StBtn color="rgb(254, 187, 226)"onClick={()=>{
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

export {List};


const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StTodo = styled.div`
  background-color: #c7bdf4;
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

// const DetailBtn = styled.button`
//   background-color: #e99ac8;
//   border: 2px solid blueviolet;
//   border-radius: 8px;
//   cursor: pointer;
//   height: 40px;
//   width: 33%;
// `;