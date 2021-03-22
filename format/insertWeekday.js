const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

module.exports = function insertWeekday(date, format) {
	let partiallyFormated;
	if (format.includes('WW')) {
		partiallyFormated = format.replace('WW', weekdays[date.getDay()]);
	}
	else if (format.includes('W')) {
		partiallyFormated = format.replace('W', weekdays[date.getDay()].slice(0, 3));
	}
	return partiallyFormated;
};
