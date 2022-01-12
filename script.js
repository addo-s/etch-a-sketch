
const body = document.querySelector('body');


const button = document.createElement('button');
body.appendChild(button);
button.textContent = "Enter grid size";


const container = document.createElement('div');
body.appendChild(container);
container.setAttribute('id', 'container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.flexWrap = 'nowrap';
container.style.width = "28.75rem";
container.style.height = "28.75rem";
container.style.margin = 'auto';


function displayGrid(gridSize) {
    gridSize = gridSize || 16;
    for (let i = 0; i < gridSize; i++) {
        let div1 = document.createElement('div');
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            div.style.width = `calc(28.75rem / ${gridSize})`;
            div.style.height = `calc(28.75rem / ${gridSize})`;
            div.style.display = 'flex';
            div.style.margin = '0.119617rem';
            div.setAttribute('class', 'div');
            div.style.background = '';    
            div.style.border = '0.05px grey solid';
            div1.appendChild(div);                
        }
        document.getElementById('container').appendChild(div1);  
    }
    let grid = document.querySelectorAll('.div');
    for (let a = 0; a < grid.length; a++) {    
        function random_rgba() {
            let o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }    
        let randomColor = random_rgba();   
        grid[a].addEventListener('mouseenter', mouseEnter => 
        grid[a].style.background = randomColor);         
    } 
}     

window.onload = displayGrid();


function userInput() {     
    let x = Number(prompt("Enter a number up to 100"));
    gridSize = x;
    while (container.firstChild) container.removeChild( container.firstChild);
    displayGrid(gridSize);
}
  

button.addEventListener('click', userInput);


 


















