import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import HomePage from "./page/Homepage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import HomePage from "./page/Homepage";
import { Link } from "react-router-dom";
import Todolist from "./page/Todolist";




const App = () => {
  return (
    

    <StContainer>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}></Route>
        <Route path="/todo" element={<Todolist/>}></Route>
      </Routes>
    </StContainer>

  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
