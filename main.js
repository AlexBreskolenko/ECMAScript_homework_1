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

// ***************Task 3
function findElementByClass(rootElem, myClass) {
  if (rootElem.classList && rootElem.classList.contains(myClass)) {
    return rootElem;
  }
  for (let i = 0; i < rootElem.children.length; i++) {
    const childElem = rootElem.children[i];
    const foudnElem = findElementByClass(childElem, myClass);

    if (foudnElem) {
      return foudnElem;
    }
  }
  return console.log(`Элемент не найден. `);
}
