const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addList = todo =>{

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-regular fa-trash-can delete"></i>
    </li>
    `;
    todos.innerHTML+=html;
}


addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length > 0){
        addList(todo);
        addForm.reset();
    }
})

todos.addEventListener('click', e=>{
   if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
   }
})

const filterTodos = term =>{

    Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'))

    Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
}
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})