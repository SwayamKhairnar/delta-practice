h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            h1.style.color=color;
            if (h1.style.color==="") {
                reject("invalid color: "+color)
            }else{
            resolve("colur was changed")}
        },delay)
    });
}

changeColor("red",1000)
    .then(()=>{
        console.log("color was changed to red")
        return changeColor("blue",1000)
    })
    .then(()=>{
        console.log("color was changed to blue")
        return changeColor("orang",1000)
    })
    .then(()=>{
        console.log("color was changed to orange")
    })
    .catch((err)=>{
        console.log("color change failed ",err)
    })