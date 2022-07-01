Promise.resolve("asyncfail")
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((error) => {
    console.log(error);
  }); // **Always put the .catch(). while working with promises**
