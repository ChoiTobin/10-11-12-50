import React from 'react'
import TodoListContainer from '../components/TodoListContainer'
import AddForm from '../components/AddForm'
import Header from '../components/Header'



 const Todolist = () => {
  return (
    <>
    <Header></Header>
    <AddForm />
    <TodoListContainer />

    </>
  )
}


export default Todolist