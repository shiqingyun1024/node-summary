// node的内置模块---用于处理事件，例如绑定事件，触发事件
const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}

const event = new MyEventEmitter()

// 绑定事件，类似于发布订阅模式    on就类似于发布  emit就类似于订阅
event.on('play',(value)=>{
   console.log(value);
})

event.emit('play','我和我的祖国')
event.emit('play','我和我的祖国')