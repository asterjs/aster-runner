'use strict';

var Rx = require('rx');
require('colors');

function onFile(file) {
  console.log('>> %s'.yellow, file.path)
}

function onError(error) {
  console.error(error.stack.red)
}

function onCompleted() {
  console.log('Done.'.green)
}

function defaultSubscriber(options) {
  return function onFiles(files) {
    console.log('Processing files...');

    files.subscribe(Rx.Observer.create(
      options.onSuccess || onFile,
      options.onError || onError,
      options.onCompleted || onCompleted
    ));
  }
}

module.exports = function(options) {
  var subscriber = options.subscriber || defaultSubscriber
  subscriber = typeof subscriber === 'function' ? subscriber(options) : subscriber

  Rx.Observer.create(subscriber);
}
