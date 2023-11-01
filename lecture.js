for (let num = 1; num <= 10; num++) {
  if (num >= 6) {
    break;
  }
  console.log(num);
}
let a = 1;
while (a <= 10) {
  if (a >= 6) {
    break;
  }
  console.log(a);
  a++;
}

for (let num = 1; num <= 10; num++) {
  if (num == 6) {
    continue;
  }
  console.log(num);
}
