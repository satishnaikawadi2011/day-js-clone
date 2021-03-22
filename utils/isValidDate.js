module.exports = function isValid(dateString) {
	const date = new Date(dateString);
	if (isNaN(date.getHours())) {
		return false;
	}
	return true;
};
