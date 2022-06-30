//New Es9 feature
//for await of
// Used for arrays of promises

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));

  //Here it is
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

// In ES9
// Also we have .finally() to run in the end.
