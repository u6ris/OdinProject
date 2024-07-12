const grid = document.querySelector("#grid");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeDescription = document.querySelector(".size");
const buttonClear = document.querySelector("#clear");
const colorModeButton = document.querySelector("#color");
const rainbowModeButton = document.querySelector("#rainbow");
const eraserButton = document.querySelector("#eraser");
const colorPicker = document.querySelector("#colorPicker");

let size = 16;
let currentColor = "#111111"
let currentMode = "color"

let mouseDown = false;
document.body.addEventListener("mousedown", ()=>{mouseDown = true})
document.body.addEventListener("mouseup", ()=>{mouseDown = false})


colorPicker.addEventListener("input",updateColor);

sizeSlider.addEventListener("click", (e) =>{
    sizeDescription.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
    size = e.target.value;
    clearGrid();
})

buttonClear.addEventListener("click", () =>{
    clearGrid();
})

colorModeButton.addEventListener("click", changeMode);
rainbowModeButton.addEventListener("click", changeMode);
eraserButton.addEventListener("click", changeMode)

function generate_grid(number){
    let pixelSize = 400 / number;
    for (let j=0; j<number*number; j++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px`)
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
        grid.appendChild(square);
    }
}

function clearGrid(){
    grid.innerHTML = "";
    generate_grid(size);
}

function updateColor(){
    currentColor = colorPicker.value;
}

function changeColor(e){
    if(e.type === "mouseover" && !mouseDown)return
    if(e.type ==="mousedown") mouseDown = true
    if(currentMode === "color"){
        e.target.style.backgroundColor = currentColor;
    }
    else if(currentMode === "rainbow"){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else{
        e.target.style.backgroundColor = "white";
    }
}

function changeMode(e){
    if (currentMode === "color"){
        colorModeButton.classList.toggle("active");
    } else if (currentMode === "rainbow"){
        rainbowModeButton.classList.toggle("active");
    } else {
        eraserButton.classList.toggle("active");
    }
    currentMode = e.target.id;
    e.target.classList.toggle("active");
}


generate_grid(size);
