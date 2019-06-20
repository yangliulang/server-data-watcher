<template>
  <div class="server">
    <div :class="['circle', getServerStatus]" ref="circle"></div>
    <div class="dot-list">
      <span :class="{twinkle:isTwinkle(v)}" :key="v" v-for="v in 12"></span>
    </div>
  </div>
</template>

<script>
import Server from './server'
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'server',
  data() {
    return {
      //随机要闪烁的点
      twinkle: []
    }
  },
  props: {
    status: {
      type: String,
      default: 'success'
    }
  },
  computed: {
    getServerStatus() {
      return this.status === 'success'
        ? ''
        : this.status === 'error'
        ? 'circle-twinkle-error'
        : this.status === 'warning'
        ? 'circle-twinkle-warning'
        : ''
    }
  },
  methods: {
    isTwinkle(v) {
      return this.twinkle.includes(v)
    },
    randomTwinke() {
      const r = Math.ceil(Math.random() * 10)
      const a = Array.from(
        new Set(
          Array(r)
            .fill(0)
            .map(item => Math.ceil(Math.random() * 12))
        )
      )
      this.twinkle = a
    },
    statusTwinkle() {
      this.status === 'success' &&
        this.$refs.circle.classList.toggle('circle-twinkle')
      this.status === 'error' &&
        this.$refs.circle.classList.toggle('circle-twinkle-error')
      this.status === 'warning' &&
        this.$refs.circle.classList.toggle('circle-twinkle-warning')
    }
  },
  mounted() {
    this.timer1 = setInterval(this.randomTwinke, 300)
    this.timer2 = setInterval(this.statusTwinkle, 500)
  },
  destroyed() {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  }
}
</script>

<style scoped>
.server {
  border-top: 1px solid #0d3f6e;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #146abb;
  transition: all 0.3s ease-in;
}
.circle-twinkle {
  border-color: rgb(3, 173, 3);
  box-shadow: green 0 0 10px inset;
}
.circle-twinkle-error {
  border-color: red;
  box-shadow: red 0 0 10px inset;
}
.circle-twinkle-warning {
  border-color: orange;
  box-shadow: orange 0 0 10px inset;
}
.dot-list {
  line-height: 5px;
  height: 20px;
  width: 60px;
}
.dot-list span {
  display: inline-block;
  width: 5px;
  height: 5px;
  box-sizing: border-box;
  border: 1px solid #3096f6;
  border-radius: 50%;
  margin-left: 5px;
}
.dot-list span.twinkle {
  background-color: #fff;
  box-shadow: #fff 0 0 5px;
}
.dot-list span:nth-child(6n + 1) {
  margin-left: 0;
}
.dot-list span:nth-child(7n) {
  margin-left: 5px;
}
</style>