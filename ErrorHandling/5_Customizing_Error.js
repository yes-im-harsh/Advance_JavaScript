/* Because Error is a constructor function, we can use that to extend it and add to it. You 
don't want to reveal parts of your program by allowing an error to give the stack trace 
and other information to possible bad actors. So, you can customize what you want your 
errors to reveal. */

class AuthenticationError extends Error {
  constructor(message) {
    super(message);

    this.name = "AuthenticationError";
    this.message = "authentication problem";
    this.fix = "please log in";
  }
}

const err = new AuthenticationError("oppise !");

console.log(err); //authenticationError: "authentication problem" stack trace
console.log(err.fix); //please log in
