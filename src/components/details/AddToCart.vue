<template>
  <div class="cart-actions">
    <template v-if="!inCart">
      <label for="product-quantity">Quantity</label>
      <div class="action-row">
        <input id="product-quantity" type="number" min="1" step="1" v-model.number="quantity" class="form-control quantity-input">
        <button type="button" class="btn btn-primary" :disabled="!validQuantity" @click="addCart({ product, quantity })">Add to cart</button>
      </div>
      <small v-if="!validQuantity" class="text-danger">Enter a whole number greater than zero.</small>
    </template>
    <button v-else type="button" class="btn btn-outline-secondary" @click="removeCart(product.id)">Remove from cart</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    product: { type: Object, required: true }
  },
  data () {
    return { quantity: 1 }
  },
  computed: {
    ...mapGetters('product', ['cart']),
    inCart () {
      return this.cart.some(item => item.id === this.product.id)
    },
    validQuantity () {
      return Number.isSafeInteger(Number(this.quantity)) && Number(this.quantity) > 0 && this.quantity !== ''
    }
  },
  methods: {
    ...mapActions('product', ['addCart', 'removeCart'])
  }
}
</script>

<style scoped>
.cart-actions { max-width: 380px; }
.action-row { display: flex; gap: .75rem; }
.quantity-input { width: 90px; }
.btn-primary { background: var(--color-accent); border-color: var(--color-accent); }
.btn-primary:hover { background: var(--color-accent-hover); border-color: var(--color-accent-hover); }
</style>
