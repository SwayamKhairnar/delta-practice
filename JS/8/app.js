let para1=document.createElement("p");
para1.innerText="Hey I'm red";
para1.style.color="red";
document.querySelector('body').append(para1);
let h3=document.createElement('h3')
h3.innerText="I'm a blue h3!"
document.querySelector('body').append(h3)
let div=document.createElement("div")
document.querySelector('body').append(div)
let h1=document.createElement("h1")
div.classList.add("div_style")
h1.innerText="I'm in div"
div.append(h1)
// document.querySelector('div').appendChild(h1)