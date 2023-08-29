import Delete from "../../Button/Delete/Delete"
import Important from "../../Button/Important/Important"
import Edit from "../../Button/Edit/Edit"
const  TodoListItem = ({text,important}) =>{
    const style = {
        color: important ? "red" : "black"
    }
    return (
             <li style={style}>{text}<Delete/><Important/><Edit/></li>
    )
}
export default TodoListItem