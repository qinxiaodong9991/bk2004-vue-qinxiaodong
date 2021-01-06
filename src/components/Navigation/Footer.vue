<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="changeItem"
    >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-dianying"
          slot="icon"
          size="1.5rem"
        />
        <span>电影</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-yingyuan"
          slot="icon"
          size="1.5rem"
        />
        <span>影院</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-wode"
          slot="icon"
          size="1.5rem"
        />
        <span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
//导入需要使用的字体样式文件阿里图标css导入不加from，导入组件要加form
import "@/assets/font/iconfont.css";
//导入vant组件
import Vue from "vue";

import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
  data() {
    return {
      //底部导航的默认索引，默认为第一个
      active: 0,
      //定义底部导航需要的三个地址(按顺序)
      urls: ["/films/nowPlaying", "/cinemas", "/center"],
    };
  },
  created() {
    //九城刷新之后索引归零的情况
    //获取路由信息： this.$route
    this.active =
      this.urls.indexOf(this.$route.path) > -1
        ? this.urls.indexOf(this.$route.path)
        : 0;
  },
  methods: {
    //点击菜单的页面处理程序
    changeItem(index) {
      //index为菜单的索引

      this.$router.push(this.urls[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
