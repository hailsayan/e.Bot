const TelegramBot = require('node-telegram-bot-api');
const token = '6934019405:AAHtSY8hZPGEGV79PcKOoYQ9u0Ant_cEa8Q';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/ , msg=>{
    bot.sendMessage(msg.chat.id, `welcome to my bot ${msg.chat.first_name}` , 
        {
            reply_markup : {
                'keyboard' : [
                    ['link of bot'],
                    ['link for unknown bot'],
                    ['my username']
                ]
            }
        }
    )
});

bot.on('message', msg=>{
    if(msg.text == 'cute'){
        bot.sendPhoto(msg.chat.id , 'AgACAgQAAxkBAANcZa_dd6viVJDNdOk-y0z8ffau37cAAkvBMRswiIBR_MPAjGax2zsBAAMCAAN4AAM0BA')
    }

    switch (msg.text) {
        case 'link of bot':
            bot.sendMessage(msg.chat.id, ' t.me/PsyonsBot')
            break;
        case 'link for unknown bot':
            bot.sendMessage(msg.chat.id , `here is your id for using in unknown bot ${msg.chat.id}`)
            break;
        case 'my username':
            bot.sendMessage(msg.chat.id, `your username is ${msg.chat.username}`)
            break;
    }
});