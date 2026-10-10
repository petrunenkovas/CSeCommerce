<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --color-heading: #173c45;
  --color-accent: #087f83;
  --color-accent-hover: #07676a;
  --color-surface: #f4f8f8;
  --color-border: #e2ebeb;
  --color-muted: #60757b;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
