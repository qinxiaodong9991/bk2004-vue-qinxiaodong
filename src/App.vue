<template>
  <div id="app">
    <!-- 测试 vant组件的 -->
    <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" /> -->
    <Footer />
    <router-view />
  </div>
</template>

<script>
//导入底部导航的组件

import Footer from "./components/Navigation/Footer.vue";

//导入uri地址模块
//测试
// import uri from "@/config/uri";

//导入vant组件
// import Vue from "vue";
// import { Calendar, cell } from "vant";

// Vue.use(Calendar);
// Vue.use(cell);

export default {
  components: { Footer },
  component: {
    Footer,
  },
  //测试网络请求是否可用
  created() {
    // this.$http.get(uri.getCities).then((ret) => console.log(ret));
  },
  //测试vant组件
  data() {
    return {
      date: "",
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style lang="scss">
</style>
