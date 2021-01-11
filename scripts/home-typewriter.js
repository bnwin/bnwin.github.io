var app = document.getElementById('home-position');

var typewriter = new Typewriter(app, {
  loop: true,
  deleteSpeed: 5,
});

typewriter
  .pauseFor(1000)
  .typeString('NYU 22 // UX designer')
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
  .typeString('Twitch.tv geek')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(500)
  .typeString('Connect 4 enthusiast')
  .pauseFor(1000)
  .deleteChars(20)
  .pauseFor(500)
  .typeString('word search nut')
  .pauseFor(1000)
  .deleteChars(15)
  .pauseFor(500)
  .start();
