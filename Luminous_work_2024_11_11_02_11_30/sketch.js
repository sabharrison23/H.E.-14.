
let alien, newMoon, saturn, star;
let comet, firstQuarterMoon, milkyWay, rocket, telescope;


function preload() {
  alien = loadImage('assets/alien.png');
  newMoon = loadImage('assets/new_moon (1).png');
  saturn = loadImage('assets/saturn emoji.png');
  star = loadImage('assets/star.png');

  comet = loadImage('assets 2/comet.png');
  firstQuarterMoon = loadImage('assets 2/first_quarter_moon.png');
  milkyWay = loadImage('assets 2/milky_way.png');
  rocket = loadImage('assets 2/rocket.png');
  telescope = loadImage('assets 2/telescope.png');
}


const backgroundColors = ['#0d0f3d', '#1a1b52', '#3b2f68', '#641b73', '#9c1c6b'];

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  noLoop(); // We only draw on interaction
  background(random(backgroundColors));
}

function drawAlien() {
  image(alien, random(width), random(height), 50, 50);
}

function drawNewMoon() {
  image(newMoon, random(width), random(height), 50, 50);
}

function drawSaturn() {
  image(saturn, random(width), random(height), 80, 80);
}

function drawStar() {
  image(star, random(width), random(height), 40, 40);
}

function drawRandom() {
  let images = [alien, newMoon, saturn, star, comet, firstQuarterMoon, milkyWay, rocket, telescope];
  let randomImage = random(images);
  image(randomImage, random(width), random(height), 80, 80);
}

function clearCanvas() {
  background(random(backgroundColors));
}
