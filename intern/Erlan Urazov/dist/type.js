"use strict";
var validate = WebAssembly.validate;
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
    addTodo(item) {
        const taskItem = `
            <li data-task-id="${item.id}" class="content__data__item item">
                ${item.title} - ${item.subtitle} 
                <button class="btn btn-success" id="edit" onclick="editTodo(${item.id})" data-id="${item.id}" title="">Edit</button>
                <button class="btn btn-danger" id="delete" onclick="deleteTodo(${item.id})" data-id="${item.id}" title="">Delete</button>
            </li>`;
        this.container.innerHTML += (`${taskItem}`);
    }
}
function deleteTodo(id) {
    const r = confirm("Delete this element? :");
    if (r) {
        list.container.removeChild(list.container.children[id]);
    }
}
const modal = document.getElementById('editModal');
const cont = document.getElementById('cont');
const f = document.querySelector("#form");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const t = document.querySelector('#title');
const s = document.querySelector('#subtitle');
let span = document.querySelector(".span");
let reg = /[A-Za-z]/;
f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(reg, t.value)) {
        // @ts-ignore
        notValid(t.value, span, "is not valid!");
    }
    else {
        // @ts-ignore
        valid(t.value, span, "");
        const itemTodo = new TodoItem((list.container.children.length), t.value, s.value);
        // list.addTodo(itemTodo);
        localStorage.setItem(itemTodo.title, itemTodo.subtitle);
        // console.log(localStorage);
    }
    function validate(regex, inp) {
        return regex.test(inp);
    }
    function notValid(inp, el, mess) {
        inp.classList.add("is-invalid");
        el.innerHTML = mess;
    }
    function valid(inp, el, mess) {
        inp.classList.remove("is-invalid");
        inp.classList.add("is-valid");
        el.innerHTML = mess;
    }
});
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem("key");
    ul.innerHTML += `<li class="content__data__item item">
                            ${key} - ${value} 
                            <button class="btn btn-success" id="edit" title="">Edit</button>
                            <button class="btn btn-danger" id="delete" title="">Delete</button>
                        </li>`;
}
function editTodo(id) {
    // @ts-ignore
    modal.style.display = "block";
    // @ts-ignore
    cont.classList.add("opc");
    // @ts-ignore
    let modalTitle = document.getElementById("modalTitle").value = list.container.getElementsByTagName("li")[id].innerText.split(" ")[0];
    let modalSubtitle = document.getElementById("modalSubtitle").value = list.container.getElementsByTagName("li")[id].innerText.split(" ")[2];
    console.log(modalTitle + " " + modalSubtitle);
    console.log(list.container.children[id]);
    // console.log(list.container.getElementsByTagName("li")[id].innerText.split(" "));
}
// modal.addEventListener('submit', (e: Event) =>{
//
// });
function closeModal() {
    // @ts-ignore
    modal.style.display = "none";
    // @ts-ignore
    cont.classList.remove("opc");
    console.log("close modal");
}
