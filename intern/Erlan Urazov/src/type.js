"use strict";
class TodoItem {
    constructor(id, title, subtitle) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
    }
}
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item) {
        const taskItem = `
            <li data-task-id="${item.id}" class="content__data__item item">
                ${item.title} - ${item.subtitle} 
                <button class="btn btn-success" id="edit" data-id="${item.id}" data-action="Remove" title="">Edit</button>
                <button class="btn btn-danger" id="delete" data-id="${item.id}" data-action="Remove" title="">Delete</button>
            </li>`;
        this.container.innerHTML += (`${taskItem}`);
    }
}
const f = document.querySelector("#form");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const t = document.querySelector('#title');
const s = document.querySelector('#subtitle');
const d = document.querySelector('#delete');
f.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemTodo = new TodoItem((list.container.children.length), t.value, s.value);
    list.render(itemTodo);
    // @ts-ignore
    d.addEventListener('click', (e) => {
        // e.preventDefault();
        // const itemTodo: TodoItem = new TodoItem((list.container.children.length), t.value, s.value);
        console.log(itemTodo);
    });
});
