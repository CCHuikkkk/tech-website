<template>
    <div class="header">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <h1 class="title">科创</h1>
      </div>
      <nav class="nav-bar">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/about-us" class="nav-item">关于我们</router-link>
        <router-link to="/contact" class="nav-item">联系我们</router-link>
        <router-link to="/products" class="nav-item">产品服务</router-link>
        <router-link to="/media" class="nav-item">媒体动态</router-link>
        <router-link to="/talent" class="nav-item">人才发展</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };

  </script>