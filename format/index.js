const isValidDate = require('../utils/isValidDate');
const insertAmOrPm = require('./insertAmOrPm');
const insertDay = require('./insertDay');
const insertHours = require('./insertHours');
const insertMinutes = require('./insertMinutes');
const insertMonth = require('./insertMonth');
const insertSeconds = require('./insertSeconds');
const insertWeekday = require('./insertWeekday');
const insertYear = require('./insertYear');

module.exports = function formatDate(dateString, format) {
	if (!isValidDate(dateString)) {
		return 'Invalid Date';
	}
	const date = new Date(dateString);
	let myFormat = format;
	myFormat = insertYear(date, myFormat);
	myFormat = insertMonth(date, myFormat);
	myFormat = insertDay(date, myFormat);
	myFormat = insertWeekday(date, myFormat);
	myFormat = insertHours(date, myFormat);
	myFormat = insertMinutes(date, myFormat);
	myFormat = insertSeconds(date, myFormat);
	myFormat = insertAmOrPm(date, myFormat);
	return myFormat;
};
