const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TLGTOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/mark/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `�������,���� ����������`);
	bot.sendMessage(`@anatoliygucci` , `� ������� ������`)
})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})