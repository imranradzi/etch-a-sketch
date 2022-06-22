

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');
container.textContent = 'this will contain our square grids';

body.appendChild(container);
container.setAttribute('style', 'display: flex; flex-direction: column');

// create 16 rows and 16 columns using nested for loops

for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  container.appendChild(row);
  row.setAttribute('style', `display: flex; flex-direction: row; flex-basis: 50px;
                      flex-grow: 1`);

  for (let j = 0; j < 16; j++) {
    let column = document.createElement('div');
    column.textContent = `c${j + 1}`;
    row.appendChild(column);
    column.setAttribute('class', 'grid-block');
    column.setAttribute('style', 'flex-basis: 50px; flex-grow: 1');
  }
}
