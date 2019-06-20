<template>
  <div :class="'server-group server-group-'+status">
    <div :class="'server-box server-box-'+status">
      <p class="server-name">{{name}}</p>
      <Server :status="status"></Server>
      <Server :status="status"></Server>
      <Server :status="status"></Server>
    </div>
    <div class="server-gear"></div>
  </div>
</template>
<script>
import Server from './server'
export default {
  name: 'server',
  components: {
    Server
  },
  props: {
    name: {
      type: String,
      default: '服务器'
    },
    status: {
      type: String,
      default: 'success'
    }
  }
}
</script>

<style scoped>
@keyframes status-error {
  0% {
    box-shadow: red 0 0 10px inset;
    transform: rotate(0deg);
  }
  50% {
    box-shadow: red 0 0 50px inset;
  }
  100% {
    box-shadow: red 0 0 10px inset;
  }
}
@keyframes status-warning {
  0% {
    box-shadow: #e4ff63 0 0 10px inset;
  }
  50% {
    box-shadow: #e4ff63 0 0 50px inset;
  }
  100% {
    box-shadow: #e4ff63 0 0 10px inset;
  }
}
@keyframes serve-scale {
  0% {
  }
  50% {
    transform: scale(1.1);
  }
  100% {
  }
}
.server-group-error {
  animation: serve-scale 2s ease-in infinite;
  position: relative;
  z-index: 100;
}
.server-box {
  border: 1px solid #3096f6;
  padding: 5px;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.767) 0 0 10px inset;
  background-color: #11112b;
}
.server-box-error {
  animation: status-error 2s ease-in infinite;
}
.server-box-warning {
  animation: status-warning 2s ease-in infinite;
}
.server-name {
  text-align: center;
  color: #fff;
  font-size: 12px;
  padding: 10px 0;
}
.server-gear {
  border: 1px solid #3096f6;
  box-sizing: border-box;
  height: 10px;
  width: 80px;
  margin: 10px auto 0;
  box-shadow: #fff 0 0 4px inset;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  background-color: #11112b;
}
.server-gear:after,
.server-gear:before {
  content: '';
  width: 2px;
  background-color: #3096f6;
  position: relative;
  top: -10px;
}
.server-group:hover .server-box {
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}
.server-group:hover .line {
  background-color: #fff;
}
</style>