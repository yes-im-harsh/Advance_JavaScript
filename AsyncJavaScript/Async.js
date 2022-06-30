const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
  (array) => {
    console.log("users", array[0]);
    console.log("posts", array[0]);
    console.log("albums", array[0]);
  }
);

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url)).then((resp) => resp.json())
//   );
//   console.log("users", users);
//   console.log("users", posts);
//   console.log("users", albums);
// };

const getData = async function () {
  const [users, posts, albums] = Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      const data = await response.json();
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData();
