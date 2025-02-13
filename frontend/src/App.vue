<template>
  <MainHeader v-if="!isBasicRoute" />
  <BasicHeader v-if="isBasicRoute" />
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
    isBasicRoute() {
      return this.$route.path === '/login' ||  this.$route.path === '/sign-up';
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
