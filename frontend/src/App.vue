<template>
  <MainHeader v-if="!isLoginRoute" />
  <BasicHeader v-if="isLoginRoute" />
</template>

<script>
import BasicHeader from './components/BasicHeader.vue';
import MainHeader from './components/MainHeader.vue';
export default {
  name: 'App',
  components: {
    MainHeader,
    BasicHeader
  },
  computed: {
    isLoginRoute() {
      return this.$route.path === '/login';
    }
  }

}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
