const resultCalcu = document.getElementById("resultCalcu");

function appendToResult(input) {
    if (resultCalcu.value === "0" || resultCalcu.value === "Error") {
        resultCalcu.value = input;
    } else {
        resultCalcu.value += input;
    }
}

function clearResultCalcu(){
    resultCalcu.value="0";
}

function calculate(){
    try{
        resultCalcu.value=eval(resultCalcu.value);
    }
    catch(error){
        resultCalcu.value="Error";
    }
}