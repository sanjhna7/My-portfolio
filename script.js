// Alert message when the page loads
alert("Welcome to My Portfolio!");
// Change the background color on button click
function changeBgColor() {
document.body.style.backgroundColor = "#ffebcd";
}
//another
function changeBg() {
   document.body.style.backgroundColor = "#f2ebcd";
    }
// Add a button to the "About Me" section dynamically
const aboutSection = document.getElementById("about");
const button = document.createElement("button");
button.innerText = "Change Background";
button.onclick = changeBgColor;
aboutSection.appendChild(button);
//projects
const projectSection = document.getElementById("projects");
const buton = document.createElement("button");
buton.innerText = "Change Background";
buton.onclick = changeBg;
projectSection.appendChild(buton);
//Console log for practice
console.log("JavaScript is connected and running!");