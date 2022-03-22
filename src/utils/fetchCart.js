export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined" ||
    localStorage.getItem("cartItems") !== []
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo;
};
