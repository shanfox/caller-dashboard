<template>
<div id="secondary-sidebar">
  <dl>
    <dt>Call客</dt>
    <dd>
      <ul class="ul-children">
        <li :index="item.index" v-for="item in menu" :key="item.path" :class="{'active': item.active}" @click="goToPage(item.path)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </li>
      </ul>
    </dd>
  </dl>
  <!--
	<el-menu
      background-color="gray"
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
#secondary-sidebar {
  width:100px;

  .el-menu-item.is-active {
    color: #fff !important;
  }
  .el-menu-item.active {
    color: red !important;
  }
}
.ul-children {
  padding-top: 5px;
}
.ul-children li {
  margin-top: 5px;
  padding: 3px 5px;
  cursor: pointer;
}
.ul-children li.active {
  background: #0E8CFF;
  padding: 3px 5px;
  color: #fff;
}
.slide-children dl dt {
  widt: 100px;
  line-height: 56px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}

</style>