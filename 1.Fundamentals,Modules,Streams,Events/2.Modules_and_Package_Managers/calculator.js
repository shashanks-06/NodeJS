export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}

export function module(a, b) {
  return a % b;
}

export function factorial(a) {
  let f = 1;
  for (let i = 1; i <= a; i++) {
    f *= i;
  }
  return f;
}
