const validateInput = (text) =>{
    if(text.trim().length>2){
        return true
    }else{
    return false
}
}
export{
    validateInput
}