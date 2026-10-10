<template>
  <article class="card product-card mb-4">
    <router-link :to="'/details/' + product.id" class="image-wrap">
      <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.name" class="card-img-top product-image">
      <span v-else class="image-placeholder">Image unavailable</span>
    </router-link>
    <div class="card-body">
      <h2 class="card-title h5">{{ product.name }}</h2>
      <div class="card-footer-row">
        <strong>${{ formatPrice(product.price) }}</strong>
        <router-link class="btn btn-outline-primary" :to="'/details/' + product.id">View details</router-link>
      </div>
    </div>
  </article>
</template>

<script>
import { formatPrice } from '../../utils/formatPrice'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true }
  },
  methods: {
    formatPrice
  }
}
</script>

<style scoped>
.product-card { height: calc(100% - 1.5rem); border: 1px solid var(--color-border); border-radius: .75rem; overflow: hidden; box-shadow: 0 5px 18px rgba(16, 54, 61, .06); text-align: left; }
.image-wrap { display: flex; align-items: center; justify-content: center; height: 220px; background: var(--color-surface); }
.product-image { width: 100%; height: 100%; object-fit: contain; padding: 1rem; }
.image-placeholder { color: var(--color-muted); }
.card-body { display: flex; flex-direction: column; justify-content: space-between; }
.card-title { min-height: 2.8rem; color: var(--color-heading); }
.card-footer-row { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }
.btn { white-space: nowrap; }
</style>
