# aster-runner
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Task observer for aster.

## Usage

This module is part of [aster](https://npmjs.org/package/aster) and is available via `aster.runner`.

You use it in build scripts whenever you want build pipeline (which is lazy by default) to be executed:

```javascript
var aster = require('aster');

aster.src('src/**/*.js')
.map(plugin1(optionsForPlugin1))
.map(plugin2(optionsForPlugin2))
// ...
.subscribe(aster.runner({
    onFile: (file) => {
        console.log('>> %s'.yellow, file.path)
    }
}));
```

## API

### runner
Type: [`Rx.Observer`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observer.md)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-runner
[npm-image]: https://badge.fury.io/js/aster-runner.png

[travis-url]: http://travis-ci.org/asterjs/aster-runner
[travis-image]: https://secure.travis-ci.org/asterjs/aster-runner.png?branch=master
