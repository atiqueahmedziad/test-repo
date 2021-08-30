const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');

const add = (n1,n2) => n1+n2;
const minus = (n1,n2) => n1-n2;
const multiply = (n1,n2) => n1*n2;
const divide = (n1,n2) => n2==0 ? `Number 2 can't be 0` : n1/n2;

document.querySelector('#btn_plus').addEventListener('click', () => {
  const res = add(parseInt(num1.value), parseInt(num2.value));
  result.textContent = res;
});

document.querySelector('#btn_minus').addEventListener('click', () => {
  const res = minus(parseInt(num1.value), parseInt(num2.value));
  result.textContent = res;
});

document.querySelector('#btn_multiply').addEventListener('click', () => {
  const res = multiply(parseInt(num1.value), parseInt(num2.value));
  result.textContent = res;
});

document.querySelector('#btn_division').addEventListener('click', () => {
  const res = divide(parseInt(num1.value), parseInt(num2.value));
  result.textContent = res;
});
