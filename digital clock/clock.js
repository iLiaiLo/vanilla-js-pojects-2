const c=setInterval(change,1000);
const t=setInterval(time,1000);

function time(){
    const d=new Date();
    document.getElementById("time").innerHTML=d.toLocaleTimeString();
}


function change(){
    let num_1=Math.floor(Math.random()*256);
    let num_2=Math.floor(Math.random()*256);
    let num_3=Math.floor(Math.random()*256);
    document.documentElement.style.setProperty('--color',`rgb(${num_1},${num_2},${num_3})`)
}