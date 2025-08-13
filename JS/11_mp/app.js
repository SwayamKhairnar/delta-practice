let input = document.querySelector("input");
let butn = document.querySelector("button");
let ul = document.querySelector("ul");

butn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let del = document.createElement("button");
    del.innerText = "delete";
    
    del.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(del);
    ul.appendChild(item);

    input.value = "";
});
