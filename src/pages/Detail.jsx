import React from "react";
import styled from "styled-components";
import todos from "../redux/modules/todo";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
    const { id } = useParams();
    const [ Todo ] = useSelector((state) => 
        state.todos.todos.filter((todo)=>todo.id===id.toString()));
    const navigate = useNavigate();
   
  // useEffect(()=>{
  //  dispatch(detailTodo(id))
  // },[dispatch,id])

  

    console.log(todos.todos)

    return(
        <DetailBox>
            <div className="detailbox">
                <div>
                    <h2>상세보기 페이지</h2>
                </div>
                <div>
                    <div> userid: {id} </div>
                    <div> 제목 : {Todo.title}</div>
                    <div> 내용 : {Todo.body}</div>
                    <DetailButton onClick={()=>{navigate("/")}}>이전으로</DetailButton>
                </div>
            </div>
        </DetailBox>
    )
}

export { Detail }

const DetailBox = styled.div`
    display: flex;
    justify-content: center
`

const DetailButton = styled.div`
background-color: lightgrey;
    cursor: pointer;
    color : blueviolet;
`