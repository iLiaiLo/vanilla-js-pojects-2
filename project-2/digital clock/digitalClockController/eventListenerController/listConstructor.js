function constructList(ul,timeZones){
    for(let timeZone of timeZones){
        const li=document.createElement("li");
        li.className="time-zone";
        li.textContent=timeZone;
        ul.appendChild(li);
    }
}

export default constructList;