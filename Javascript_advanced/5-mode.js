function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main () {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let paragraph = document.createElement("p");
  paragraph.innerText = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  let spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  let darkButton = document.createElement("button");
  darkButton.innerText = "Dark mode";
  darkButton.onclick = darkMode;
  document.body.appendChild(darkButton);

  let screamButton = document.createElement("button");
  screamButton.innerText = "Scream mode";
  screamButton.onclick = screamMode;
  document.body.appendChild(screamButton);
}

main();