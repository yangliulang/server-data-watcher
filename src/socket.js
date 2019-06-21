var ws = new WebSocket('ws://localhost:9998/echo?name=yangyong')

ws.onopen = function() {
  // Web Socket 已连接上，使用 send() 方法发送数据
  ws.send('发送数据')
  console.log('数据发送中...')
}

ws.onmessage = function(evt) {
  console.log('数据已接收:', evt.data)
}

ws.onclose = function() {
  // 关闭 websocket
  console.log('连接已关闭...')
}
