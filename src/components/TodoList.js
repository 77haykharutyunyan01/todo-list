import TodoListItem from "./TodoListItem"


const TodoList = () => {
    const item = [
        {text:"Learn Js", important:true},
        {text:"Drink Coffee", important:false},
        {text:"Learn React", important:true},
        {text:"Learn TypeScript", important:true}
    ]
    const data = item.map(({text,important}) =>{
        return (<TodoListItem text={text} important={important}/>)
    })
    return (
        
            <ul>
                {data}
            </ul>
          
    )
}
export default TodoList