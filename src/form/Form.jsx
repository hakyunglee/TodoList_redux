import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/modules/todo";
import styled from "styled-components";
import TodoListContainer from "../list/List";


const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    console.log(todos)
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      if (title === "" || body ==="") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
  
      dispatch(
        addTodo({
          id: todos.length + 1,
          title,
          body,
          isDone: false,
        }),
      );
      setTitle('');
      setBody('');
    };
  
    return (
        <>
        <StFormContainer>
            <form onSubmit={onSubmitHandler}>
            <StInput
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => {
                setTitle(e.target.value);
                }}
            />
            <StInput
                type="text"
                placeholder="내용"
                value={body}
                onChange={(e) => {
                setBody(e.target.value);
                }}
            />
            <StButton>추가하기</StButton>
            </form>
        </StFormContainer>
        

        
        </>
    );
  };
  
  export { Form };

  const StFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  margin: 20px auto;
`;

const StButton = styled.button`
  border: none;
  background-color: transparent;
  height: 44px;
  cursor: pointer;
  width: 120px;
  border: solid 2px gray;
  border-radius: 5px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 40px;
  width: 200px;
  border: solid 2px gray;
  border-radius: 5px;
  padding: 0 10px;
`;
  
