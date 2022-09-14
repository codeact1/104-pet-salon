let inputName = document.getElementById("petName");
console.log(inputName);

let links = document.getElementsByClassName("petName");

for(let i=0; i<links.length; i++) {
    links[i].setAttribute("target", "_blank");
    links[i].style..display="none";
}
console.log(links):

let inputs = document.getElementsByTagName("input");
console.log(inputs);
for(let i=0; i<inputs.length; i++) {
    inputs[i].style.display="none";
}

let home =document.querySelector("nav a.link");
console.log(home);

let selectInput = document.querySelector("#petService");
selectInput.style.display="none";