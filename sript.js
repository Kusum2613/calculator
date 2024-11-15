let res= document.getElementById("result")
function insertValue(value){
    res.value+=value

}
function clearResult(){
    res.value='  '
}
function deleteResult(){
    res.value= res.value.slice(0,-1);
}
function calculate(){
    try{
        res.value = eval(res.value)
        
    }
     catch(error){
        res.val ="error"
     }
}
