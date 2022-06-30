const urls = [
  "https://jsonplaceholde.typicode.com/users" /*done typo here*/,
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        const data = await response.json();
      })
    );
  } catch (err) {
    console.log("OOPs", err); // To use this, Try removing a word from a url/ do some typo error in the above url
  }
};

getData(); // Will return "OOPs TypeError:"
