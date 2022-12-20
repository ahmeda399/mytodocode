const inputfield = document.getElementById('field');
const addAct = document.getElementById('add');
const todoContainer = document.getElementById('todo-container');

addAct.addEventListener('click',function() {
    let paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    todoContainer.appendChild(paragraph);
    
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick',function() {
    todoContainer.removeChild(paragraph); 

    })
})