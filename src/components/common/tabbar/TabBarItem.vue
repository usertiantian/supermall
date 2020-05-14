<template>
  <div class="tabbar-item" @click="btnClick">
    <div v-if="isActive">
      <slot name="tabbar-item-img-active"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props: {
    path: String,
    fontColor: {
      default: 'deepPink'
    }
  },
  data(){
    return {

    }
  },
  methods: {
    btnClick(){
      if(!this.isActive){
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.fontColor } : {}
    }
  }
}

</script>

<style scoped>
  .tabbar-item {
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 13px;
  }

  .tabbar-item img {
    margin-top: 3px;
    height: 18px;
    width: 18px;
    vertical-align: middle;
  }
</style>
