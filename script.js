

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');
container.textContent = 'this will contain our square grids';

body.appendChild(container);
container.setAttribute('style', 'display: flex; flex-direction: column; width: 960px');

// create 16 rows and 16 columns using nested for loops

for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  container.appendChild(row);
  row.setAttribute('class', 'row');

  for (let j = 0; j < 16; j++) {
    let grid = document.createElement('div');
    grid.textContent = `${(j + 1) + 16 * (i - 0)}`;
    row.appendChild(grid);
    grid.setAttribute('class', 'grid-block');

    // changes grid colour when mouse hovers
    grid.addEventListener("mouseenter", function(e) {
      e.target.setAttribute('style', 'background-color: black;')
    }
    );

    grid.addEventListener("mouseout", function(e) {
      e.target.setAttribute('style', 'background-color: transparent; transition: opacity 1s')
    }
    );

  }
}
