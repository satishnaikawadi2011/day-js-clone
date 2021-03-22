const formateNumber = require('../utils/formateNumber');
const ordinal = require('../utils/ordinal');

module.exports = function insertDay(date, format) {
	let partiallyFormated;
	if (format.includes('DD')) {
		partiallyFormated = format.replace('DD', formateNumber(date.getDate()));
	}
	else if (format.includes('Do')) {
		partiallyFormated = format.replace('Do', ordinal(parseInt(date.getDate())));
	}
	else if (format.includes('D')) {
		partiallyFormated = format.replace('D', date.getDate().toString());
	}
	return partiallyFormated;
};
