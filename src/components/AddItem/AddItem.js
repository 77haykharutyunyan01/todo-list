import Button from "../Button/Button"
import "./addItem.css"
const AddItem = () => {
    return (
        <div className="add">
            <input type="text" placeholder="Item text ..."/>
            <Button text="Add Item"/>
        </div>
    )
}
export default AddItem