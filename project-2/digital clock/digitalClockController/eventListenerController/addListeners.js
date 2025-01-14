import { ul } from "./eventControllers.js";
import { timeZones } from "../timeZoneList.js";
import { timeZoneSetter } from "./eventControllers.js";
import { listToggle } from "./eventControllers.js";
import { searchTimeZone } from "./eventControllers.js";
import constructList from "./listConstructor.js";
import { switchThemeController } from "./eventControllers.js";

const timeZoneInput=document.querySelector(".timeZone-input");
const switchTheme=document.querySelector(".switch-theme");

export const addClockControllers=()=>{
    constructList(ul,timeZones);
    ul.addEventListener("click",timeZoneSetter);
    document.addEventListener("click",listToggle);
    timeZoneInput.addEventListener("input",searchTimeZone);
    switchTheme.addEventListener("change",switchThemeController);
}