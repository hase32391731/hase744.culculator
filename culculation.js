var inputtedValue = document.getElementById('input');
const plusButton  =document.getElementById('culculation-plus');
const minusButton =document.getElementById('culculation-minus');
const multipliedButton =document.getElementById('culculation-multiplied');
const dividedButton = document.getElementById('culculation-divided');

const answer = document.getElementById('answer')
const equalButton = document.getElementById('equal')



plusButton.onclick = () =>{ 
    var inputted=inputtedValue.value;
    number=eval(inputted)
    const header = document.createElement('h3');
    answer.appendChild(header);
    
    
    equalButton.onclick = () =>{
        var inputted=inputtedValue.value;
        number2=eval(inputted)
        var finalanswer = number+number2
        var output =plusFinalresponse(finalanswer,number,number2)
        header.innerText = (output);  
    }  
}

function plusFinalresponse(response,value1,value2){
    return  value1 + '+' + value2 +'='+response
}

minusButton.onclick = () =>{ 
    var inputted=inputtedValue.value;
    number=eval(inputted)
    const header = document.createElement('h3');
    answer.appendChild(header);

    
    equalButton.onclick = () =>{
        var inputted=inputtedValue.value;
        number2=eval(inputted)
        var finalanswer = number-number2
        var output =minusFinalresponse(finalanswer,number,number2)
        header.innerText = (output);  
    }  
}

function minusFinalresponse(response,value1,value2){
    return  value1 + '-' + value2 +'='+response
}

multipliedButton.onclick = () =>{ 
    var inputted=inputtedValue.value;
    number=eval(inputted)
    const header = document.createElement('h3');
    answer.appendChild(header);

    
    equalButton.onclick = () =>{
        var inputted=inputtedValue.value;
        number2=eval(inputted)
        var finalanswer = number*number2
        var output =multipliedFinalresponse(finalanswer,number,number2)
        header.innerText = (output); 
    }  
}

function multipliedFinalresponse(response,value1,value2){
    return  value1 + '×' + value2 +'='+response
}

dividedButton.onclick = () =>{ 
    var inputted=inputtedValue.value;
    number=eval(inputted)
    const header = document.createElement('h3');
    answer.appendChild(header);

    
    equalButton.onclick = () =>{
        var inputted=inputtedValue.value;
        number2=eval(inputted)
        var finalanswer = number/number2
        var output =dividedFinalresponse(finalanswer,number,number2)
        header.innerText = (output); 
    }  
}

function dividedFinalresponse(response,value1,value2){
    return  value1 + '÷' + value2 +'='+response
}




function clearValue(idname){
    //テキストボックスオブジェクトを取得する
    var obj = document.getElementById(idname);
   
    //valueに値をセットする
    obj.value = "";
}
