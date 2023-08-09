// function to get DOM element by ID
function $(id){
    return document.getElementById(id)
}

// default value and getting canvas
const canvas = $('main')
const ctx = canvas.getContext('2d')
let isDrawing = false
let startX = 0
let startY = 0
let currentColor = 'black'
let currentBrushSize = $("slider").value

// Event handler when mouse button is pressed
function startDrawing(e) {
isDrawing = true;
[lastX, lastY] = [e.offsetX, e.offsetY];
}

// Event handler while mouse is moved
function draw(e) {
if (!isDrawing) return;
ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.strokeStyle = currentColor;
ctx.lineWidth = currentBrushSize;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.stroke();
[lastX, lastY] = [e.offsetX, e.offsetY];
}

// Event handler when mouse button is released
function stopDrawing() {
isDrawing = false;
}

// Change the current drawing color
function setBrushColor(color) {
currentColor = color;
}

// Update the current brush size
function updateBrushSize(){
currentBrushSize = $('slider').value
$('brushSize').innerHTML = currentBrushSize
}

// Clear the canvas
function cleanCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
