// const func
const ac = document.querySelector(".button-ac");
const pn = document.querySelector(".button-pn");
const modulus = document.querySelector(".button-modulus");
// const op
const division = document.querySelector(".button-division");
const multiplication = document.querySelector(".button-multiplication");
const subtraction = document.querySelector(".button subtraction");
const addition = document.querySelector(".button-addition");
const equal = document.querySelector(".button-equal");


const screenUp = document.getElementById("screenup");
const screenDown = document.getElementById("screendown");

let previousOperand = "";
let currentOperand = "";
let operation = "";

let equalOrModulusButtonPressed = false;

const numberButtons = document.querySelectorAll(".num");
// console.log(num);
const oparationButtons = document.querySelectorAll(".op");
const button = document.querySelectorAll(".button");
// console.log(button);



// functions

const appendNumber = (num) => {

    if(num === "." && currentOperand.includes(".")) return;

    if(currentOperand === "0" && num === "0") return;

    if(num == "." && screenDown.innerText.includes("") && currentOperand != '0' && currentOperand != '0.' && screenDown.innerText == 0 ) num = '0.';

    if(currentOperand === "0" && num !== "0" && num !== "."){
        currentOperand = num;
        return;
    }

    if(currentOperand.length > 10) return;


    if(equalOrModulusButtonPressed){
        equalOrModulusButtonPressed = false;
        currentOperand = num;
        return;
    }

    currentOperand += num;
};

const updateDisplay = () => {
    
    if(currentOperand.toString().length > 12){
        currentOperand = currentOperand.toString().slice(0, 12);
    }
    screenDown.textContent = currentOperand;

    if(operation != null){

        if(previousOperand[previousOperand.length-1] == "."){
            previousOperand = previousOperand.slice(0, -1);
        }

        screenUp.textContent = `${previousOperand} ${operation}`;
    }
    else{
            screenUp.textContent = "";
        }
};

const compute = () =>{

    let computation;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if(isNaN(previous) || isNaN(current)) return;

    switch (operation) {

        case "+":
            computation = previous + current;
            break;
        case "-":
            computation = previous - current;
            break;

        case "x":
            computation = previous * current;
            break;

        case "÷":
            computation = previous / current;
            break;
        default:
            return;
        }
        currentOperand = computation;
        operation = "";
        previousOperand = "";
};


const chooseOperator = (op) =>{

    if(currentOperand === "") return;

    if( previousOperand) {
        compute();
    }

    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
};

const clear = () =>{
    
    operation = "";
    previousOperand = "";
    currentOperand = "0";
    updateDisplay();
};

const plusMinus = () => {
    if(!currentOperand && currentOperand != "0") return;

    currentOperand = currentOperand * -1;
}

const percent = () => {
    if(!currentOperand) return;
    currentOperand = currentOperand / 100;
};



// events

// number buttons
numberButtons.forEach((number)=>{

    number.addEventListener("click", () => {

        appendNumber(number.textContent);
        updateDisplay();
    });
});

// operator button 

oparationButtons.forEach((op) =>{
    op.addEventListener("click", () => {
        chooseOperator(op.textContent);
        updateDisplay();
    });
});

//equal button

equal.addEventListener("click", () => {
    compute();
    updateDisplay();
    equalOrModulusButtonPressed = true;
});

// ac button
ac.addEventListener("click", () => {
    clear();
    updateDisplay();

});

// plus-minus (+/-) button
pn.addEventListener("click", () => {
    plusMinus();
    updateDisplay();

});

// percent (modulus %) button
modulus.addEventListener("click", () => {
    percent();
    updateDisplay();
    equalOrModulusButtonPressed = true;
});



































// const num
// const _0 = document.querySelector(".number0");
// const _1 = document.querySelector(".number1");
// const _2 = document.querySelector(".number2");
// const _3 = document.querySelector(".number3");
// const _4 = document.querySelector(".number4");
// const _5 = document.querySelector(".number5");
// const _6 = document.querySelector(".number6");
// const _7 = document.querySelector(".number7");
// const _8 = document.querySelector(".number8");
// const _9 = document.querySelector(".number9");
// const _n = document.querySelector(".number-dot");


// number eventlistener
// _0.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "0" : screenDown.innerText + "0" ;});
// _1.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "1" : screenDown.innerText + "1" ;});
// _2.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "2" : screenDown.innerText + "2" ;});
// _3.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "3" : screenDown.innerText + "3" ;});
// _4.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "4" : screenDown.innerText + "4" ;});
// _5.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "5" : screenDown.innerText + "5" ;});
// _6.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "6" : screenDown.innerText + "6" ;});
// _7.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "7" : screenDown.innerText + "7" ;});
// _8.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "8" : screenDown.innerText + "8" ;});
// _9.addEventListener("click", ()=>{screenDown.innerText = (screenDown.innerText == "0") ? screenDown.innerText = "9" : screenDown.innerText + "9" ;});

// // ac eventlistener
// ac.addEventListener("click",()=>{
//     screenDown.innerText = "0"
// })

// pn.addEventListener("click", () =>{
    
// })