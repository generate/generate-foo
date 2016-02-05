'use strict';

module.exports = function foo(verb, base) {
  verb.task('default', function(cb) {
    console.log('generator-foo verbfile > default');
    cb();
  });

  verb.task('a', function(cb) {
    console.log('verb foo > a');
    cb();
  });

  verb.task('b', function(cb) {
    console.log('verb foo > b');
    cb();
  });

  verb.task('c', function(cb) {
    console.log('verb foo > c');
    cb();
  });
};
