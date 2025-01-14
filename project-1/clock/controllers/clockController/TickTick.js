import drawHands from "./drawHands.js";
import setStyles from "../styleController/dayTimeStyles.js";
function TickTick(){
    function updateClock() {
        drawHands(); 
        requestAnimationFrame(updateClock); 
    }
    updateClock();
    setStyles();
}

export default TickTick;