let dot=document.getElementById("point");
dot.style.display="none";

function start(){
    var time=60;
    var time_limit=time;

function countdown(){
    var minutes=Math.floor(time_limit/60);
    var seconds=time_limit%60;



    let ap=setTimeout(appear,1000);
    let disap=setTimeout(disappear,500);
    
    
 

    document.getElementById("time").innerHTML=minutes+":"+seconds.toString().padStart(2,"0");
    document.getElementById("button").disabled=true;
    
    time_limit--

    
    if(time_limit<0){
        clearTimeout(ap);
        clearTimeout(disap);
        clearInterval(countdownInterval);
        el.removeEventListener("click", increaseScore);
        let res=document.getElementById("score");
        document.getElementById("result").innerHTML=`your score is ${res.value}`;
        if(res.value>=0 && res.value<=3){
            const target=document.getElementById("emoji");
            const picture=document.createElement("img");
            picture.src="sad.png";
            picture.style.width="50px";
            picture.style.height="50px";
            target.innerHTML=picture.outerHTML;
        }
        else if(res.value>3 && res.value<=7){
            const target=document.getElementById("emoji");
            const picture=document.createElement("img");
            picture.src="average.png";
            picture.style.width="50px";
            picture.style.height="50px";
            target.innerHTML=picture.outerHTML;
        }
        else if(res.value>7){
            const target=document.getElementById("emoji");
            const picture=document.createElement("img");
            picture.src="good.png";
            picture.style.width="50px";
            picture.style.height="50px";
            target.innerHTML=picture.outerHTML;
        }
        document.getElementById("button").disabled=false;
    }  
    
   
    
    
    
   
}

var countdownInterval=setInterval(countdown,1000);
  

var el = document.getElementById("point");
el.addEventListener("click", increaseScore);

function increaseScore() {
document.getElementById("score").stepUp();
}

function appear(){
    dot.style.display="block";
    dot.style.background="black";
    let elem=document.getElementById("point");
    let y_pos=Math.floor(Math.random()*281);
    let x_pos=Math.floor(Math.random()*481);

    elem.style.top=`${y_pos}px`;

    elem.style.left=`${x_pos}px`;
}

function disappear(){
    dot.style.display="none";
}
    document.getElementById("score").value="0";
    document.getElementById("result").innerHTML="";
    document.getElementById("emoji").innerHTML="";
    dot.style.diaplay="none";
}

