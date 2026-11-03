// During the first exercise, test with alert("Hello, world!").
// The finished version changes the text instead of showing test alerts.
function makeBigger() {
  // To repeat the button alert test, uncomment the next line:
  // alert("Hello, world!");
  document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
  // To test the radio event, temporarily add alert("Style changed!"); here.
  const text = document.getElementById("textInput");

  if (document.getElementById("fancy").checked) {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  } else {
    text.style.fontWeight = "normal";
    text.style.color = "";
    text.style.textDecoration = "none";
  }
}

function moo() {
  const text = document.getElementById("textInput");
  const sentences = text.value.toUpperCase().split(".");

  // Each part except the last one was followed by a period.
  for (let i = 0; i < sentences.length - 1; i++) {
    // Find the final word, keeping any spaces or line breaks after it.
    sentences[i] = sentences[i].replace(/(\S+)(\s*)$/, "$1-Moo$2");
  }

  text.value = sentences.join(".");
}
