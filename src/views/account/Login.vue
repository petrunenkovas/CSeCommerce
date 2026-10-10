<template>
  <div class="login-page">
    <div class="login-card">
      <router-link to="/" class="back-link">← Back to products</router-link>
      <p class="eyebrow">Portfolio demo</p>
      <h1>Explore as a demo shopper</h1>
      <p>Enter demo mode to add products to the cart and try the simulated checkout. No account, payment, or real order is created.</p>
      <button type="button" class="btn btn-primary btn-block" @click="login">Enter demo mode</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  methods: {
    ...mapActions('account', ['login'])
  }
}
</script>

<style scoped>
.login-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; background: var(--color-surface); }
.login-card { width: 100%; max-width: 440px; padding: 2.5rem; background: #fff; border-radius: .75rem; box-shadow: 0 12px 35px rgba(16, 54, 61, .1); text-align: left; }
.back-link { display: inline-block; margin-bottom: 2rem; color: var(--color-accent); }
.eyebrow { color: var(--color-accent); text-transform: uppercase; letter-spacing: .12em; font-size: .8rem; font-weight: 700; }
h1 { color: var(--color-heading); font-size: 2rem; }
.btn-primary { margin-top: 2rem; padding: .75rem; background: var(--color-accent); border-color: var(--color-accent); }
.btn-primary:hover { background: var(--color-accent-hover); border-color: var(--color-accent-hover); }
</style>
