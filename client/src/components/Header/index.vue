<template>
  <header id="nav">
    <div class="container">
      <a class="blog-name" href="/">
        Jason个人博客 | 技术博客
      </a>
      <ul class="nav-list">
        <li>
          <router-link :to="{path: '/'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{path: '/about'}">关于</router-link>
        </li>
        <li>
          <router-link :to="{path: '/comments'}">留言</router-link>
        </li>
      </ul>
      <div class="search-bar">
        <input type="text" placeholder="请输入关键字查找" v-model="value" @keyup.enter="searchBtn(value)">
        <button @click="searchBtn(value)">搜索</button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
        lastValue:''
      }
    },
    methods: {
      searchBtn(value) {
        if(value.trim() === ""){
          return alert('请输入正确内容');
        }
        if(value === this.lastValue){
          return;
        }
        this.lastValue = value;
        location.href = `/s?page=1&pageSize=4&search=${value}`
      }
    }
  };
</script>

<style lang="scss">
  @import "../../assets/css/base.scss";

  .router-link-exact-active {
    background-color: #080808;
  }
</style>