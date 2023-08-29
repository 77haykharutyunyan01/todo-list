import TodoListItem from "./TodoListItem/TodoListItem"

import "./todoList.css"

const TodoList = () => {
    const item = [
        {text:"Learn Js", important:true,id:1},
        {text:"Drink Coffee", important:false,id:2},
        {text:"Learn React", important:true,id:3},
        {text:"Learn TypeScript", important:true,id:4},
        {text:"Learn Node.js", important:false,id:5}
    ]
       
    const data = item.map(({text,important,id}) =>{
        return (
        <TodoListItem text={text} important={important} key={id}/>
        )
    })
    return (
        
            <ul className="todoList">
                {data}
                
                
            </ul>
          
    )
}
export default TodoList