const div = document.createElement('div');
const container = document.getElementById('container');

div.style.backgroundColor='red';
div.style.width='100px';
div.style.height='100px';

container.appendChild(div);

//button function
let gridSize = 10;
const btn = document.querySelector('#btn');

function popup(){
    gridSize = Number(window.prompt('Enter size of #x# grid:','10'));
}

btn.addEventListener('click', popup());


