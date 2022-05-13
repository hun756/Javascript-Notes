var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

// Then select a context for the canvas, in this case two-dimensional:
var ctx = canvas.getContext('2d');

ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);

// using svg
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');

text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';

text.textContent = 'Hello world!';
svg.appendChild(text);
document.body.appendChild(svg);

// image
var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);