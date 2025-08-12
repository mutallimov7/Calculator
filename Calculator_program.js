const display=document.getElementById("display");


function toDisplay(input){
    display.value=display.value+input;
}


function calculate(){
    display.value=eval(display.value);
}


function cleartoDisplay(){
    display.value="";
}


function clearOnebyOne(input){
    display.value=display.value.slice(0, -1);
}

