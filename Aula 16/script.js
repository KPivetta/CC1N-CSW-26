document.writeln("Hello World !!!");

window.alert("Hello World againn !!!");

document.getElementById("title").innerHTML = "Hello World, I like Javascript!"

window.prompt("What your name ?")


let namePrompt = window.prompt("What your name ?")

document.getElementById("name").innerHTML = namePrompt

let resp = window.confirm(" Do you like JavaScript ?")
if (resp) {
    document.getElementById("resposta").innerHTML = "The student is enjoying javascript class"
}
else {
    document.getElementById("resposta").innerHTML = "NO! The student doesn't like javascript class"
}

function sendName() {
   let nameAnswer = document.getElementById("inputName").value

   const answer = document.getElementById("containerAnswer");

   document.getElementById("containerAnswer").innerHTML = "The name write is " + nameAnswer;


   answer.style.display = "flex";
   answer.innerHTML = "The name write is " + nameAnswer;
   answer.style.height = "150px";
   answer.style.backgroundImage = "Linear-gradient(to right, red, violet, yellow)";
   answer.style.justifyContent = "Center"
   answer.style.alignItems = "Center"

   answer.style.fontSize = "20px";

   answer.style.border = " 2px solid #6f00ffff"
}
