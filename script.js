let input = document.getElementById('inputText');
let ul = document.getElementById('list');


document.getElementById('applyBtn').addEventListener('click', function() {
    if (input.value) {
        let li = document.createElement('li');
        let liValue = document.createTextNode(input.value);
        li.appendChild(liValue);
        ul.appendChild(li);
        li.onclick = function(event) {
            event.target = li.classList.toggle('background');
        }
        input.value = '';
        input.style.backgroundColor = 'transparent';
        let btn = document.createElement('button');
        let btnName = document.createTextNode('Удалить');
        btn.classList.add('btnRemove');
        btn.appendChild(btnName);
        li.appendChild(btn);
    } else {
        input.style.backgroundColor = 'red';
    } 
});

document.getElementById('list').addEventListener('click', function removeItem(event) {
    var del = event.target;
    if (del.tagName === "BUTTON") {
      del.closest('li').remove();
    } return false;
})
















