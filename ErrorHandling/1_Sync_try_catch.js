//We can do error handling by using try{} catch{} block, or by .catch() in javaScript.

//Sync Try Catch

//we can throw error using "throw new error()".

function fail() {
  try {
    console.log("This works");
    throw new Error("oops !");
  } catch (error) {
    console.log("We have made an oops!", error);
  } finally {
    console.log("still works");
  }
}

// Finally keyword, as the name suggests it will run in the end and log the data,
//when try and catch is done.

fail();

//Output:
//this works
//we have made an oops! Error: oops at fail
//still good

// It will first enter the try block and print the log, then it sees trow new Error(),
// Then it will come out of try block and start searching for the catch block, after that it will,
// log it. Then in the end finally will be executed
