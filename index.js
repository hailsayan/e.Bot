const TelegramBot = require('node-telegram-bot-api');
const token = '6934019405:AAHtSY8hZPGEGV79PcKOoYQ9u0Ant_cEa8Q';

const bot = new TelegramBot(token, {polling: true});