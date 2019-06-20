<template>
  <div class="page">
    <h1>
      58Coin数据监控系统
      <span :key="i" ref="dotList" v-for="i in 100"></span>
    </h1>
    <div class="server-page">
      <ServerList :server-data="ServerData.server1"></ServerList>
    </div>
  </div>
</template>

<script>
import ServerList from '@/pages/server-list'
import ServerData from '@/server-ws'
import { setInterval } from 'timers'
export default {
  name: 'app',
  components: {
    ServerList
  },
  data() {
    return {
      ServerData
    }
  },
  methods: {
    //随机三列点的位置
    rondomDotPos() {
      this.$refs.dotList.forEach(dot => {
        dot.style.left = Math.random() * 100 + '%'
        dot.style.top = Math.random() * 100 + '%'
        dot.style.opacity = Math.random()
        // dot.style.filter = `blur(${Math.random() * 10}px)`
      })
    }
  },
  mounted() {
    this.rondomDotPos()
    this.timer = setInterval(this.rondomDotPos, 3000)
  }
}
</script>

<style>
body {
  background: #11112b url('./assets/bg1.png') no-repeat center bottom;
  background-attachment: fixed;
  background-size: 50%;
  padding-bottom: 20px;
}
h1 {
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #113252;
  font-size: 28px;
  padding: 10px;
  position: relative;
}
h1 span {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-top: -5px;
  left: 50%;
  top: 100%;
  opacity: 0;
  background-color: #fff;
  box-shadow: #fff 0 0 4px;
  transition: all 3s ease-in;
  filter: blur(1px);
  /* filter: opacity(50%);
  filter: drop-shadow(16px 16px 20px yellow); */
}
.server-page {
  display: flex;
  justify-content: space-around;
}
.server-rec {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.server-rec-inner {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.server-rec-inner:first-child {
  margin-left: 0;
}
.server-rec-inner:last-child {
  margin-right: 0;
}
</style>
