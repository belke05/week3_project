// // inside of a module we can export the functions and variables that we need
// // just include their names inside the export
// // export {}

// let canvas = document.getElementById("canvas");
// // let parent_width = document.getElementById("parent_container").clientWidth;
// // let parent_height = document.getElementById("parent_container").clientHeight;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // window.addEventListener("resize", function() {
// //   canvas.width = window.innerWidth;
// //   canvas.height = window.innerHeight;
// //   init();
// // });

// // we create a super object inside our canvas
// var ctx = canvas.getContext("2d");

// let maxRadius = 13;

// // canvas.onmousemove = function(event) {
// //   console.log(event);
// //   mouse.x = event.x;
// //   mouse.y = event.y;
// //   console.log(mouse);
// // };

// // ctx.fillStyle = "blue";
// // ctx.fillRect(100, 100, 100, 100);
// // ctx.fillStyle = "yellow";
// // ctx.fillRect(400, 100, 100, 100);
// // drawing a line

// // ctx.beginPath();
// // console.log(ctx);
// // ctx.moveTo(200, 200);
// // ctx.lineTo(300, 300);
// // ctx.lineTo(400, 200);
// // ctx.strokeStyle = "red";
// // ctx.stroke();
// // ctx.closePath();

// // function to draw a circle
// // randomly with random colors

// function Circle(x, y, radius, fullorhalf, dx, dy) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.minRadius;
//   this.fullorhalf = fullorhalf;
//   this.dx = dx;
//   this.dy = dy;
//   // if we want to specificy the colors we want
//   this.colors = ["white", "darkgoldenrod", "darkred"];
//   this.colorsRandomPick = this.colors[Math.floor(Math.random() * 3)];
//   // this will make sure our circles have different colors
//   this.rndmR = Math.floor(Math.random() * 255);
//   this.rndmG = Math.floor(Math.random() * 255);
//   this.rndmB = Math.floor(Math.random() * 255);
// }

// Circle.prototype.draw = function() {
//   ctx.beginPath();
//   ctx.lineWidth = 2;
//   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * this.fullorhalf, true);
//   ctx.strokeStyle = `rgb(${this.rndmR}, ${this.rndmG}, ${this.rndmB})`;
//   // change this if we want different colors
//   // ctx.fillStyle = `rgb(${this.rndmR}, ${this.rndmG}, ${this.rndmB})`;
//   ctx.fillStyle = this.colorsRandomPick;
//   ctx.fill();
//   ctx.closePath();
// };

// Circle.prototype.update = function() {
//   this.x += this.dx;
//   // this.y += this.dy;
//   if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
//     this.dx = -this.dx;
//     // console.log("bounce left or right");
//   }
//   if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
//     this.dy = -this.dy;
//     // console.log("bounce up or down");
//   }

//   this.draw();
// };

// Circle.prototype.randomizeCircle = function() {
//   this.radius = Math.floor(Math.random() * 6);
//   this.x = Math.floor(Math.random() * canvas.width) + this.radius;
//   this.y = Math.floor(Math.random() * canvas.height) + this.radius;
//   this.dx = (Math.random() - 0.5) * 0.5;
//   this.dy = (Math.random() - 0.5) * 0.5;
//   this.minRadius = Math.floor(Math.random() * 4);
//   // makes it spawn on random position on each refresh
//   // we use dx as a standard for x velocity
//   // make it travel at random velocity on each refresh
//   // so that it will travel back forward left our right
//   // math random - 0.5 gives us equal chance on + or -
// };

// let circleStorage = [];

// // reseting the circle array
// // so they always fill the screen
// for (let i = 0; i < 400; i++) {
//   var circle = new Circle(0, 0, 0, 2, 0, 0);
//   circle.randomizeCircle();
//   circleStorage.push(circle);
// }

// //-------- function to animata -------//

