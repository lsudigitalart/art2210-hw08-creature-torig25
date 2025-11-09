
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function mousePressed() {
}

function draw() {
  background(30);
  noStroke();
  
  let Head = random(["circle", "rectangle"]);
  let Head2 = random(["circle", "rectangle"]);

 
  //Heads
  fill(random(255), random(255), random(255));

  if (Head === "circle") {
    ellipse(300, 300, 220, 220);
  } else if (Head === "rectangle") {
    rect(200, 200, 200, 200);
  }

   fill(random(255), random(255), random(255));

  if (Head2 === "circle") {
    ellipse(300, 300, 240, 240);
  } else if (Head2 === "rectangle") {
    rect(190, 190, 220, 220);
  } 


  //Left Eye
   let numEllipses = int(random(1, 4));

    for (let i = 0; i < numEllipses; i++) {
    let w = random(10, 60);
    let h = random(10, 60);

    ellipse(250, 250, w, h);
    fill(random(255), random(255), random(255));
  }

  //Right Eye
   let numEllipses2 = int(random(1, 4));

    for (let i = 0; i < numEllipses2; i++) {
    let w = random(10, 60);
    let h = random(10, 60);

    ellipse(350, 250, w, h);
    fill(random(255), random(255), random(255));
  }

  // Mouth
    fill(0);
    ellipse(300, 330, 60, 30);



}