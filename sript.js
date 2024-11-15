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
        //res.value = eval(res.value)
        let result = eval(res.value);
        res.value = isFinite(result) ? result.toFixed(3) : "error";
    }
     catch(error){
        res.val ="error"
     }
}