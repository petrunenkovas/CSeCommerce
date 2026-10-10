export function setProducts (state, products) {
  state.products = products
}

export function startProductsRequest (state) {
  state.productsRequestId += 1
  state.productsLoading = true
  state.productsError = ''
}

export function setProduct (state, product) {
  state.product = product
}

export function startProductRequest (state) {
  state.productRequestId += 1
  state.product = null
  state.productLoading = true
  state.productError = ''
}

export function setProductsLoading (state, loading) {
  state.productsLoading = loading
}

export function setProductsError (state, error) {
  state.productsError = error
}

export function setProductLoading (state, loading) {
  state.productLoading = loading
}

export function setProductError (state, error) {
  state.productError = error
}

export function addCartItem (state, { product, quantity }) {
  state.cart.push(Object.assign({}, product, { quantity }))
}

export function removeCartItem (state, id) {
  state.cart = state.cart.filter(item => item.id !== id)
}

export function clearCart (state) {
  state.cart = []
}
