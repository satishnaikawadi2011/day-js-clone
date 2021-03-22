const formatDate = require('./format');

console.log(formatDate(new Date().toISOString(), 'Do MMM,YYYY WW hh:mm:ss aa'));
