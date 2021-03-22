module.exports = function insertYear(date, format) {
	let partiallyFormated;
	if (format.includes('YYYY')) {
		partiallyFormated = format.replace('YYYY', date.getFullYear().toString());
	}
	else if (format.includes('YY')) {
		partiallyFormated = format.replace('YY', date.getFullYear().toString().slice(2, 4));
	}
	return partiallyFormated;
};
