<template>
  <div class="container cart-page">
    <h1>Your cart</h1>
    <p class="text-muted">Demo checkout only. No payment or order will be placed.</p>
    <div v-if="!cart.length" class="empty-cart">
      <p>Your cart is empty.</p>
      <router-link to="/" class="btn btn-primary">Browse products</router-link>
    </div>
    <template v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-image">
          <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.name">
          <span v-else>Image unavailable</span>
        </div>
        <div class="item-details">
          <h2 class="h5">{{ item.name }}</h2>
          <p class="text-muted">${{ formatPrice(item.price) }} × {{ item.quantity }}</p>
        </div>
        <div class="item-actions">
          <strong>${{ formatPrice(item.price * item.quantity) }}</strong>
          <button class="btn btn-link" type="button" :aria-label="'Remove ' + item.name" @click="removeCart(item.id)">Remove</button>
        </div>
      </div>
      <div class="cart-summary">
        <span>Total</span><strong>${{ formatPrice(cartTotal) }}</strong>
      </div>
      <button type="button" class="btn btn-primary checkout-button" :disabled="!cart.length" @click="checkout">Demo checkout</button>
    </template>
    <p v-if="checkoutMessage" class="checkout-message" role="status">{{ checkoutMessage }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { formatPrice } from '../../utils/formatPrice'

export default {
  name: 'Cart',
  data () {
    return { checkoutMessage: '' }
  },
  computed: {
    ...mapGetters('product', ['cart', 'cartTotal'])
  },
  methods: {
    ...mapActions('product', ['removeCart', 'clearCart']),
    formatPrice,
    checkout () {
      if (!this.cart.length) return
      this.clearCart()
      this.checkoutMessage = 'Demo checkout complete. No order was placed or payment taken.'
    }
  }
}
</script>

<style scoped>
.cart-page { max-width: 850px; padding-top: 1.5rem; text-align: left; }
.cart-page h1 { color: var(--color-heading); font-weight: 700; }
.empty-cart { margin-top: 2rem; padding: 3rem; text-align: center; background: var(--color-surface); border-radius: .75rem; }
.cart-item { display: flex; align-items: center; gap: 1.25rem; padding: 1rem 0; border-bottom: 1px solid var(--color-border); }
.cart-image { display: flex; align-items: center; justify-content: center; width: 90px; height: 90px; flex: none; background: var(--color-surface); border-radius: .5rem; color: var(--color-muted); font-size: .7rem; text-align: center; }
.cart-image img { width: 100%; height: 100%; object-fit: contain; }
.item-details { flex: 1; }
.item-details p { margin-bottom: 0; }
.item-actions { display: flex; flex-direction: column; align-items: flex-end; }
.item-actions .btn { padding-right: 0; }
.cart-summary { display: flex; justify-content: space-between; padding: 1.5rem 0; font-size: 1.25rem; }
.checkout-button { display: block; margin-left: auto; }
.checkout-message { margin-top: 1rem; padding: 1rem; background: #e6f5f2; border-radius: .5rem; }
.btn-primary { background: var(--color-accent); border-color: var(--color-accent); }
@media (max-width: 480px) { .cart-item { gap: .75rem; } .cart-image { width: 65px; height: 65px; } }
</style>
