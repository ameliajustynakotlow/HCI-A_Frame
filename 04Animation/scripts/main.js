// changing individual properties with code and using setInterval
var rotationSpeed = 0.005;
var speedMultiplier = 0;
var height = 0.5;
var speedUp = true;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
  if (speedMultiplier > 15 && speedUp == true) {
    speedUp = false;
  }
  if (speedMultiplier <= 0 && speedUp == false) {
    speedUp = true;
    speedMultiplier = 0;
    height = 0.5;
  }

  if (speedMultiplier >= 0 && speedUp == true) {
    speedMultiplier = speedMultiplier + 0.1;
    height = height + 0.05;
  } else {
    speedMultiplier = speedMultiplier - 0.1;
    height = height - 0.05;
  }

	myOtherBox.object3D.rotation.x -= rotationSpeed * speedMultiplier;
	myOtherBox.object3D.rotation.y -= rotationSpeed * speedMultiplier;
	myOtherBox.object3D.rotation.z -= rotationSpeed * speedMultiplier;

  myOtherBox.object3D.position.y = height;
}

setInterval(spin, 16, speedMultiplier, speedUp); //equivalent to 60 fps
