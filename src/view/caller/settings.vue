<template>
  <div id="caller_records">
    <div class="main_title">设置</div>      
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