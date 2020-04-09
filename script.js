let innerCircleRad, outerCircleRad, ww, wh;

window.addEventListener('resize', getElementSizes);
function getElementSizes() {
  let innerCircle = document.querySelector('.inner-circle');
  let outerCircle = document.querySelector('.outer-circle');

  innerCircleRad = innerCircle.clientHeight / 2;
  outerCircleRad = outerCircle.clientHeight / 2;
  ww = outerCircle.offsetLeft + outerCircleRad, // center of outer circle
  wh = outerCircle.offsetTop + outerCircleRad;
}
getElementSizes();

if (screen.width < 600) {

}

document.addEventListener('mousemove', handler);
function handler(e) {
  e = e || window.event;

  let mousex = e.pageX;
  let mousey = e.pageY;

  let distance = Math.hypot(mousex - ww, mousey - wh);

  let xoffset = mousex - ww;
  let yoffset = mousey - wh;

  if (distance > outerCircleRad - innerCircleRad) {
    let scaleDown = (outerCircleRad - innerCircleRad) / distance;
    xoffset *= scaleDown;
    yoffset *= scaleDown;
  }
  //document.querySelector('#inner-circle').style.transform = 'translate(' + (xoffset - innerCircleRad) + 'px, ' + (yoffset - innerCircleRad) + 'px)';
  gsap.to(".inner-circle", {duration: 0.25, x: (xoffset), y: (yoffset)});
}
