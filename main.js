// ********************Task 1
const arr = [1, 5, 7, 9];
console.log(`Минимальное число в массиве ${Math.min(...arr)}`);
// ********************Task 2
function createCounter() {
  let count = 0;
  return {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    result: () => {
      return console.log(`Результат ${count}`);
    },
  };
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.result();
counter.decrement();
counter.result();
