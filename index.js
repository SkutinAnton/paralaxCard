const image = document.querySelector('img');

const paralax = event => {
  const degStepX = image.width / 30;
  const degStepY = image.height / 30;

  let degY = event.offsetX / degStepX - 15;
  let degX = event.offsetY / degStepY - 15;

  image.style.transform = (`rotateX(${degX}deg) rotateY(${degY}deg)`);
  image.style.boxShadow = (`${degY}px ${degX}px 30px 0px #0000006b`);
}

const paralaxStop = () => {
  image.style.transform = ('rotateX(0deg) rotateY(0deg)');
  image.style.boxShadow = ('0px 0px 30px 0px #000000ab');
}

image.addEventListener('mousemove', paralax);
image.addEventListener('mouseleave', paralaxStop);
