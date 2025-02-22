<template>
    <div class="company-profile">
        <div class="content">
          <h2>公司简介</h2>
          <h3>荔枝集团致力于用声音将人们联系在一起</h3>
          <p>欢迎来到科创关于我们页面！这里是关于我们的详细介绍。</p>
        </div>
        <div class="intro-content-group">
          <div class="intro-content-item">
              <img src="@/assets/3.jpg" alt="企业愿景">
              <div class="text-overlay">
                  <h3 class="item-title">企业愿景:</h3>
                  <p class="item-title-p">创建全球最大声音平台，帮助人们用声音连接彼此，更紧密沟通，更快乐生活。</p>
              </div>
          </div>
          <div class="intro-content-item">
              <img src="@/assets/4.jpg" alt="企业口号">
              <div class="text-overlay">
                  <h3 class="item-title">企业口号:</h3>
                  <p class="item-title-p">用声音，在一起</p>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
    export default {
    name: "CompanyProfile",
  };
</script>

<style scoped>
.company-profile {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px;
}
.content {
    padding: 20px;
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
</style>