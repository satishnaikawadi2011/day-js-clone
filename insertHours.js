const formateNumber = require('./utils/formateNumber');

module.exports = function insertHours(date, format) {
	let partiallyFormated;
	if (format.includes('HH')) {
		partiallyFormated = format.replace('HH', formateNumber(date.getHours()));
	}
	else if (format.includes('H')) {
		partiallyFormated = format.replace('H', date.getHours());
	}
	else if (format.includes('hh')) {
		let hours = date.getHours();
		hours = hours % 12;
		hours =
			hours ? hours :
			12;
		partiallyFormated = format.replace('hh', formateNumber(hours));
	}
	else if (format.includes('h')) {
		let hours = date.getHours();
		hours = hours % 12;
		hours =
			hours ? hours :
			12;
		partiallyFormated = format.replace('h', hours);
	}
	return partiallyFormated;
};
