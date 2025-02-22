<template>
    <div class="content">
      <h2>媒体动态</h2>
      <p>这里是媒体动态的页面。</p>
    </div>
    <img src="../assets/4.jpg" alt="关于我们" class="banner-image" />
  </template>
  
  <script>
  export default {
    name: "MediaPage",
  };
  </script>
  
  <style scoped>
    .banner-image {
    width: 100%; /* 图片宽度跟随设备宽度 */
    height: auto; /* 保持图片比例 */
    display: block; /* 确保图片独占一行 */
  }
  .content {
    padding: 20px;
    text-align: center;
  }
  </style>