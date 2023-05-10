let objVerify = {
    "(": { order: true, count: 0 },
    "{": { order: true, count: 0 },
    "[": { order: true, count: 0 },
};
let arrayExp = [];
let results = [];

let n = prompt("Digite o número de expressões que você irá testar!");
let count = 0;
while (count < n) {
  let value = prompt("Agora digite a expressão " + (count + 1));
  arrayExp.push(value);
  results.push("No");

  count++;
}

console.log(arrayExp);

arrayExp.forEach((string, index) => {
  if (string != "") {
    objVerify["("].count = 0;
    objVerify["["].count = 0;
    objVerify["{"].count = 0;

    for (var i = 0; i < string.length; i++) {
      if (string[i] != "" || string[i] != " ") {
        if (string[i] == "(") {
          objVerify["("].order = false;
          objVerify["("].count++;
        } else if (string[i] == ")") {
          objVerify["("].order = true;
          objVerify["("].count++;
        } else if (string[i] == "[") {
          objVerify["["].order = false;
          objVerify["["].count++;
        } else if (string[i] == "]") {
          objVerify["["].order = true;
          objVerify["["].count++;
        } else if (string[i] == "{") {
          objVerify["{"].order = false;
          objVerify["{"].count++;
        } else if (string[i] == "}") {
          objVerify["{"].order = true;
          objVerify["{"].count++;
        }
      }
    }
    if (objVerify["("].order && objVerify["{"].order && objVerify["["].order) {
      if (
        objVerify["("].count % 2 == 0 &&
        objVerify["["].count % 2 == 0 &&
        objVerify["{"].count % 2 == 0
      ) {
        results[index] = "Yes";
      } else {
        results[index] = "No";
      }
    } else {
      results[index] = "No";
    }
  }
});

console.log(results);
