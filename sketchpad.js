const container = document.getElementById('container');

//button function
let gridSize;
const btn = document.querySelector('#button');

btn.addEventListener('click', () => {
    let valid=false;
    while(!valid){
        gridSize=window.prompt('Enter size of #x# grid, # must be 100 or lower!','10');
        if(gridSize<=100){
            valid=true;
        }
    }
    clearGrid();
    formGrid(Number(gridSize));
});

//brush color
const colorPicker = document.querySelector('#color');
let color=colorPicker.value; 
colorPicker.addEventListener('input',(e)=>{
    color = e.target.value;
});

/*drawing mode
let modes = document.querySelectorAll('input[name="mode"]');
//let mode = 'mouseover';

for(let i=0;i<modes.length;i++){
    modes[i].addEventListener('change',(e)=>{
        mode=e.target.value;
    });
TO IMPLEMENT: need to remove the event listener for each div from 
formGrid() and have the divs change event listener mode based on 
class? and change class based on radio button selection
}
*/

//clear grid
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//forming grid
function formGrid(size){
    container.style.setProperty('--grid-rows',size);
    container.style.setProperty('--grid-cols',size);
    for(let i = 0;i<(size*size);i++){
        let div = document.createElement('div');
        
        div.style.backgroundColor='white';
        div.style.border='1px solid lightgrey';
        div.style.width='8px';
        div.style.height='8px';

        div.addEventListener('mouseover',()=> {
            div.style.backgroundColor=color;
        });

        container.appendChild(div).className = 'gridSquare';
    }
}



