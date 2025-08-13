let butn=document.querySelector("button")



butn.addEventListener("click",function (){
    console.log("generate random color")
    let h3=document.querySelector("h3");
    let randomclr=getrandomClr();
    h3.innerText= randomclr
    let div=document.querySelector("div")
    div.style.backgroundColor=randomclr 
    console.log("Color Updated")
});

function getrandomClr() {
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)

    let color=`rgb(${red},${green},${blue})`
    return color;
}