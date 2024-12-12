let inputbox = document.querySelector("#inputBox");
let btn = document.querySelector("button");
let list = document.querySelector(".list-container");
let tagName = document.querySelector("li");

btn.addEventListener("click" , function(e){
    if(inputbox.value === ""){
        alert("you must have to write something");
    }else{
        const li = document.createElement("li");
        li.innerHTML = inputbox.value
        list.prepend(li);
        const spn = document.createElement("span");
        li.append(spn);

        inputbox.value = "";
        storeData();
    }
})

list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
    
})

function storeData(){
    localStorage.setItem("data" , list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();