var app = document.getElementById('home-position');

var typewriter = new Typewriter(app, {
  loop: true,
  deleteSpeed: 5,
});

typewriter
  .pauseFor(1000)
  .typeString('nyu 22 // UX designer')
  .pauseFor(1000)
  .deleteChars(11)
  .pauseFor(500)
  .typeString('photographer')
  .pauseFor(1000)
  .deleteChars(12)
  .pauseFor(500)
  .typeString('game designer')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('soundtrack lover')
  .pauseFor(1000)
  .deleteChars(21)
  .pauseFor(500)
  .typeString('diehard Connect Four player')
  .pauseFor(1000)
  .deleteChars(27)
  .pauseFor(500)
  .typeString('copywriter')
  .pauseFor(1000)
  .deleteChars(10)
  .pauseFor(500)
  .start();
