let input = document.querySelector("#input");
let addBtn = document.querySelector("#addbtn");
let Task1 = document.querySelector(".Task1");
let Task2 = document.querySelector(".Task2");
let Task3 = document.querySelector(".Task3");
let Task4 = document.querySelector(".Task4");
let Task5 = document.querySelector(".Task5");
let icons = document.querySelectorAll(".icon");



let count = 0;

let reset = () => {
    input.value = "";
    if (count === 5) {
        count = 0;
    }
    
}



const task1msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task1.innerText = inputValue;
}
}


const task2msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task2.innerText = inputValue;}
}

const task3msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task3.innerText = inputValue;}
}

const task4msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task4.innerText = inputValue;}
}

const task5msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task5.innerText = inputValue;}
}



addBtn.addEventListener("click", function() {
    let inputValue = input.value;
    console.log("User typed:", inputValue);
    if (inputValue !== "" ) {
        count++;
        console.log(count);}
    if (count === 1) {
    task1msg(inputValue);}
    else if (count === 2 ) {
    task2msg(inputValue);
    }else if (count === 3 ) {
    task3msg(inputValue);
    }else if (count === 4 ) {
    task4msg(inputValue);
    }else if (count === 5 ) {
    task5msg(inputValue);
    }
    reset();
  });

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log("icon was clicked!");
        
    })
    
})


