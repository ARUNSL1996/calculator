let display = document.getElementById("current");

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);

  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    let answer = eval(display.innerText);
    display.innerText = answer;
  } catch {
    display.innerText = "Error";
  }
}
