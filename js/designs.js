const submitButton = document.querySelector("input[type='submit']");
const pixelCanvas = document.getElementById('pixel_canvas');
const colorPicker = document.getElementById("colorPicker");
const heightInput = document.getElementById('input_height');
const widthInput = document.getElementById('input_width');

// Select color input
let colorSelected = colorPicker.value
let heightChosen = heightInput.value;
let widthChosen = widthInput.value;


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for (let i = 0; i < heightChosen; i++) {
    // creates a table row
    let row = document.createElement("tr");
    for (let j = 0; j < widthChosen; j++) {
      // Create a <td> element and put the <td> at
      // the endgi of the table row
      let cell = document.createElement("td");
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    pixelCanvas.appendChild(row);
  }
}

submitButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  heightChosen = heightInput.value;
  widthChosen = widthInput.value;
  makeGrid();
});
