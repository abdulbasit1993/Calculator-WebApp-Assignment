var exp = "";
function getData(data){
    exp = exp + data;
    document.getElementById("inputData").value = exp;
}

function inputValidation(){
    var expression = document.getElementById("inputData").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (e) {
        document.getElementById("result").value = "Invalid Expression";
    }
}

function clearAll(){
    exp = "";
    document.getElementById("inputData").value = "";
    document.getElementById("result").value = "";
}