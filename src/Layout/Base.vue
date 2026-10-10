<template>
  <div>
    <nav class="navbar navbar-dark fixed-top shop-nav">
      <div class="container nav-content">
        <router-link class="navbar-brand" to="/">CS eCommerce</router-link>
        <div class="nav-actions">
          <span v-if="user.uid" class="shopper-name">{{ user.displayName }}</span>
          <router-link v-if="user.uid" class="nav-link" to="/cart">
            Cart <span class="badge badge-light">{{ cart.length }}</span>
          </router-link>
          <router-link v-else class="nav-link" to="/login">Demo sign-in</router-link>
        </div>
      </div>
    </nav>
    <main class="page-container">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Base',
  computed: {
    ...mapGetters('account', ['user']),
    ...mapGetters('product', ['cart'])
  }
}
</script>

<style scoped>
.shop-nav {
  background: #153b45;
  box-shadow: 0 2px 12px rgba(14, 44, 52, .18);
}
.nav-content, .nav-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand { font-weight: 700; letter-spacing: .02em; }
.nav-actions { gap: 1rem; }
.shopper-name { color: #d7e9ec; }
.nav-link { color: #fff; font-weight: 600; }
.nav-link:hover { color: #c4e5e6; }
.page-container { padding: 90px 0 40px; }
@media (max-width: 480px) {
  .shopper-name { display: none; }
  .navbar-brand { font-size: 1rem; }
  .nav-actions { gap: .25rem; }
  .page-container { padding-top: 78px; }
}
</style>
