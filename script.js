

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');

body.appendChild(container);

// create 16 rows and 16 columns using nested for loops

let n = 32;
for (let i = 0; i < n; i++) {
  let row = document.createElement('div');
  container.appendChild(row);
  row.setAttribute('class', 'row');

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
