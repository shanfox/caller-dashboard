<template>
  <div id="app" :class="currentPageClass">
    <div class="header">
      <div class="logo">客户管理系统</div>
    </div>
    <router-view v-if="readyRender"></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      readyRender: false
    };
  },
  computed: {
    ...mapGetters(["currentPageClass"])
  },
  mounted() {
    var self = this;
    var loadingInstance = self.$loading();
    // todo 用户验证
    window.setTimeout(function() {
      loadingInstance.close();
      self.readyRender = true;
    }, 500);
  },
  methods: {
    ...mapActions(["setCurrentUser"])
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  min-height: 100%;
  position: relative;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

input,
textarea,
button {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.el-breadcrumb__item__inner:hover {
  color: rgb(72, 106, 98);
  cursor: text;
}

.header { 
  width: 100%; 
  height:48px;
  background:#2C2C2C;

  .logo {
    float: left;
    padding-left: 93px;
    font-size: 16px;
    /*background:url('http://ui.wangxiaobao.com/card/img/logo.png') 17px center no-repeat;*/
    color: #fff;
    line-height: 48px;
  }
}



@import "assets/less/common";
</style>
