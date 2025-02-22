<template>
    <div class="team-profile">
        <div class="content">
          <h2>团队管理</h2>
        </div>
        <div class="manage-group">
          <div class="manage-item">
            <div class="content-left">
              <h2>科创团队</h2>
              <h3>荔枝集团致力于用声音将人们联系在一起</h3>
              <p>欢迎来到科创关于我们页面！这里是关于我们的详细介绍。</p>
            </div>
            <img src="@/assets/1.jpg" alt="团队大楼" height="300">
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamManger",
};
</script>

<style scoped>
.team-profile {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px;
}
.content {
    padding: 20px;
}
.content-left {
text-align: left; /* 设置文本左对齐 */
margin-left: 100px;
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
    width: 100%;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin:10px 10px;
}
</style>