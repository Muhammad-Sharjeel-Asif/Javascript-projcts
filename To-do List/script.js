const InputTodo = document.getElementById('input-todo');
const ListDisplay = document.getElementById('list-display');

let AddTodo = ()=>{
    if (InputTodo.value === '') {
        alert('Please enter a to-do item');
    } else {
        let Todo_li = document.createElement('li') 
        Todo_li.innerHTML = InputTodo.value;
        ListDisplay.appendChild(Todo_li);

        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        Todo_li.appendChild(span);
    }
    saveTodo()
}

ListDisplay.addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveTodo();
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveTodo();
    }
})

let saveTodo = ()=>{
    localStorage.setItem('Data', ListDisplay.innerHTML)
}

let show_savedTodo = ()=>{
    ListDisplay.innerHTML = localStorage.getItem('Data')
}

show_savedTodo()