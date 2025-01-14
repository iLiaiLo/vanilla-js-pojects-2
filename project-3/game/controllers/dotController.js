
const appear=(dot)=>{
    dot.style.display="block";
    dot.style.backgroundColor="black";
    
    const y_pos=Math.floor(Math.random()*281);
    const x_pos=Math.floor(Math.random()*481);

    dot.style.top=`${y_pos}px`;
    dot.style.left=`${x_pos}px`;
}

const disappear=(dot)=>{
    dot.style.display="none";
}

export {appear,disappear};

