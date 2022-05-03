let n = 10;

var result = "";
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    result += "*" + "  ";
  }

  console.log(result);

  result = "";
}
