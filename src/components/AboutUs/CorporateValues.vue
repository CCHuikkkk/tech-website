<template>
    <div class="corporate-profile">
        <div class="content">
            <h2>企业价值观</h2>
        </div>
        <div class="image-container">
            <img :src="currentItem.image" alt="Corporate Value" />
        </div>
        <div class="button-list">
            <ImageListItem
                v-for="(item, index) in items"
                :key="item.id"
                :item="item"
                :isActive="activeIndex === index"
                @mouseenter="selectItem(index)"
            />
        </div>
    </div>
</template>

<script>
import ImageListItem from './ImageListItem.vue';

export default {
    name: "CorporateValues",
    components: { ImageListItem },
    data() {
    return {
      items: [
        { id: 1, title: '客户至上', image: '1.jpg', content: '客户至上内容' },
        { id: 2, title: '创新驱动', image: '3.jpg', content: '创新驱动内容' },
        { id: 3, title: '团队合作', image: '4.jpg', content: '团队合作内容' },
        { id: 4, title: '诚信经营', image: '5.jpg', content: '诚信经营内容' },
        { id: 5, title: '社会责任', image: '3.jpg', content: '社会责任内容' },
        { id: 6, title: '持续发展', image: '1.jpg', content: '持续发展内容' }
      ],
      activeIndex: 0
    };
  },
  
  computed: {
    currentItem() {
      return this.items[this.activeIndex];
    },
  },
  methods: {
    selectItem(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.corporate-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 60px;
}
.content {
    padding: 20px;
}
.image-container {
  width: 90%;
  height: 600px;
  overflow: hidden;
}
.image-container img {
  width: 100%;
  height: 100%;
  /* 图片全覆盖模式 */
  object-fit: cover;
}
.button-list {
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
}
</style>