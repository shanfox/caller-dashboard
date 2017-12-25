<template>
<div id="main-sidebar">
  <ul class="ul-side">
    <li :index="item.index" v-for="item in menu" :key="item.path" :class="{'active': item.active}" @click="goToPage(item.path)">
      <i :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </li>
  </ul>
  <!--
	<el-menu
    text-color="#fff">
    <el-menu-item :index="item.index" v-for="item in menu" :key="item.path" :class="{'active': item.active}" @click="goToPage(item.path)">
      <i :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </el-menu>
  -->
</div>
</template>
<script>
export default {
  props: ['menu'],
  methods: {
    goToPage: function(path) {
      if(path) {
        this.$router.push(path);
      }
    }
  }
}
</script>
<style lang="less">
#main-sidebar {
  width:76px;
  .el-menu-item.is-active {
    color: #fff !important;
  }
  .el-menu-item.active {
    color: red !important;
  }
  li{
    text-align: center;
    padding: 17px 0;
    border-bottom: 1px solid #0C7EE6;
    color: #fff;
    position: relative;
    cursor: pointer;
    &.active {
      background: #0A69BF;
        &:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid #fff;
        position: absolute;
        top: 33px;
        right: -1px;
      }
    }
    i {
      font-size: 24px;
      clear: both;
      display: block;
    }
  }
}
.ul-side {}

</style>