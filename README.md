<h3>-구현 기능<h3/>
    
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo


<h3>-배포 도메인<h3/>
react-redux-todolist-ashy.vercel.app

<h3>-폴더 구조<h3/>


![20221013_153844](https://user-images.githubusercontent.com/87680494/195521093-3aec9e93-4575-4741-9213-c22bea0eb2cc.png)


1.components 폴더에 Header Form todolist로 각 section별로 구획을 두었습니다. 
    
    폴더명과 페이지명을 보면 제 기능을 짐작 할 수 있습니다. 
    
    -Header는 top section을 차지합니다.
    -form은 form역할을 수행하는 동시에 middle section을 차지합니다.
    -list는 input의 data값을 각각의 box요소에 담아서 보여주는역할을 하며 bottom section을 차지합니다.  
    

2.page폴더를 통해서 각각의 페이지를 쉽게 볼 수 있게 상세페이지와 기본페이지를 나누었고 useParams를 활용하여 
    
    -도메인 끝 부분이 어떠한값으로 바뀌어도 상세 페이지를 보여줍니다.
   
    
3.app.js에 Routes,Route를 사용하여 page폴더에 있던 Homepage.js와 Todolist.js를 app.js 안에서 Routes 설정 하였습니다.

    
4.redux폴더에 store를 두었습니다.

    
5.modules폴더에 Action , Action Creator, Reducer를 두었습니다.
