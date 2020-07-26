(function () {
  let name = [
    "Jason",
    "Polley",
    "Paul",
    "Elizabeth",
    "Jones",
    "Alice",
    "Jerry",
    "Jimmy",
    "Chuck",
    "Josie",
  ].sort();

  for (let i = 0; i < name.length; i++) {
    let firstletter = name[i].charAt(0).toLowerCase();

    if (firstletter === "j") {
      goodbye_speaker.speak(name[i]);
    } else {
      hello_speaker.speak(name[i]);
    }
  }
})();
