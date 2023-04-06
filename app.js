window.addEventListener("load", function () {
    const btnAdd = document.querySelector(".btn-add");
    const wrapper = document.querySelector(".wrapper");
    const inpTitle = document.querySelector(".inp-first");
    const inpText = document.querySelector(".inp-second");
    const btnEdit = document.querySelector(".btn-edit");
    const icon = document.querySelector('i');

    function addTodo() {
        const div = document.createElement("div");
        div.classList.add("block");

        const titleBlock = document.createElement("div");
        titleBlock.classList.add("title");
        const h1 = document.createElement("h1");
        h1.innerText = inpTitle.value;
        titleBlock.appendChild(h1);
        div.appendChild(titleBlock);

        const text = document.createElement("div");
        text.classList.add("text");
        const h3 = document.createElement("h3");
        h3.innerText = inpText.value;
        text.appendChild(h3);
        div.appendChild(text);

        const edit = document.createElement("button");
        edit.classList.add("btn-edit");
        const icon = document.createElement("i");
        icon.classList.add("fa-regular", "fa-pen-to-square");
        edit.appendChild(icon);
        div.appendChild(edit);

        const btn = document.createElement("button");
        btn.classList.add("btn-remove");
        btn.textContent = "Удалить";
        btn.addEventListener("click", function () {
            div.remove();
        });
        div.appendChild(btn);
        wrapper.appendChild(div);
    }

    btnAdd.addEventListener("click", addTodo);
});
