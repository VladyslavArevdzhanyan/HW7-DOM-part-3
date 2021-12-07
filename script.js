let input = document.getElementById('inputText');
let ul = document.getElementById('list');
let btn = document.getElementById('applyBtn');
let block = document.getElementById('block');

function createLiAndButton(text) {
    let li = document.createElement('li');
    li.innerText = text;
    let btnRemove = document.createElement('button');
    btnRemove.innerText = 'Удалить';
    btnRemove.classList.add('btnRemove');
    li.appendChild(btnRemove);
    return li;
};

btn.addEventListener('click', function() {
    if (input.value) {
        ul.appendChild(createLiAndButton(input.value));
        input.value = '';
        input.style.backgroundColor = 'transparent';
    } else {
        input.style.backgroundColor = 'red';
    };
});

ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('background')
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});















