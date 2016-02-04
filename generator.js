'use strict';

module.exports = function (app, base) {
  app.task('default', function(cb) {
    console.log('foo > default');
    cb();
  });
};
