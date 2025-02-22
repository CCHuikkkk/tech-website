<template>
  <img src="../assets/1.jpg" alt="关于我们" class="banner-image" />
    <div class="content">
      <h2>联系我们</h2>
      <p>这里是联系我们的页面。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
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