const myNum = 5;

const multiply = (q) => {
  for (let i = 0; i <= q; i++) {
    console.log(`${i} x ${q} = ${i * q}`);
  }
};

const factorial = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
      console.log(1);
    } else {
      console.log(i * (i - 1));
    }
  }
};
multiply(myNum)
factorial(myNum);

