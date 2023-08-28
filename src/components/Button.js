const Button = ({text,color="black"})=> {
    const style = {
        color:color
    }
    return (
        <button style={style}>{text}</button>
    )
}
export default Button