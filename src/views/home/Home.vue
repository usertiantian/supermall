<template>
    <div>首页</div>
</template>

<script>
export default {
    name: "Home"
}

new Promise((resolve, reject) => {
  // 第一次请求代码
  if(success){
    resolve(data)
  }
  if(fail){
    reject(error)
  }
}).then((data) => {
  // 第一次数据处理代码
  return new Promise((resolve, reject) => {
    // 第二次请求代码
    if(success){
      resolve()
    }
    if(fail){
      reject()
    }
  }).then(() => {
    // ...
  }).catch(() => {
    // ...
  })
}).catch((error) => {
  // 失败处理代码
})
</script>

<style scoped>
</style>
