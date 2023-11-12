let canvas = document.getElementById("display");
let argumentsInput = document.getElementById("text");
let Ccode = document.getElementById("Ccode");
let Algorithms = document.getElementsByClassName("dropDown-list");
let ActiveAlgo = "";

argumentsInput.placeholder = "Select The Algorithm";

let expression = "Here goes the expression ";
let result ="Loading... Result";
//Activators

function activeAlgos(){
    let algos = document.getElementById("algos").value;
    ActiveAlgo= algos;
    if(ActiveAlgo=="Sinx"){
        argumentsInput.placeholder = "Enter comma separated (angle,term) value without brackets";

    }else if(ActiveAlgo=="Cosx"){
        argumentsInput.placeholder = "Enter comma separated (angle,term) value without brackets";
    }
    else if(ActiveAlgo=="Polynomial Value"){
        argumentsInput.placeholder = "Put comma separated coefficient of eqn Anx^n+An-1x^n-1+An-2x^n-2+....+A0 last term will be value of variable x";
    }else if(ActiveAlgo=="Polynomial Division"){
        argumentsInput.placeholder = "Enter coefficient of eqn Anx^n+An-1x^n-1+An-2x^n-2+....+A0";
    }
    else if(ActiveAlgo=="Algorithms"){
        argumentsInput.placeholder = "Select The Algorithm";
    }
   
}


const ctx = canvas.getContext("2d");

let input = "";
let Arguments=[];
let number="" ;

function calculate(){
    if(ActiveAlgo=="Sinx"){
    
    const sinf = new sinx(Arguments[0],Arguments[1]);
    Ccode.innerHTML = sinf.Ccode();
    result = sinf.func();
    expression = sinf.expressios();

    }

    if(ActiveAlgo=="Cosx"){
        const cosf = new Cosx(Arguments[0],Arguments[1]);
        Ccode.innerHTML=cosf.Ccode();
        result = cosf.func();
        expression = cosf.expressios();

    }

    if(ActiveAlgo=="Polynomial Value"){
        const polyValue = new PolynomialValue(Arguments,Arguments[Arguments.length-1]);
        Ccode.innerHTML = polyValue.Ccode();
        result = polyValue.func();
        expression = polyValue.expressios();
    }

    if(ActiveAlgo=="Polynomial Division"){
        const polyDivision = new polyDiv(Arguments);
        Ccode.innerHTML = polyDivision.Ccode();
        result = `Quotioent ${polyDivision.func().quotioent} | Remainder ${polyDivision.func().remainder}`;
        expression = polyDivision.expressios();

    }
}
    






//adding console text
function text(text,color,x,y,fontSize = "10px",font="orbitron"){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = `${fontSize} ${font}`;

    ctx.textBaseline = 'middle'
    ctx.fillText(text , x, y);
}

// Removing characters other than comma and digits
argumentsInput.addEventListener('input', function (event) {
    const currentValue = event.target.value;
    const sanitizedValue = currentValue.replace(/[^,.\d]/g, ''); 
    event.target.value = sanitizedValue;
});

//getting input
argumentsInput.addEventListener("input",()=>{
    input = argumentsInput.value;
})

argumentsInput.addEventListener("change",()=>{
    for(let i=0;i<input.length;i++){
        if(input[i]!=",")
        {
            number = number + input[i];   
        }
        else if(input[i]==",")
        {   
            Arguments.push(parseFloat(number));
            number="";
        }
        if(i==input.length-1){
            Arguments.push(parseFloat(number));
            number="";
        }
    }
    console.log(Arguments);
})



argumentsInput.addEventListener("focus",()=>{
    
    Arguments = [];
    argumentsInput.value="";
    input = "";
})



//canvas animation
animate();
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    text("console😊","green",4,10);
    text(expression,"green",4,40,"10px");
    text(`result => ${result}`,"green",4,80);
    text(`Made with 💚 By Rajveer`,"green",50,140,"8px");
    requestAnimationFrame(animate);
}





