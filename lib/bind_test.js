var Benchmark = require('benchmark')
  , suite = new Benchmark.Suite
  , _ = require('underscore');

var a = [0,1,2,3,4,5,6,7,8,9]
  , s1 = {x: null}
  , s2 = {x: null}
  , s3 = {x: null}
  , s4 = {x: null};

suite
  .add('for', function() {
    for (var i = 0; i < a.length; i++) {
      s1.x = a[i];
    }
  })
  .add('foreach', function() {
    a.forEach(function (i) {
      s2.x = i;
    });
  })
  .add('native_bind', function() {
    a.forEach(function (i) {
      this.x = i;
    }.bind(s4));
  })
  .add('underscore_bind', function() {
    a.forEach(_.bind(function (i) {
      this.x = i;
    }, s3));
  })
  .on('cycle', function(event, bench) {
    console.log(String(bench));
  })
  .on('complete', function() {
    console.log('Fastest is: ' + this.filter('fastest').pluck('name'));
  })
  .run();
