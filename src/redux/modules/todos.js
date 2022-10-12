// Action value
const ADD_TODO = "ADD_TODO";
const DELETE = "DELETE";
const UPDATE ="UPDATE"
const LASTTOBIN ="LASTTOBIN"

// Action Creator
export const addTodo = (payload) => {  
  return { type: ADD_TODO,payload };
};

export const deleteToDo=(id)=>{
  return{
      type :DELETE,
      id:id
  };
};
export const updateTodo=(id)=>{
  return{
    type:UPDATE,
    id:id.id,
    isdone:id.isdone
    ,
  }
  
}
export const tobinTodo=(id)=>{
  return{
    type:LASTTOBIN,
    id:id.id,
    title:id.title,
    text:id.text,
  }
  
}


// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react공부하기",
      text:'리액트 기초를 공부합시다.',
      isdone:false
    },
    {
      id: 2,
      title: "react공부하기",
      text:'리액트 기초를 공부합시다.',
      isdone:false
    },
  ],
};



const todos = (state = initialState, action) => {
  //첫번째는 각액션에대한 업데이트 함수, 두번째는 action => 파라미터의 초기상태 
  switch (action.type) {
    
    case ADD_TODO:
    return {
        ...state,
        todos: [...state.todos, action.payload],
        
        //action.payload 변형을 주어서 넣기   
      };
      case DELETE:
        return {
          ...state,
          // todos: [ ...state.todos.filter(todo => todo.id !== state.id)] 
          todos: [ ...state.todos.filter(todo => todo.id !== action.id)] 
          
        };
      case UPDATE:
        // console.log('이값은정상일까?',action)
        // console.log('UPDATE구분 isdone값',action.isdone,state.todos[0].isdone)
        
        return{
          ...state,
          todos:[...state.todos]
          
          
        }






        
      case LASTTOBIN:
        // console.log('이게 나와야되~~',action)
      return{
        ...state,
          todos:[...state.todos,action]
      }
      
    default: 
      return state
  }
  };


export default todos;
 //true인 값을 반환 false인 값을 반환.
          // todos:[...state.todos.filter(todo => todo.isdone !==action.isdone)]
          //여기를 버튼을 눌렀을때 같지않으면 새로운 배열로 생겨두는게 아닌 이건 삭제 방법이고
          //여기를 버튼을 눌렸을때 수정하려면? map을 써서 누르지 않은 부분을 


          //현재 todos를 만들어줘서 todos의 id값을 뽑아내서 비교하려고 함.
          //todo.isdone은 현재 기본값 false인데 클릭하면 true로 바뀌어있다.
          //이상태에서 filter가 맞는지보기.   => 이렇게 해서 useselector를 통해서
          //값을 주면되나? isdone이 false이면 뭐 true이면 뭐.