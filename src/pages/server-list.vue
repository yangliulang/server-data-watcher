<template>
  <!-- name="服务器A" status="error" -->
  <div class="server-rec">
    <div :key="server.id" class="server-rec-inner" v-for="server in serverData">
      <!-- 默认指向父级 -->
      <div class="line line-animate" ref="line" v-if="!server.hiddenLine"></div>
      <!-- 有可能指向父级的兄弟们 -->
      <div
        :data-target-up="lineToUpId"
        :key="lineToUpId"
        class="line line-animate"
        ref="lineToParentSiblings"
        v-for="lineToUpId in server.targetParentSiblingsIds"
      ></div>
      <ServerBox :id="server.id" :name="server.name" :status="server.status" style="width:100px"></ServerBox>
      <server-list :server-data="server.list" v-if="server.list"></server-list>
    </div>
  </div>
</template>

<script>
import ServerBox from '@/components/server/index'
export default {
  name: 'server-list',
  components: {
    ServerBox
  },
  props: {
    serverData: {
      type: Array,
      default: {}
    }
  },
  methods: {
    //绘制默认的指向父服务器的连接线
    drawLine() {
      //绘制默认指向父服务器的链接线
      this.$refs.line &&
        this.$refs.line.forEach(line => {
          //当前线的位置信息
          const lineRect = line.getBoundingClientRect()
          //获取当前线的爷爷元素的位置信息
          const lineParentElRect = line.parentElement.parentElement.getBoundingClientRect()
          //计算相邻多条线的中心点坐标
          const linesCenterDotX =
            lineParentElRect.width / 2 + lineParentElRect.left
          //获取当前线相对于页面左边的距离
          const linePageX = lineRect.left
          // console.dir(lineParentElRect)
          //用爷爷的中心点和当前线的坐标点做比较，如果小于0表示线在左边，大于0就在右边，等于0，不变
          //然后设置旋转角度
          this.compareLineOfCenterDot(linesCenterDotX, linePageX, line)
        })
      //绘制指向父服务的兄弟连接线
      this.$refs.lineToParentSiblings &&
        this.$refs.lineToParentSiblings.forEach(line => {
          // console.dir(line.dataset.targetUp)
          //父服务器的兄弟服务器的id
          const parentServerId = line.dataset.targetUp
          //当前线的位置信息
          const lineRect = line.getBoundingClientRect()
          //获取当前线的爷爷元素的位置信息
          const lineParentElRect = document
            .querySelector(`#${parentServerId}`)
            .getBoundingClientRect()
          //计算相邻多条线的中心点坐标
          const linesCenterDotX =
            lineParentElRect.width / 2 + lineParentElRect.left
          //获取当前线相对于页面左边的距离
          const linePageX = lineRect.left
          // console.dir(lineParentElRect)
          //用爷爷的中心点和当前线的坐标点做比较，如果小于0表示线在左边，大于0就在右边，等于0，不变
          //然后设置旋转角度
          this.compareLineOfCenterDot(linesCenterDotX, linePageX, line)
        })
    },
    compareLineOfCenterDot(linesCenterDotX, linePageX, line) {
      //三角形的对边高低固定
      const triangleDuiBian = 41
      //三角形底边的绝对值
      const triangleDiBian = Math.abs(linesCenterDotX - linePageX)
      //已知三角形的底边和对边，求出倾斜角度
      const deg = (Math.atan2(triangleDuiBian, triangleDiBian) * 180) / Math.PI
      //计算三角形斜边的长度
      const xieBian = Math.sqrt(
        Math.pow(triangleDuiBian, 2) + Math.pow(triangleDiBian, 2)
      )
      //三角形斜边的
      if (linesCenterDotX - linePageX > 0) {
        //表示在左边
        line.style.transform = `rotate(${-deg}deg)`
      }
      if (linesCenterDotX - linePageX < 0) {
        //表示在右边
        line.style.transform = `rotate(${-(180 - deg)}deg)`
      }
      line.style.width = xieBian + 'px'
    }
  },
  mounted() {
    //绘制默认链接线
    this.drawLine()
  }
}
</script>
<style scoped>
@keyframes line-animate-after {
  0% {
    left: 100%;
    opacity: 0;
  }
  100% {
    left: 0;
  }
}
@keyframes line-animate-before {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 0;
  }
}
.server-rec,
.server-rec-inner {
  position: relative;
}
.line {
  position: absolute;
  top: 1px;
  height: 1px;
  width: 100%;
  left: 50%;
  background-color: #3096f6;
  box-shadow: #fff 0 0 5px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  line-height: 0;
  color: #fff;
}
.line::after,
.line::before {
  content: '';
  display: inline-block;
  height: 3px;
  width: 3px;
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  top: -4px;
  left: 100%;
  box-shadow: #fff 0 0 5px;
}
.line.line-animate::after {
  animation: line-animate-after 1s ease-in infinite;
}
.line.line-animate::before {
  animation: line-animate-before 1s ease-out infinite;
}
</style>