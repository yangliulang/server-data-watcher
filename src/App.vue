<template>
  <div class="page">
    <div class="page-3d">
      <div class="page-title">
        <h1>58Coin服务器集群监控</h1>
        <span :key="i" ref="dotList" v-for="i in 50"></span>
      </div>
      <div class="server-page">
        <ServerList :server-data="ServerData.serverList1"></ServerList>
      </div>
      <div class="server-page">
        <ServerList :server-data="ServerData.serverList2"></ServerList>
      </div>
    </div>
  </div>
</template>

<script>
import ServerList from '@/pages/server-list'
import ServerData from '@/server-ws'
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
        dot.style.backgroundColor =
          '#' + Math.floor(Math.random() * 256).toString(10)
      })
    }
  },
  mounted() {
    //初次执行一次
    this.rondomDotPos()
    //3秒后轮训轮训数据
    this.timer = setInterval(this.rondomDotPos, 3000)
  },
  destroyed() {
    window.clearInterval(this.timer)
  }
}
</script>

<style>
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(10deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  75% {
    transform: rotateY(-10deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
body {
  background: #11112b url('./assets/bg1.png') no-repeat center bottom;
  background-attachment: fixed;
  background-size: 50%;
  padding-bottom: 20px;
}
.page-3d {
  perspective: 1000;
}
.server-page {
  animation: rotate3d 20s ease-in 0.1s infinite;
}
.page-title {
  position: relative;
  text-align: center;
  border-top: 1px solid #113252;
  border-bottom: 1px solid #113252;
  padding: 10px;
}
.page-title h1 {
  color: #fff;
  font-size: 28px;
  position: relative;
  z-index: 1;
}
.page-title h1 i {
  position: relative;
  font-style: normal;
  display: inline-block;
  transition: all 2s cubic-bezier(0.76, 0.45, 0.01, 1.66);
}
.page-title span {
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
  /* filter: blur(1px); */
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
  margin-top: 40px;
}
.server-rec-inner {
  margin: 0 100px;
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
