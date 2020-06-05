const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

const Line = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = 'yellow';
  ctx.stroke();
};

const Horizontal = () => {
  for(let i = 0; i <= 600; i += 20)
    Line(0, i, 600, i);
};

const Vertical = () => {
  for(let i = 0; i <= 600; i += 20)
    Line(i, 600, i, 0);
};

const Diagonal = () => {
  for(let i = 0; i <= 600; i += 20)
    Line(i, 600, i, 0);
};

document.getElementById('Horizontal').addEventListener('click', Horizontal);
document.getElementById('Vertical').addEventListener('click', Vertical);
document.getElementById('Diagonal').addEventListener('click', Diagonal);
