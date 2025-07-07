function solve() {
  const textRef = document.getElementById("text").value;
  const namingConventionRef = document.getElementById("naming-convention").value;
  const resultRef = document.getElementById("result");

  let result;

  if (namingConventionRef === "Camel Case") {
    result = toCamelCase(textRef);
  } else if (namingConventionRef === "Pascal Case") {
    result = toPascalCase(textRef);
  } else {
    result = "Error!";
  }

  resultRef.textContent = result;

  function toCamelCase(textRef) {
    const words = textRef.toLowerCase().split(" ");
    return words
    .map((word, index) => {
      if (index === 0) return word;
      return capitalize(word);
    })
    .join("");
  }

  function toPascalCase(textRef) {
    const words = textRef.toLowerCase().split(" ");
    return words
    .map(word => capitalize(word))
    .join("");
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
