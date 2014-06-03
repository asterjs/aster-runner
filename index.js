'use strict';

var Rx = require('rx');
require('colors');

module.exports = Rx.Observer.create(function onFiles(files) {
	console.log('Processing files...');

	files.subscribe(Rx.Observer.create(
		function onFile(file) { console.log('>> %s'.yellow, file.loc.src) },
		function onError(error) { console.error(notification.exception.stack.red) },
		function onCompleted() { console.log('Done.'.green) }
	));
});
