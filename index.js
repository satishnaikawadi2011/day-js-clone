const insertAmOrPm = require('./format/insertAmOrPm');
const insertDay = require('./format/insertDay');
const insertHours = require('./format/insertHours');
const insertMinutes = require('./format/insertMinutes');
const insertMonth = require('./format/insertMonth');
const insertSeconds = require('./format/insertSeconds');
const insertWeekday = require('./format/insertWeekday');
const insertYear = require('./format/insertYear');

function isValid(dateString) {
	const date = new Date(dateString);
	if (isNaN(date.getHours())) {
		return false;
	}
	return true;
}

function formatDate(dateString, format) {
	if (!isValid(dateString)) {
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
}
console.log(formatDate(new Date().toISOString(), 'Do MMM,YYYY WW hh:mm:ss aa'));
