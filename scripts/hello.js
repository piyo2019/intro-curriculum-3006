'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
		msg.send('Hello, @' + username);// @なしだとメアドの@の前の部分，@をつけるとslackの氏名になるみたい
		
	});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉'];// '凶'は省略
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`@${username} さんの今日の運勢は${lot}です`);
	});
};
