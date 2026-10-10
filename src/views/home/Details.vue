<template>
  <div class="container details-page">
    <router-link to="/" class="back-link">← Back to products</router-link>
    <div v-if="productLoading" class="status" role="status">Loading product...</div>
    <div v-else-if="productError" class="status" role="alert">
      <p>{{ productError }}</p>
      <button class="btn btn-primary" @click="loadProduct">Try again</button>
    </div>
    <div v-else-if="product" class="row detail-content">
      <div class="col-md-6">
        <div class="detail-image">
          <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.name">
          <span v-else>Image unavailable</span>
        </div>
      </div>
      <div class="col-md-6 detail-copy">
        <h1>{{ product.name }}</h1>
        <p class="lead">{{ product.content }}</p>
        <p class="price">${{ formatPrice(product.price) }}</p>
        <AddToCart v-if="user.uid" :product="product" />
        <p v-else class="signin-note"><router-link to="/login">Enter demo mode</router-link> to use the cart.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import AddToCart from '../../components/details/AddToCart'
import { formatPrice } from '../../utils/formatPrice'

export default {
  components: { AddToCart },
  computed: {
    ...mapGetters('account', ['user']),
    ...mapGetters('product', ['product']),
    ...mapState('product', ['productLoading', 'productError'])
  },
  methods: {
    ...mapActions('product', ['productDetails']),
    formatPrice,
    loadProduct () {
      this.productDetails(this.$route.params.idProduct)
    }
  },
  watch: {
    '$route.params.idProduct' () {
      this.loadProduct()
    }
  },
  mounted () {
    this.loadProduct()
  }
}
</script>

<style scoped>
.details-page { padding-top: 1.5rem; text-align: left; }
.back-link { display: inline-block; margin-bottom: 1.5rem; color: var(--color-accent); }
.detail-image { display: flex; align-items: center; justify-content: center; min-height: 350px; background: var(--color-surface); border-radius: .75rem; color: var(--color-muted); }
.detail-image img { max-width: 100%; max-height: 400px; object-fit: contain; padding: 1.5rem; }
.detail-copy { padding: 1rem 2rem; }
.detail-copy h1 { color: var(--color-heading); font-size: clamp(2rem, 5vw, 3rem); }
.price { color: var(--color-accent); font-size: 2rem; font-weight: 700; }
.signin-note { margin-top: 1rem; }
.status { padding: 3rem 1rem; background: var(--color-surface); border-radius: .75rem; text-align: center; }
@media (max-width: 767px) { .detail-copy { padding: 1.5rem 0; } }
</style>
