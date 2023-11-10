let canvas = document.getElementById("display");
console.log(canvas)

const ctx = canvas.getContext("2d");

//adding console text

function text(text,color,x,y,font="orbitron",fontSize = "10px"){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = `${fontSize} ${font}`;
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text , x, y);
}

function animate(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height)
    text("Display","green",16,10);
    requestAnimationFrame(animate);
}
animate();



