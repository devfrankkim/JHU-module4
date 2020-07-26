(function () {
  let hello_speaker = new Object();
  let word = "HELLO";

  hello_speaker.speak = function (name) {
    console.log(`${word} ${name}`);
  };

  window.hello_speaker = hello_speaker;
})(window);
