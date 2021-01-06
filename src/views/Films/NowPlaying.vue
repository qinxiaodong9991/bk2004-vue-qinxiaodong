<template>
  <div>
    <!-- v-show控制组件是否显示 -->
    <div class="loading" v-show="isLoading">
      <van-loading size="24px" type="spinner" color="blue"
        >加载中...</van-loading
      >
    </div>
    <van-card v-for="item in list" :key="item.filmId">
      <!-- 封面图片 -->
      <template #thumb>
        <img :src="item.poster" width="66" />
      </template>
      <!-- 电影名称 -->
      <template #title>
        <div class="title">
          {{ item.name }}
          <span class="item">{{ item.filmType.name }}</span>
        </div>
      </template>
      <!-- 电影的介绍 -->
      <template #desc>
        <div>
          <div>观众评分{{ item.grade }}</div>
          <div>主演:{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
          <div class="nowPlayingFilm-buy">购票</div>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script>
//导入地址模块
import uri from "@/config/uri";
import Vue from "vue";
import { Loading, Toast, Card } from "vant";

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);

export default {
  created() {
    //遵循原则 ： 早获取，早显示
    this.$http.get(uri.getNowPlaying).then((ret) => {
      if (ret.status == 0) {
        //请求成功
        this.list = ret.data.films;
      } else {
        //请求失败
        Toast.fail("网络繁忙");
      }
      //数据加载完成，取出加载组件的显示
      this.isLoading = false;
    });
  },
  data() {
    return {
      //列表的数据源
      list: [],
      //控制加载组件是否显示
      isLoading: true,
    };
  },
  mounted() {},
  filters: {
    //处理演员的信息
    parseActors(actors) {
      //由于卖座网的数据可能存在部分电影没有主演(没有actors属性)
      if (actors) {
        //有主演
        var str = "";
        actors.forEach((el) => {
          str += el.name + " ";
        });
        return str.substr(0, 15) + "...";
      } else {
        //没有主演
        return "暂无主演";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// scoped表示样式只在当前组件内生效，不影响子组件
.loading {
  text-align: center;
  padding-top: 5px;
}
img {
  border-radius: 0;
}
// 样式设置
.title {
  font-size: 16px;
  color: black;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.grade {
  color: #ffb232;
  font-size: 14px;
}
.desc {
  font-size: 13px;
}
.nowPlayingFilm-buy {
  float: right;
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
  border: 1px solid #ff5f16;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
}
</style>

