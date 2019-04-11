let i = 10;

while (i) {
  console.log(i);
  i--;
}

let x = 5;

do {
  console.log(x);
  x += 5;
} while (x < 20);

const age = [10, 16, 17, 19, 23, 25, 40, 60, 73];

for (let index = 0; index < age.length; index++) {
  const numbers = age[index];
  console.log(numbers);
}

for (let y = 50; y > 0; y -= 10) {
  console.log(y);
}
