

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');

body.appendChild(container);

// create n rows and n columns using nested for loops

function createGrid(n) {
  // create n row
  for (let i = 0; i < n; i++) {
    let row = document.createElement('div');
    container.appendChild(row);
    row.setAttribute('class', 'row');

    // for each row, we will have n grids
    for (let j = 0; j < n; j++) {
      let grid = document.createElement('div');
      row.appendChild(grid);
      grid.setAttribute('class', 'grid-block');

      // changes grid colour when mouse hovers
      grid.addEventListener("mouseenter", function(e) {
        e.target.setAttribute('style', 'background-color: black;');

        /* reset color after some delay
        setTimeout(function() {
          e.target.setAttribute('style', 'background-color: transparent;');
        }, 500);*/
      });
    }
  }
}

let dimension = 0;
const button = document.querySelector('button');
button.addEventListener('click', function() {
  dimension = prompt('Enter a value between 0 and 100!');
  if (dimension => 0 && dimension <= 100) {
    container.replaceChildren();
    createGrid(dimension);
  }
});


// create 16 x 16 grids
let n = 16;
createGrid(n);


