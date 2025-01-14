import drawClock from "./drawClock.js";


const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

function drawHands() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    drawClock(ctx);
   
    ctx.lineCap="round";
   
    const hourAngle = (Math.PI / 6) * (hours + minutes / 60);
    const minuteAngle = (Math.PI / 30) * (minutes + seconds / 60);
    const secondAngle = (Math.PI / 30) * seconds;
    
    //Math.sin(hourAngle - Math.PI / 2)
    //Math.cos(hourAngle - Math.PI / 2)

    ctx.lineWidth = 6;
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + 100 * Math.sin(hourAngle), 200  - 100 * Math.cos(hourAngle)); 
    ctx.stroke();
    
    ctx.lineWidth = 4;
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + 140 * Math.sin(minuteAngle), 200 -  140 * Math.cos(minuteAngle));
    ctx.stroke(); 
   
    ctx.lineWidth = 2;
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + 160 * Math.sin(secondAngle), 200 - 160 * Math.cos(secondAngle));
    ctx.stroke();
   }

   export default drawHands;
   