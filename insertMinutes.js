const formateNumber = require('./utils/formateNumber');

module.exports = function insertMinutes(date, format) {
	let partiallyFormated;
	if (format.includes('mm')) {
		partiallyFormated = format.replace('mm', formateNumber(date.getMinutes()));
	}
	else if (format.includes('m')) {
		partiallyFormated = format.replace('m', date.getMinutes());
	}
	return partiallyFormated;
};
