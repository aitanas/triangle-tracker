function hideResults() {
  
}
function getLength(e) {
  e.preventDefault();
  const side1 = parseFloat(document.getElementById("side1").value);
  const side2 = parseFloat(document.getElementById("side2").value);
  const side3 = parseFloat(document.getElementById("side3").value);

  let result;
  if (side1 && side2 && side3) {
    if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
      result = "Not a triangle";
    } else if (side1 === side2 && side1 === side3 && side2 === side3) {
      result = "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      result = "Isoceles triangle";
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      result = "Scalene triangle";
    }
  } else {
    result = "Dude, put some numbers ...";
  }

  document.getElementById("result").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", getLength);
});