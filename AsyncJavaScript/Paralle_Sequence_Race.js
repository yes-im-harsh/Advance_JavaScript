const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, delay)
  );

const a = () => promisify("a", 100);
const b = () => promisify("b", 500);
const c = () => promisify("c", 1000);

async function parallel() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.all(promises);
  return `parallel is done: ${output1}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `race is done: ${output}`;
}

async function sequential() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequential is done: ${output1}, ${output2}, ${output3}`;
}

parallel().then((data) => console.log(data));
sequential().then((data) => console.log(data));
race().then((data) => console.log(data));
