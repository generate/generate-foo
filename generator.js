'use strict';

module.exports = function foo(app, base) {
  app.task('default', function(cb) {
    console.log('foo > default');
    cb();
  });

  app.task('a', function(cb) {
    console.log('foo > a');
    cb();
  });

  app.task('b', function(cb) {
    console.log('foo > b');
    cb();
  });

  app.task('c', function(cb) {
    console.log('foo > c');
    cb();
  });
};
