let button = document.querySelector("#button");
let menu= document.querySelector("#menu");

console.log(button);
console.log(menu.classList.contains("collapsible"));

button.addEventListener("click", function(){
    if(menu.classList.contains("collapsible")){
        menu.classList.remove("collapsible");
    }else{
        menu.classList.add("collapsible");
    }
    console.log(menu)
});