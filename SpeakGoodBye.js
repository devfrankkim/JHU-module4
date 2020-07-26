(function () {
  let goodbye_speaker = new Object();
  let word = "GOODBYE";

  goodbye_speaker.speak = function speak(name) {
    console.log(`${word} ${name}`);
  };
  window.goodbye_speaker = goodbye_speaker;
})(window);
