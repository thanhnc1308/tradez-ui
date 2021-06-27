<template>
  <div id="app">
    <vue-element-loading :active="$store.state.app.loading" :is-full-screen="true"/>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
