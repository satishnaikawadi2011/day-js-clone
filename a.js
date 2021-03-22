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

const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

function ordinal(n) {
	var s = [
		'th',
		'st',
		'nd',
		'rd'
	];
	var v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function isValid(dateString) {
	const date = new Date(dateString);
	if (isNaN(date.getHours())) {
		return false;
	}
	return true;
}

function insertYear(date, format) {
	let partiallyFormated;
	if (format.includes('YYYY')) {
		partiallyFormated = format.replace('YYYY', date.getFullYear().toString());
	}
	else if (format.includes('YY')) {
		partiallyFormated = format.replace('YY', date.getFullYear().toString().slice(2, 4));
	}
	return partiallyFormated;
}

function insertMonth(date, format) {
	let partiallyFormated;
	if (format.includes('MMMM')) {
		partiallyFormated = format.replace('MMMM', months[date.getMonth()]);
	}
	else if (format.includes('MMM')) {
		partiallyFormated = format.replace('MMM', months[date.getMonth()].slice(0, 3));
	}
	else if (format.includes('MM')) {
		partiallyFormated = format.replace('MM', date.getMonth().toString());
	}
	return partiallyFormated;
}

function insertDay(date, format) {
	let partiallyFormated;
	if (format.includes('DD')) {
		partiallyFormated = format.replace(
			'DD',
			date.getDate().toLocaleString('en-US', {
				minimumIntegerDigits : 2,
				useGrouping          : false
			})
		);
	}
	else if (format.includes('Do')) {
		partiallyFormated = format.replace('Do', ordinal(parseInt(date.getDate())));
	}
	else if (format.includes('D')) {
		partiallyFormated = format.replace('D', date.getDate().toString());
	}
	return partiallyFormated;
}

function insertHours(date, format) {
	let partiallyFormated;
	if (format.includes('HH')) {
		partiallyFormated = format.replace(
			'HH',
			date.getHours().toLocaleString('en-US', {
				minimumIntegerDigits : 2,
				useGrouping          : false
			})
		);
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
		partiallyFormated = format.replace(
			'hh',
			hours.toLocaleString('en-US', {
				minimumIntegerDigits : 2,
				useGrouping          : false
			})
		);
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
}

function insertMinutes(date, format) {
	let partiallyFormated;
	if (format.includes('mm')) {
		partiallyFormated = format.replace(
			'mm',
			date.getMinutes().toLocaleString('en-US', {
				minimumIntegerDigits : 2,
				useGrouping          : false
			})
		);
	}
	else if (format.includes('m')) {
		partiallyFormated = format.replace('m', date.getMinutes());
	}
	return partiallyFormated;
}

function insertSeconds(date, format) {
	let partiallyFormated;
	if (format.includes('ss')) {
		partiallyFormated = format.replace(
			'ss',
			date.getSeconds().toLocaleString('en-US', {
				minimumIntegerDigits : 2,
				useGrouping          : false
			})
		);
	}
	else if (format.includes('s')) {
		partiallyFormated = format.replace('s', date.getSeconds());
	}
	return partiallyFormated;
}

function insertWeekday(date, format) {
	let partiallyFormated;
	if (format.includes('WW')) {
		partiallyFormated = format.replace('WW', weekdays[date.getDay()]);
	}
	else if (format.includes('W')) {
		partiallyFormated = format.replace('W', weekdays[date.getDay()].slice(0, 3));
	}
	return partiallyFormated;
}

function insertAmPm(date, format) {
	let partiallyFormated;
	var hours = date.getHours();
	var ampm =

			hours >= 12 ? 'pm' :
			'am';
	if (format.includes('aa')) {
		partiallyFormated = format.replace('aa', ampm);
	}
	return partiallyFormated;
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
	myFormat = insertAmPm(date, myFormat);
	return myFormat;
}
console.log(formatDate(new Date().toISOString(), 'Do MMM,YYYY WW hh:mm:ss aa'));
