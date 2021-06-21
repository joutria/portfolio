let button = document.querySelector("#button"),
    menu = document.querySelector("#menu"),
    send = document.querySelector('.send'),
    sname = document.querySelector("#name"),
    email = document.querySelector("#email");

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

send.addEventListener("click", function(){
    alert(`Thanks ${sname.value}, your message was sent successfully!`);
});
