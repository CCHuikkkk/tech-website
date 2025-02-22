<template>
    <div class="about-us">
      <img src="../assets/about-us-banner.jpg" alt="关于我们" class="banner-image" />
      <CompanyProfile />
      <TeamManger />
      <CorporateValues />
      <CompanyTimeLine 
        :timeline="companyTimeline"
      />
  </div>
  </template>
  
  <script>
  import TeamManger from '@/components/AboutUs/TeamManger.vue';
  import CompanyProfile from '@/components/AboutUs/CompanyProfile.vue';
  import CorporateValues from '@/components/AboutUs/CorporateValues.vue';
  import CompanyTimeLine from '@/components/AboutUs/CompanyTimeLine.vue';

  export default {
    name: "AboutUs",
    components: {
      TeamManger,
      CompanyProfile,
      CorporateValues,
      CompanyTimeLine,
    },
    data(){
      return {
        companyTimeline:[
          {year:'2018', des:"公司成立初始时期", image:"1.jpg?text=2018"},
          {year:'2019', des:"公司成立初始时期推出首款产品", image:"5.jpg?text=2019"},
          {year:'2020', des:"公司成立初始时期获得A轮融资", image:"3.jpg?text=2020"},
          {year:'2021', des:"公司成立初始时期拓展国际市场", image:"4.jpg?text=2021"},
          {year:'2022', des:"公司成立初始时期推出新产品线", image:"5.jpg?text=2022"},
          {year:'2023', des:"公司成立初始时期获得B轮融资", image:"4.jpg?text=2023"},
          {year:'2024', des:"公司成立初始时期建立研发中心", image:"3.jpg?text=2024"},
        ]
      }
    }
  };
  </script>
  
<style scoped>
    .about-us {
    text-align: center;
    padding: 20px;
  }
  .banner-image {
    width: 100%; /* 图片宽度跟随设备宽度 */
    height: auto; /* 保持图片比例 */
    display: block; /* 确保图片独占一行 */
  }
  .company-intro{
    margin: 20px 0;
  }
  .content {
    padding: 20px;
  }
  .content-left {
    text-align: left; /* 设置文本左对齐 */
    margin-left: 100px;
  }
  .intro-content-group{
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    justify-content:center; 
    gap: 40px;
    margin-bottom: 25px;
  }
  .intro-content-item{
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    /* 设置滑动效果 */
    transition: transform 0.3s ease;
    margin-bottom: 25px;
  }
  .intro-content-item img{
    width: 100%;
    height: 100%;
    /* 图片全覆盖模式 */
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .intro-content-item:hover img{
    transform: scale(1.2);
  }
  .text-overlay{
    position: absolute;
    /* 相对父节点居中展示 */
    top: 50%;
    left: 50%;
    /* 当文本内容发生改变时，修正其相对父节点居中位置展示 */
    transform: translate(-50%, -50%);
    /* 设置文本居中对齐 */
    text-align: center;
    color: #fff;
    font-size: 16px;
    /* 文本框绝对在最顶层 */
    z-index: 1;
  }
  .text-overlay-left{
    position: absolute;
    top: 50%; /* 垂直居中 */
    left: 0; /* 从左侧开始 */
    width: 100%; /* 宽度占满父容器 */
    text-align: left; /* 文本左对齐 */
    color: #fff;
    font-size: 16px;
    z-index: 1; /* 确保文本在最顶层 */
  }
  .text-overlay item-title{
    margin: 0 0 10px;
    font-size: 20px;
  }
  .text-overlay item-subtitle{
    margin: 0 0 10px;
    font-size: 18px;
  }
  .text-overlay item-title-p{
    margin: 0 0 10px;
    font-size: 14px;
  }
  .manage-group{
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    justify-content:center; 
    gap: 40px;
    margin-bottom: 25px;
  }
  .manage-item{
    display: flex;
    position: relative;
    align-items: center; /* 垂直居中对齐 */
    justify-content:space-between; 
    width: 80%;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin:10px 10px;
  }
  .enterprise-container{
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    justify-content:center; 
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .enterprise-item{
    display: flex;
    flex-direction: column;
    align-items: center; /* 垂直居中对齐 */
    justify-content:center; 
    position: relative;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .enterprise-list-item{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .list-button {
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
  .list-button.active {
    background-color: #42b983;
    color: white;
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: #42b983;
    transition: width 0.5s ease;
  }
  .image-container{
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
</style>