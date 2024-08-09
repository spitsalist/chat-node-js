const EventEmitter = require('events')
const emitter = new EventEmitter()

sendMessage = (user,message, emitter) => {
    console.log(`Sending message from ${user}: ${message}`)
    emitter.emit('message',user, message)
}

emitter.on('message', (user, message) => {
    console.log(`${user}: ${message}`)
})

sendMessage('Jhon', 'hello jessica', emitter )
sendMessage('Jessica', 'hi Bob', emitter)
sendMessage('Bob', 'how are you Jessica', emitter)