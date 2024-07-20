


const getColor=()=>{
    const randomColor=Math.floor(Math.random()*10000000);
    const randomCode="#"+randomColor.toString(16);
    document.getElementById("mmain").style.backgroundColor=randomCode;
    document.getElementById("two").innerHTML=randomCode;
}

document.getElementById("one").addEventListener("click",getColor);