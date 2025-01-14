import {options,months} from "./digitalClockController/timeZoneList.js";
import { addClockControllers } from "./digitalClockController/eventListenerController/addListeners.js";

const Time=document.querySelector(".digital-clock");
const weekday=document.querySelector("#weekday");
const day=document.querySelector("#day");
const month=document.querySelector("#month");
const year=document.querySelector("#year");


addClockControllers();

function timeOut() { 
    const formatter = new Intl.DateTimeFormat([], options);
    const date = new Date();
    const fullTime=formatter.format(date).split(", ");
    const index= +fullTime[1].split("/")[0];

    const time = fullTime[2];
    weekday.textContent = fullTime[0]
    month.textContent = months[index-1];
    day.textContent = fullTime[1].split("/")[1];
    year.textContent = fullTime[1].split("/")[2];

    Time.textContent = time;
} 

timeOut();

setInterval(timeOut,1000);


