async function todoList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const list = await response.json();
    console.log(list);
}
todoList();

const recibirTodos = async () => {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todosJson = await todos.json();
    console.log(todosJson)
}
recibirTodos();