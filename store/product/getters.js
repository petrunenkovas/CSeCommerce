export function products (state) {
  return state.products
}

export function product (state) {
  return state.product
}

export function cart (state) {
  return state.cart
}

export function cartTotal (state) {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
}
