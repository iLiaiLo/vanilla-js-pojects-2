function drawClock(ctx){
    
    const date=new Date();
    const isNight=(date.getHours()>=21 && date.getHours()<=23) || (date.getHours()>=0 && date.getHours()<6);

    ctx.beginPath();
    ctx.fillStyle=isNight?"white":"black";
    ctx.strokeStyle=isNight?"white":"black";
    ctx.lineWidth=5;
    ctx.arc(200,200,180,0,Math.PI*2);
    ctx.stroke();
    

    for(let i=1;i<=12;i++){
        ctx.beginPath();
        ctx.lineWidth = 3;
 
        const angle = (i * Math.PI / 6) - Math.PI / 2;

        const x1 = 200 + 170 * Math.cos(angle);
        const y1 = 200 + 170 * Math.sin(angle);
 
        const x2 = 200 + 180 * Math.cos(angle);
        const y2 = 200 + 180 * Math.sin(angle);

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.font = "25px 'Cute'";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const numX = 200 + 150 * Math.cos(angle);
        const numY = 200 + 150 * Math.sin(angle);

        ctx.fillText(i.toString(), numX, numY);
    }

    ctx.beginPath();
    ctx.arc(200, 200, 5, 0, Math.PI * 2);
    ctx.fill();
   
}

export default drawClock;