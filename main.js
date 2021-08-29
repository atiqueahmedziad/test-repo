const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');

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

document.querySelector('#btn_divide').addEventListener('click', () => {
  const res = divide(parseInt(num1.value), parseInt(num2.value));
  result.textContent = res;
});
