let input = document.querySelector("#input");
let addBtn = document.querySelector("#addbtn");
let Task1 = document.querySelector(".Task1");
let Task2 = document.querySelector(".Task2");
let Task3 = document.querySelector(".Task3");
let Task4 = document.querySelector(".Task4");
let Task5 = document.querySelector(".Task5");




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
    Task1.innerHTML = inputValue + `<i class="fa-solid fa-circle-check icon "></i>`;
    let icon = Task1.querySelector(".icon");
    icon.addEventListener("click", () => {
        alert("Task 1  is Done.");
        console.log("cilck icon");
    })
}
}


const task2msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task2.innerHTML = inputValue + `<i class="fa-solid fa-circle-check icon "></i>`;
    let icon = Task2.querySelector(".icon");
    icon.addEventListener("click", () => {
        alert("Task 2 is Done.");
        console.log("cilck icon");
    })
}
}

const task3msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task3.innerHTML = inputValue + `<i class="fa-solid fa-circle-check icon "></i>`;
    let icon = Task3.querySelector(".icon");
    icon.addEventListener("click", () => {
        alert("Task 3 is Done.");
        console.log("cilck icon");
    })
}
}

const task4msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task4.innerHTML = inputValue + `<i class="fa-solid fa-circle-check icon "></i>`;
    let icon = Task4.querySelector(".icon");
    icon.addEventListener("click", () => {
    alert("Task 4 is Done.");
    console.log("cilck icon");
    })

}
}

const task5msg = (inputValue) => {
    if (inputValue === "") {
        console.log("Enter some thing");
    }else{
    Task5.innerHTML = inputValue + `<i class="fa-solid fa-circle-check icon "></i>`;
    let icon = Task5.querySelector(".icon");
    icon.addEventListener("click", () => {
    alert("Task 5 is Done.");
    console.log("cilck icon");
    })

}
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


    



