let input = document.querySelector("#input");
let addBtn = document.querySelector("#addbtn");
let Task1 = document.querySelector(".Task1");
let icons = document.querySelector("#icon");

let reset = () => {
    input.value = "";
    icons.visibility = "visible";

}

const task1msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task1.innerText = inputValue;}

}

addBtn.addEventListener("click", function() {
    let inputValue = input.value;
    console.log("User typed:", inputValue);
    reset();
    task1msg(inputValue);

  });

