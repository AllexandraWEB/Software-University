function solve() {
  const textAreaRef = document.getElementById("input");
  const resultRef = document.getElementById("output");

  const incomeText = textAreaRef.value.split(".").filter(e => e.length > 0);

  for(let i = 0; i < incomeText.length; i += 3) {
    let result = [];

    for(let x = 0; x < 3; x++) {
        if(!incomeText[i + x]) {
          break;
        }
      result.push(incomeText[i + x])
    }

    let buff = result.join(".") + "."
    resultRef.innerHTML += `<p>${buff.trim()}</p>`
  }
}