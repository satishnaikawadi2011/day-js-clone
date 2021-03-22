module.exports = function insertAmPm(date, format) {
	let partiallyFormated;
	var hours = date.getHours();
	var ampm =

			hours >= 12 ? 'pm' :
			'am';
	if (format.includes('aa')) {
		partiallyFormated = format.replace('aa', ampm);
	}
	return partiallyFormated;
};
