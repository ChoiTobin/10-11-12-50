import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteToDo } from "../redux/modules/todos";
import { updateTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { useParams } from "react-router-dom";


/* 
링크 onclick하면 들고 todoo.id ,todo.title ,todo.text가져가기

링크타고 들어가는데 어차피 그 각각의 item들을 들고 들어가니까 그떄의 
아이템 id와 title 을 들고들어가기. =>
 dispatch로 보내서 여기서useSelector로 가져오기.
*/

const HomePage = () =>{
    const {id} = useParams();
    
    const { todos } = useSelector((state) => state.todos);
    console.log('구분',todos)
    return ( 
        <div>
            {/* {id} */}
            <div>ID:{id}</div>
            {/* <div>ID:{todos[todos.length-1].id}</div> */}
            <h1>{todos[todos.length-1].title}</h1>
            <div>{todos[todos.length-1].text}</div>
            <button><Link to='/'>이전으로</Link></button>
        </div>

    )
};

export default HomePage


// 현재 action.id를 보내는중 title이랑 도 보내야하는데 일단더해보자