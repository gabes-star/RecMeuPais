const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

creatBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let editableSpan = document.createElement("span");
    let iContainer = document.createElement("div");
    let i = document.createElement("i");
    inputBox.className = "input-box";
    editableSpan.contentEditable = "true";
    i.className = "fa-solid fa-trash";
    iContainer.className = "icon-container";
    iContainer.appendChild(i);
    inputBox.appendChild(editableSpan);
    inputBox.appendChild(iContainer);
    notesContainer.appendChild(inputBox);
    notes = document.querySelectorAll(".input-box");
})

notesContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-trash")){
      e.target.closest(".input-box").remove(); // remove o elemento .input-box
    }
  })