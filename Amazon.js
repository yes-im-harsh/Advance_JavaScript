const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
};

const addToCart = (items, price) => {
  const newPrice = price + (price * 3) / 100;
  return user.cart.push({ items, newPrice });
};

const removeFromCart = (items) => {
  const newCart = user.cart.filter((item) => item.items !== items);
  user.cart = newCart;
  return user.cart;
};

// const itemInCart = user.cart.filter((item) => item.newPrice !== 0);

const purchaseFromCart = (items) => {
  console.log(user.cart.items);
  if (items === user.cart.items) {
    return user.purchases.push(items);
  } else {
    return console.log("Item not in cart, please add it to cart");
  }
};
