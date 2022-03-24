import {
  fetchCart,
  fetchTotal,
  fetchUser,
} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const total = fetchTotal();

export const initialState = {
  user: userInfo,
  cartItems: cartInfo,
  total: [],
  foodItems: null,
};
