<template>
  <div class="container catalog">
    <header class="catalog-header">
      <p class="eyebrow">Storefront demo</p>
      <h1>Explore the collection</h1>
      <p class="text-muted">Sample products provided by DummyJSON.</p>
    </header>
    <div v-if="productsLoading" class="status" role="status">Loading products...</div>
    <div v-else-if="productsError" class="status" role="alert">
      <p>{{ productsError }}</p>
      <button class="btn btn-primary" @click="getProducts">Try again</button>
    </div>
    <div v-else-if="!products.length" class="status">No products are available.</div>
    <div v-else class="row">
      <div class="col-sm-6 col-lg-4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ProductCard from '../../components/product/ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters('product', ['products']),
    ...mapState('product', ['productsLoading', 'productsError'])
  },
  methods: {
    ...mapActions('product', ['getProducts'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.catalog { padding-top: 1.5rem; }
.catalog-header { margin-bottom: 2rem; text-align: left; }
.catalog-header h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; color: var(--color-heading); }
.eyebrow { color: var(--color-accent); text-transform: uppercase; letter-spacing: .12em; font-size: .8rem; font-weight: 700; }
.status { padding: 3rem 1rem; background: var(--color-surface); border-radius: .75rem; }
</style>
