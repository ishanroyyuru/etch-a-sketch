const container = document.querySelector("#container");
container.style.display = "flex";

let answer = ""
const button = document.querySelector("button");
button.addEventListener('click', function(){
    let answer = prompt("How many squares do you want per side for the new grid?");
    if(answer > 100){
        answer = 100;
    }
    let rows = Array.from(document.querySelectorAll(".row"));
    rows.forEach((layer) => container.removeChild(layer))
    for(let k = 0; k < answer; k++){
        var row = document.createElement("div");
        row.style.display = "flex";
        row.classList.add("row");
        for(let l = 0; l < answer; l++){
            var gridsquare = document.createElement("div");
            let height = (640/answer)-2;
            let width = (640/answer);
            gridsquare.style.height = height + "px";
            gridsquare.style.width = width + "px";
            gridsquare.style.border = "thin solid black"
            gridsquare.style.display = "block";
            gridsquare.classList.add("gridsquare");
            row.appendChild(gridsquare);
        }
        container.appendChild(row);
    }
    let myArray = Array.from(document.querySelectorAll(".gridsquare"));
    myArray.forEach((item) => item.addEventListener('mouseover', function(){
    let rand = Math.floor(Math.random()*16777215).toString(16);
    item.style.background = "#" + rand;
}))

})


for(let i = 0; i < 16; i++){
    var row = document.createElement("div");
    row.style.display = "flex";
    row.classList.add("row");
    for(let j = 0; j < 16; j++){
        var gridsquare = document.createElement("div");
        gridsquare.style.height = "38px";
        gridsquare.style.width = "40px";
        gridsquare.style.border = "thin solid black"
        gridsquare.style.display = "block";
        gridsquare.classList.add("gridsquare");
        row.appendChild(gridsquare);
    }
    container.appendChild(row);
}

let myArray = Array.from(document.querySelectorAll(".gridsquare"));
myArray.forEach((item) => item.addEventListener('mouseover', function(){
    let rand = Math.floor(Math.random()*16777215).toString(16);
    item.style.background = "#" + rand;
}))
