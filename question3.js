const n = 5;
for (let i = 1; i <= n; i++) {
  let str = "0".repeat(n - i);

  let str2 = "*".repeat(i * 2 - 1);

  console.log(str + str2 + str);
}
// console.log(level);
