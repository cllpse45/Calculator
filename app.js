let button = document.getElementsByTagName("button");
//console.log(button);
let cScreen= document.getElementsByClassName("screen1")[0];
let calculate=document.getElementById("calculate");
let clean= document.getElementById("clean");

for(let i=0; i<16; i++){
    if(i!=13 && i!=14){
        button[i].addEventListener("click", toInput);
    }
    
}

function toInput(){
    //console.log("test");
    //console.log(this.value);

    cScreen.value = cScreen.value + this.value;
}


calculate.addEventListener("click", fCalculate);
function fCalculate(){
    cScreen.value=eval(cScreen.value);

}


clean.addEventListener("click", fClean);
function fClean(){
    cScreen.value="";
}