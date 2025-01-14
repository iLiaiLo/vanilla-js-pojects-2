
function setStyles(){
    const date=new Date();
    const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dayMonthYear=`${days[date.getDay()]} ${month[date.getMonth()]} ${date.getFullYear()}`;

    if(date.getHours()>=6 && date.getHours()<12){
        document.querySelector("greeting").textContent="Good morning!";
        document.querySelector(".day-month-year").textContent=dayMonthYear;
        document.body.style.backgroundImage="radial-gradient(farthest-side at 50% 120%,  yellow, white,skyblue)";
    }

    else if(date.getHours()>=12 && date.getHours()<18){
        document.querySelector("#greeting").textContent="Good afternoon!";
        document.querySelector(".day-month-year").textContent=dayMonthYear;
        document.body.style.backgroundImage="radial-gradient(circle,yellow,white,skyblue)";
    }

    else if(date.getHours()>=18 && date.getHours()<21){
        document.querySelector("#greeting").textContent="Good evening!";
        document.querySelector(".day-month-year").textContent=dayMonthYear;
        document.body.style.backgroundImage="radial-gradient(farthest-side at 50% 120%,  #ffa600, white,#ffb2bf)";

    }

    else if((date.getHours()>=21 && date.getHours()<=23) || (date.getHours()>=0 && date.getHours()<6)){
        document.querySelector("#greeting").textContent="Good night!";
        document.querySelector("#greeting").style.color="white";
        document.querySelector(".day-month-year").textContent=dayMonthYear;
        document.querySelector(".day-month-year").style.color="white";
        document.body.style.backgroundImage="linear-gradient(to bottom, black, darkblue)";
    }
}
export default setStyles;