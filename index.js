const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TLGTOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/mark/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `thank you ,Ivan Vasilyevich`);
	bot.sendMessage(`@antoliygucci` , `Igot a mark`)
})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})

bot.onText(/(формул)|(скажи).*давлени/, (msg, match) => {
	bot.sendMessage(msg.chat.id, `Давление Р=F/S`)
})
