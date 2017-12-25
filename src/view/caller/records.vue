<template>
  <div id="caller_records">
    <div class="main_title">拨打记录</div>   
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
<style>

</style>