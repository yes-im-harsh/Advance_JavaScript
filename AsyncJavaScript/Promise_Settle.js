const promise = new Promise((resolve, reject) => setTimeout(resolve, 600));

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 300));

Promise.all([promise, promise2])
  .then((data) => console.log(data))
  .catch((e) => console.log("Something Failed", e)); //It will throw an error because, Pone of the promise got rejected.

//New ES20 feature
Promise.allSettled([promise, promise2])
  .then((data) => console.log(data))
  .catch((e) => console.log("Something Failed", e)); //It will solve the above problem.
