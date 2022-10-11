import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";


const AddForm = () => {
  const [title, setTitle] = useState("");
  const [text,setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

// console.log('여기',todos)

  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    if(title === "" || text ==='') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
        text,
        isdone:false
      })
    );
  };

  return (

    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <StInput
          type="text"
          value={title}
          isdone={false}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <StInput
          type="text"
          value={text}
          isdone={false}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;



const StFormContainer = styled.div`
  display: flex;

`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #black;

  margin: 0 24px;
  height: 25px;
  width: 200px;
  border-radius: 10px;
  outline: none;

`;

