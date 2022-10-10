import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";





const Header = () =>{

    return (
<StHeaderContainer>
    <StHeaderitem>myTodolist</StHeaderitem>
    <StHeaderitem2>react</StHeaderitem2>
</StHeaderContainer>

    )

}


const StHeaderContainer = styled.div`

  display: flex;
  gap: 24px;
  padding: 30px;
  border: 1px dotted black;
  border-top: 1px solid;
  margin-bottom:30px;

`;
const StHeaderitem = styled.div`
margin-right:auto;

`;
const StHeaderitem2 = styled.div`
  margin-left:auto;

`;

export default Header