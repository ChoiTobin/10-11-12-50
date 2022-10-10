import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteToDo } from "../redux/modules/todos";

import styled from "styled-components";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  return (
    <div>
        <div>working</div>
          <StTodos>
            {todos.map((todo,id) => (
              <StTodo key={todo.id}>
                <h1>{todo.title}</h1>
                <div>{todo.text}</div>
                <button  onClick={()=>{
                console.log('***',todo.id)
                dispatch(
                  deleteToDo(

                    todo.id
                    //객체로 todo의 id를 주지않은 이유는 id만 필요해서이다 
                    //dispatch를 통해서 todos.js에 Action creator에 
                    //함수 매개변수인자로 들어가서 id로 들어간다.
                  )
                )
                  
              }}>취소하기</button>
                <button>완료</button>
              </StTodo>
              ))}
          </StTodos>
          <div>done</div>
      
    </div>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 30%;
  height: 150px;
  
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
  `;
