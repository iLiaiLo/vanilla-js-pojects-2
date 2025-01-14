import { disappear,appear} from "./dotController.js";
import { delay } from "./timeDelay.js";

const dot=document.getElementById("point");
const timeContainer=document.getElementById("time");
const btn=document.getElementById("button");
const result=document.getElementById("result");
const score=document.getElementById("score");

const increaseScore=()=> {
    let num=+score.value;
    score.value=`${num + 1}`;
}

async function start(){
    let time = 5;
    let time_limit = time;
  
    score.value = "0";
    result.textContent = "";
    dot.addEventListener("click",increaseScore);
    
    const countdownInterval = setInterval(countdown, 1000);

    async function countdown() {
        try {

            btn.disabled = true;
            let minutes = Math.floor(time_limit / 60);
            let seconds = time_limit % 60;
            timeContainer.innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    
            if(time_limit > 0){
                appear(dot);
                await delay(800);
                disappear(dot);
            }
            
            time_limit--;
        
            if (time_limit < 0) {
                clearInterval(countdownInterval);
                dot.removeEventListener("click",increaseScore);
                btn.disabled = false;
                result.innerHTML = `Your score is ${score.value}`;
            }
          
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default start;
