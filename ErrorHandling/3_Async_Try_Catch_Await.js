(async function () {
  try {
    await Promise.resolve("opps! #1");
    await Promise.reject("opps! #2");
  } catch (err) {
    console.log(err);
  }
  console.log("Is this still good");
})();

//Output:
// opps! #2
// VM1680:8 Is this still good
// Promise {<fulfilled>: undefined}
