const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3333', {
  perMessageDeflate: false
});


ws.on('open', () => {
	console.log('open')
	ws.send(JSON.stringify({ message: 'hello'}))
})

ws.on('message', () => {
	console.log('message')
})

ws.on('close', () => {
	console.log('close')
})
