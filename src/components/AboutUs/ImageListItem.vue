<template>
    <div class="image-list-item" @mouseenter="showProgressBar" @mouseleave="hideProgressBar">
      <button class="list-button" :class="{ active: isActive }">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </button>
      <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageListItem',
    props: {
      item: Object,
      isActive: Boolean
    },
    data() {
      return {
        progressBarWidth: '0%'
      };
    },
    methods: {
      showProgressBar() {
        this.progressBarWidth = '100%';
        this.$emit('mouseenter');
      },
      hideProgressBar() {
        this.progressBarWidth = '0%';
      }
    }
  };
  </script>
  
  <style scoped>
  .image-list-item {
    position: relative;
    width: 100%;
  }
  .list-button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    text-align: left;
    transition: background-color 0.3s;
  }
  .list-button.active {
    background-color: #42b983;
    color: white;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
    color: #666;
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: #b94254;
    transition: width 0.5s ease;
  }
  </style>