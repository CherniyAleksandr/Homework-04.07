function changeSquareColorAndSize() {
    const square = document.getElementById('square1');
    if (square.style.backgroundColor === 'green') {
        square.style.backgroundColor = 'red';
        square.style.width = '200px';
        square.style.height = '200px';
    } else {
        square.style.backgroundColor = 'green';
        square.style.width = '100px';
        square.style.height = '100px';
    }
}

function changeSquareColor() {
    const square = document.getElementById('square2');
    if (square.style.backgroundColor === 'blue') {
        square.style.backgroundColor = 'pink';
    } else {
        square.style.backgroundColor = 'blue';
        console.log('Цвет изменен на: ' + square.style.backgroundColor);
    }
}

function increaseSquareSize() {
    const square = document.getElementById('square3');
    if (square.style.width === '300px') {
      square.style.width = '200px';
      square.style.height = '200px';
    } else {
      square.style.width = '300px';
      square.style.height = '300px';
    }
  }

function createBlueParagraph() {
    const root = document.getElementById('root');
    const paragraph = document.createElement('p');
    paragraph.style.color = 'blue';
    paragraph.textContent = 'Здесь синий текст';
    root.appendChild(paragraph);
}

function createColoredParagraphs() {
    const root = document.getElementById('root2');
    const colors = ['blue', 'green'];
    const paragraph = document.createElement('p');
    paragraph.style.color = colors[root.children.length % 2];
    paragraph.textContent = 'Синий, зелёный';
    root.appendChild(paragraph);
}