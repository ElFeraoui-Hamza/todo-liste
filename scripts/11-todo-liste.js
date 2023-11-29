
const todoListe = [{
  name:'make dinner',
  dueDate:'2022-12-22'
}, {
  name: 'wash dishes',
  dueDate:'2022-12-22'
}];

renderTodoList();

function renderTodoList (){
  let todoListeHTML = '';

  for(let i = 0 ; i< todoListe.length ; i++){
    const todoObject = todoListe[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const{name,dueDate} = todoObject;   
    const html = ` 
      <div >${name}</div>
      <div>${dueDate}</div> 
      <button onclick="  
        todoListe.splice(${i},1);
        renderTodoList();
      "class="delete-todo-button">Delete</button>

    `;
    todoListeHTML += html;
  }

  document.querySelector('.js-todo-list')
  .innerHTML = todoListeHTML; 
}


function addTodo() {
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoListe.push({name,dueDate});

  inputElement.value = '';
  
  renderTodoList();

}
