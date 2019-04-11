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

bot.onText(/(формул)|(скажи).плотн*, (msg, match) => {
	bot.sendMessage(msg.chat.id, `ρ=m/V` )
})

bot.onText(/(формул)|(скажи).(глубин)|(жидк)*, (msg, match) => {
	bot.sendMessage(msg.chat.id, `P=ρ∙g∙h`)
})

bot.onText(/(формул)|(скажи).сил.тяжесь, (msg, match) => {
	bot.sendMessage(msg.chat.id, `Fт=mg`)
})

bot.onText(/(формул)|(скажи).Архимедов.сил.*, (msg, match) => {
	bot.sendMessage(msg.chat.id, `Fa=ρж∙g∙Vт`)
})

bot.onText(/(формул)|(скажи).ускорени., (msg, match) => {
	bot.sendMessage(msg.chat.id, ` a=(υ-υ 0)/t`)
})

bot.onText(/(формул)|(скажи)., (msg, match) => {
	bot.sendMessage(msg.chat.id, ``)
})