// function animate() {
//   requestAnimationFrame(animate);
//   // clear the canvas other wise you will draw circels on top
//   // of eachother
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   circleStorage.forEach(el => {
//     el.update();
//   });
//   // plus and minus the radius so we take edges into account
// }

// animate();
// init();

// inside of a module we can export the functions and variables that we need
// just include their names inside the export
// export {}

let canvas = document.getElementById("canvas");
let parent_width = document.getElementById("parent_container").clientWidth;
let parent_height = document.getElementById("parent_container").clientHeight;

// to set the canvas equal to the window size
setInterval(() => {
  parent_width = document.getElementById("parent_container").clientWidth;
  parent_height = document.getElementById("parent_container").clientHeight;
  canvas.width = parent_width;
  canvas.height = parent_height;
}, 10);
canvas.width = parent_width;
canvas.height = parent_height;
// console.log(document.getElementById("parent_container").clientHeight);

// we create a super object inside our canvas
var ctx = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined
};

let maxRadius = 10;
let minRadius = 2;

function Circle(x, y, radius, fullorhalf, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fullorhalf = fullorhalf;
  this.dx = dx;
  this.dy = dy;
  // if we want to specificy the colors we want
  this.colors = ["white", "darkgoldenrod", "darkred"];
  this.colorsRandomPick = this.colors[Math.floor(Math.random() * 3)];
  // this will make sure our circles have different colors
  this.rndmR = Math.floor(Math.random() * 255);
  this.rndmG = Math.floor(Math.random() * 255);
  this.rndmB = Math.floor(Math.random() * 255);
}

Circle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * this.fullorhalf, true);
  ctx.strokeStyle = `rgb(${this.rndmR}, ${this.rndmG}, ${this.rndmB})`;
  // change this if we want different colors
  // ctx.fillStyle = `rgb(${this.rndmR}, ${this.rndmG}, ${this.rndmB})`;
  ctx.fillStyle = this.colorsRandomPick;
  ctx.fill();
  ctx.closePath();
};

Circle.prototype.update = function() {
  this.x += this.dx;
  // this.y += this.dy;
  if (this.x + this.radius > parent_width || this.x - this.radius < 0) {
    this.dx = -this.dx;
    // console.log("bounce left or right");
  }
  if (this.y + this.radius > parent_height || this.y - this.radius < 0) {
    this.dy = -this.dy;
    // console.log("bounce up or down");
  }

  // interactivity
  // everything within 20 pixels of mouse grows
  if (
    mouse.x - this.x < 20 &&
    mouse.x - this.x > -20 &&
    mouse.y - this.y < 20 &&
    mouse.y - this.y > -20
  ) {
    // make sure the radius stays below 30
    if (this.radius < maxRadius) {
      this.radius += 0.5;
    }
  } else if (this.radius > minRadius) {
    this.radius -= 0.5;
  }

  this.draw();
};

Circle.prototype.randomizeCircle = function() {
  this.radius = Math.floor(Math.random() * 10);
  this.x = Math.floor(Math.random() * (parent_width - 50)) + this.radius;
  this.y = Math.floor(Math.random() * (parent_height - 50)) + this.radius;
  this.dx = (Math.random() - 0.5) * 0.5;
  this.dy = (Math.random() - 0.5) * 0.5;
  // makes it spawn on random position on each refresh
  // we use dx as a standard for x velocity
  // make it travel at random velocity on each refresh
  // so that it will travel back forward left our right
  // math random - 0.5 gives us equal chance on + or -
};

let circleStorage = [];

for (let i = 0; i < 400; i++) {
  var circle = new Circle(0, 0, 0, 2, 0, 0);
  circle.randomizeCircle();
  circleStorage.push(circle);
}

//-------- function to animata -------//

function animate() {
  requestAnimationFrame(animate);
  // clear the canvas other wise you will draw circels on top
  // of eachother
  ctx.clearRect(0, 0, parent_width, parent_height);
  circleStorage.forEach(el => {
    el.update();
  });
  // plus and minus the radius so we take edges into account
}

animate();
