const formateNumber = require('./utils/formateNumber');

module.exports = function insertSeconds(date, format) {
	let partiallyFormated;
	if (format.includes('ss')) {
		partiallyFormated = format.replace('ss', formateNumber(date.getSeconds()));
	}
	else if (format.includes('s')) {
		partiallyFormated = format.replace('s', date.getSeconds());
	}
	return partiallyFormated;
};
