var getHumanTime = function(dateString) {
	// The time now
	var now = new Date().getTime();
	const created = new Date(dateString).getTime();
	// The difference between now and created
	var howLongAgo = created - now;
	// Convert to a positive integer
	var time = Math.abs(howLongAgo);

	// Define humanTime and units
	var humanTime, units;

	// If there are years
	if (time > 1000 * 60 * 60 * 24 * 365) {
		humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10);
		units = 'years';
	}
	else if (time > 1000 * 60 * 60 * 24 * 30) {
		// If there are months
		humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10);
		units = 'months';
	}
	else if (time > 1000 * 60 * 60 * 24 * 7) {
		// If there are weeks
		humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 7), 10);
		units = 'weeks';
	}
	else if (time > 1000 * 60 * 60 * 24) {
		// If there are days
		humanTime = parseInt(time / (1000 * 60 * 60 * 24), 10);
		units = 'days';
	}
	else if (time > 1000 * 60 * 60) {
		// If there are hours
		humanTime = parseInt(time / (1000 * 60 * 60), 10);
		units = 'hours';
	}
	else if (time > 1000 * 60) {
		// If there are minutes
		humanTime = parseInt(time / (1000 * 60), 10);
		units = 'minutes';
	}
	else {
		// Otherwise, use seconds
		humanTime = parseInt(time / 1000, 10);
		units = 'seconds';
	}

	return humanTime + ' ' + units;
};

console.log(getHumanTime('2021-03-22'));
