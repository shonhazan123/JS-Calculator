var clicked;
var arg1="";
var arg2="";
var resoult;
var operatorPressed = false;
var usedOperator="";
var resoult = document.querySelector("#resoult");
var buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        operatorPressed ? arg1+=e.target.textContent : arg2+=e.target.textContent;
        operatorPressed ? resoult.textContent = arg1 : resoult.textContent = arg2;
        console.log(e.target.textContent);
    })
});
    parseInt
const addFunc = () => {
     resoult = Number.parseInt(arg1) + Number.parseInt(arg2);
    return resoult;
}
const subFunc = () => {
    resoult = Number.parseInt(arg1) - Number.parseInt(arg2);
   return resoult;
}
const divFunc = () => {
    resoult = Number.parseInt(arg1) / Number.parseInt(arg2);
   return resoult;
}
const multiFunc = () => {
    resoult = Number.parseInt(arg1) * Number.parseInt(arg2);
   return resoult;
}

var operators = document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        operatorPressed = true;
        usedOperator = e.target.textContent;
    })
})

var clicked = false;
document.querySelector("#equal").addEventListener('click',(e)=>{
    console.log(usedOperator);
    switch (usedOperator) {
        case "+":
            resoult.textContent = addFunc();
            break;
    
        case"-":
        resoult.textContent = subFunc();
            break;
            case"/":
            resoult.textContent = divFunc();
            break;
            case"x":
            resoult.textContent = multiFunc();
            break;   
    }

    const getApi = async ()=>{
        console.log("ENTERD")
        const response = await fetch("https://swapi.dev/api/people/1/")
        data = await response.json();
        console.log(data);
        return data;
    }
   getApi().then(data=> console.log(data))
});



                                                                                                                            