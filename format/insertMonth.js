const formateNumber = require('../utils/formateNumber');

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

module.exports = function insertMonth(date, format) {
	let partiallyFormated;
	if (format.includes('MMMM')) {
		partiallyFormated = format.replace('MMMM', months[date.getMonth()]);
	}
	else if (format.includes('MMM')) {
		partiallyFormated = format.replace('MMM', months[date.getMonth()].slice(0, 3));
	}
	else if (format.includes('MM')) {
		partiallyFormated = format.replace('MM', formateNumber(date.getMonth()));
	}
	return partiallyFormated;
};
