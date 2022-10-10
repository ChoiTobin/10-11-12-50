import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import AddForm from "./components/AddForm";
import Header from "./components/Header";

const App = () => {
  return (
    <StContainer>
      <Header></Header>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
