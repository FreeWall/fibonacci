export const fibonacciIndexLimit = 99999;

export function getFibonacciNumberAt(index: number) {
  if (index > fibonacciIndexLimit) {
    throw new Error(`Max index allowed is ${fibonacciIndexLimit}`);
  }

  let number1 = 0n;
  let number2 = 1n;
  let sum = 0n;

  for (let i = 1; i <= index; i++) {
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
  }

  return number1;
}
