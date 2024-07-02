const body = document.querySelector("body");

const para = document.createElement("p");
para.textContent = "Hey I'm red!"
para.style.color = "red";

body.appendChild(para);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!"
header.style.color = "blue";

body.appendChild(header);

const div = document.createElement("div");
div.style["background-color"] = "pink";
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

const p = document.createElement("p");
p.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p);

body.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });