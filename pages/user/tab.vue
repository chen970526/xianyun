<template>
  <div>
    <div>
      <span
        v-for="(item,index) in news"
        :key="index"
        @click="handleClick(index)"
        :class="{red: current===index}"
      >{{item}}</span>
    </div>
    <div v-if="current===0">
      <ul>
        <li>普通新闻1</li>
        <li>普通新闻2</li>
        <li>普通新闻3</li>
      </ul>
    </div>
    <div v-if="current===1">
      <ul>
        <li>体育新闻1</li>
        <li>体育新闻2</li>
        <li>体育新闻3</li>
      </ul>
    </div>
    <div v-if="current===2">
      <ul>
        <li>头条新闻1</li>
        <li>头条新闻2</li>
        <li>头条新闻3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: ['新闻', '体育', '头条'],
      current: 0
    }
  },
  methods: {
    handleClick(index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang='less'>
.red {
  color: red;
}
</style>