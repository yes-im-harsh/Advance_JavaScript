//Functional programming Exercise.

const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
};
const userHistory = [];

function addToCart(user, item) {
  userHistory.push(
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases })
  ); // Noting every transaction, It will help to trace back in case of complain

  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function taxItem(user) {
  userHistory.push(
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases })
  );

  const { cart } = user;
  const taxRate = 1.4;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  userHistory.push(
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases })
  );

  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  userHistory.push(
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases })
  );

  return Object.assign({}, user, { cart: [] });
}

//To Refund

// function refundItem(user, item) {
//   const { purchases } = user;
//   const refundItem = purchases.splice(item);
//   return Object.assign({}, user, { purchases: refundItem });
// }

//Creating compose
const compose =
  (fn1, fn2) =>
  (...args) =>
    fn1(fn2(...args));
const purchaseItems = (...fns) => fns.reduce(compose);

purchaseItems(
  emptyCart,
  buyItem,
  taxItem,
  addToCart
)(user, { name: "laptop", price: 200 });

//To Refund
// refundItem(user, { name: "laptop", price: 200 });

console.log(userHistory);
