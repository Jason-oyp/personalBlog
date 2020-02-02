<template>
  <div id="app">
    <Header></Header>
    <PageTemplate>
      <template v-slot:left>
        <router-view></router-view>
      </template>
      <template v-slot:right>
        <HomeRight />
      </template>
    </PageTemplate>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import HomeRight from "./components/home/HomeRight"
  import PageTemplate from './components/PageTemplate'
  export default {
    components: {
      Header,
      Footer,
      HomeRight,
      PageTemplate
    }
  }
</script>

<style>

</style>
