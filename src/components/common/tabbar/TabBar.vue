<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabBar"
    }
</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #f4f4f4;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 2px rgba(100,100,100,0.3);
  }
</style>
