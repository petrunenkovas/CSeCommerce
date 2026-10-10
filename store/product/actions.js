import axios from 'axios'
import { PRODUCTS_API_URL, CATALOG_PAGE_SIZE } from '../../src/config/demo'

function normalizeProduct (product) {
  return {
    id: product.id,
    name: product.title,
    content: product.description,
    price: product.price,
    imageUrl: product.thumbnail || (product.images && product.images[0]) || ''
  }
}

export async function getProducts ({ commit, state }) {
  commit('startProductsRequest')
  const requestId = state.productsRequestId
  try {
    const response = await axios.get(PRODUCTS_API_URL, { params: { limit: CATALOG_PAGE_SIZE } })
    if (state.productsRequestId === requestId) {
      commit('setProducts', response.data.products.map(normalizeProduct))
    }
  } catch (error) {
    if (state.productsRequestId === requestId) {
      commit('setProducts', [])
      commit('setProductsError', 'The catalog is unavailable right now. Please try again.')
    }
  } finally {
    if (state.productsRequestId === requestId) {
      commit('setProductsLoading', false)
    }
  }
}

export async function productDetails ({ commit, state }, id) {
  commit('startProductRequest')
  const requestId = state.productRequestId
  try {
    const response = await axios.get(`${PRODUCTS_API_URL}/${encodeURIComponent(id)}`)
    if (state.productRequestId === requestId) {
      commit('setProduct', normalizeProduct(response.data))
    }
  } catch (error) {
    if (state.productRequestId === requestId) {
      commit('setProductError', 'This product could not be loaded. Please try again.')
    }
  } finally {
    if (state.productRequestId === requestId) {
      commit('setProductLoading', false)
    }
  }
}

export function addCart ({ commit, getters }, { product, quantity }) {
  const amount = Number(quantity)
  if (!product || !product.id || !Number.isSafeInteger(amount) || amount < 1 || getters.cart.some(item => item.id === product.id)) {
    return
  }
  commit('addCartItem', { product, quantity: amount })
}

export function removeCart ({ commit }, id) {
  commit('removeCartItem', id)
}

export function clearCart ({ commit }) {
  commit('clearCart')
}
