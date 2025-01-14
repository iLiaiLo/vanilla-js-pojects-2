import { options } from "../timeZoneList.js";

export const ul=document.querySelector(".time-zones");
const timeZoneInput=document.querySelector(".timeZone-input");

export const timeZoneSetter=(e)=>{
    if(e.target.tagName==="LI"){
        options.timeZone=e.target.textContent;
    }
}
export const listToggle=(e)=>{
    if(e.target.tagName==="INPUT"){
        ul.style.display="block";
    }
    else if(e.target.tagName!=="INPUT" && e.target.tagName!=="LI" && e.target.tagName!=="UL"){
        ul.style.display="none";
    }
}

export const searchTimeZone=(e)=>{
    const inputText=e.target.value.toUpperCase();
    const children=ul.children;
    
    for(let i=0;i<children.length;i++){
        const upper=children[i].textContent.toUpperCase();
        children[i].style.display=upper.includes(inputText) && inputText?"block":"none";
    }
}

export const switchThemeController=(e)=>{
    if(e.target.checked){
        e.target.style.setProperty("--leftpos","15px");
        document.body.style.backgroundColor="black";
        document.body.style.color="green";
        document.body.style.textShadow="0 0 6px green";
        timeZoneInput.style.border="2px solid green"
        timeZoneInput.style.color="green"
        timeZoneInput.style.backgroundColor="transparent";

    }
    else{
        e.target.style.setProperty("--leftpos","-5px");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        document.body.style.textShadow="none";
        timeZoneInput.style.border="1px solid black"
        timeZoneInput.style.color="black"
        timeZoneInput.style.backgroundColor="white";
    } 
}




