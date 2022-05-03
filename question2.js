let n = 10;

var result = "";
for (var i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    result += "0";
  }
  for (let k = 0; k < i; k++) {
    result += "*";
  }

  console.log(result);

  result = "";
}
