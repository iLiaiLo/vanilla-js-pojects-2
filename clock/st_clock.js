
const d=new Date();
if(d.getHours()>=6 && d.getHours()<12){
    document.getElementById("time").innerHTML="good morning";
    document.body.style.backgroundImage="radial-gradient(farthest-side at 50% 120%,  yellow, white,skyblue)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundAttachment="fixed";
    moon.removeAttribute("class");
    document.removeChild(moon);
}

else if(d.getHours()>=12 && d.getHours()<18){
    document.getElementById("time").innerHTML="good afternoon";
    document.body.style.backgroundImage="radial-gradient(circle,yellow,white,skyblue)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundAttachment="fixed";
}

else if(d.getHours()>=18 && d.getHours()<21){
    document.getElementById("time").innerHTML="good evening";
    document.body.style.backgroundImage="radial-gradient(farthest-side at 50% 120%,  rgb(255, 166, 0), white,rgb(255, 178, 191))";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundAttachment="fixed";
}

else if((d.getHours()>=21 && d.getHours()<=23) || (d.getHours()>=0 && d.getHours()<6)){
    document.getElementById("time").innerHTML="good night";
    document.getElementById("time").style.color="white";
    document.body.style.backgroundImage="linear-gradient(to bottom, black, darkblue)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundAttachment="fixed";
    
    document.getElementById("d").style.background="white";
    document.getElementById("l12").style.background="white";
    document.getElementById("l9").style.background="white";
    document.getElementById("l3").style.background="white";
    document.getElementById("l6").style.background="white";
    document.getElementById("twelwe").style.color="white";
    document.getElementById("six").style.color="white";
    document.getElementById("nine").style.color="white";
    document.getElementById("tree").style.color="white";
    document.getElementById("rotate").style.background="white";
    document.getElementById("rotate2").style.background="white";
    document.getElementById("rotate3").style.background="white";
    document.getElementById("frame").style.borderColor="white";
    
    var moon=document.createElement("div");
    
    moon.className="circle_moon";
    
    document.body.appendChild(moon);
    document.getElementById("stars").style.display="block";
    
}







   

setInterval(rotate_sec,1000);

            function rotate_sec(){
                const date=new Date();

                var s=date.getSeconds();
                var second_arrow=s*6+90;
                document.getElementById("rotate").style.transform=`rotate(${second_arrow}deg)`;

            }


           setInterval(rotate_min,1000);

           function rotate_min(){
            const date=new Date();

            var s=date.getSeconds();
            var m=date.getMinutes();
            var minute_arrow=m*6+90;
            document.getElementById("rotate2").style.transform=`rotate(${minute_arrow}deg)`;
           }

           setInterval(rotate_hour,1000)

           function rotate_hour(){
            const date=new Date();

            var m=date.getMinutes();
            var h=date.getHours();
            var hour_arrow=((h-12)*30+90+m/2);
           document.getElementById("rotate3").style.transform=`rotate(${hour_arrow}deg)`;
           }
           window.onload= function() {
           rotate_sec();
           rotate_min();
           rotate_hour();
           const date = new Date();
           };
    


