let input = document.getElementById('inputText');
let ul = document.getElementById('list');
let btn = document.getElementById('applyBtn');

btn.addEventListener('click', function() {
    if (input.value) {
        function create() {
            let li = document.createElement('li');
            let liValue = document.createTextNode(input.value);
            li.appendChild(liValue);
            ul.appendChild(li);

            let btnRemove = document.createElement('button');
            let btnName = document.createTextNode('Удалить');
            btnRemove.classList.add('btnRemove');
            btnRemove.appendChild(btnName);
            li.appendChild(btnRemove);
        }
        create();

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
















