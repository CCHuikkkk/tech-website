<template>
<div class="company-time-line">
    <div class="content">
        <h2>发展历程</h2>
    </div>
    <div class="timeline-container" v-if="timeline.length > 0">
        <div 
            v-for="item in timeline"
            :key="item.year"
            class="timeline-item"
            :class="{active:selectedYear.year === item.year}"
            @mouseenter="updateContent(item)"
            >{{item.year}}
        </div>
    </div>
    <div class="timeline-content-container">
        <div class="timeline-content-item">
            <img :src="selectedYear.image" alt="Year Image" />
            <p class="dec">{{ selectedYear.des }}</p>
        </div>
    </div>
</div>
</template>

<script>
import {ref} from 'vue'

export default {
    name: "CompanyTimeLine",

    props:{
        timeline:{
            type:Array,
            default: () => [],
            require:true
        }
    },

    setup(props){
        const selectedYear = ref(props.timeline.length ? props.timeline[0] : { year: '', des: '', image: '' });
        const updateContent = (year)=>{
            selectedYear.value = year
        };

        return {
            selectedYear,
            updateContent
        }
    },
  };
</script>

<style scoped>
.company-time-line {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px;
}
.content {
    padding: 20px;
}
.timeline-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 10px 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(23, 23, 23, 0.4);
}
.timeline-item{
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 10px;
}
.timeline-item:hover,
.timeline-item.active{
    background-color: #cc5f5f;
}

.timeline-content-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px 20px;
}
.timeline-content-item{
    display: flex;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
    width: 80%;
    height: 300px;
    overflow: hidden;
}
.timeline-content-item img{
    width: 60%;
    height: auto;
}
.timeline-content-item des{
    width: 60%;
}
</style>