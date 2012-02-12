var Benchmark = require('benchmark')
  , suite = new Benchmark.Suite
  , klass = require('klass');

//-------------

var s1 = 0
  , s2 = 0;

var Person = klass(function (name) {
  this.name = name
}).methods({
  walk: function () {
    s1++;
  }
});

var SuperHuman = Person.extend(function (name) {
}).methods({
  fly: function () {
    this.walk();
  }
});

//-------------

function Person2 (name) {
  this.name = name;
}

Person2.prototype.walk = function () {
  s2++;
};

function SuperHuman2 (name) {
  Person2.call(this, name);
}

SuperHuman2.prototype = Object.create(Person2.prototype, {
  constructor: {
      value: SuperHuman2
    , enumerable: false
    , writable: true
    , configurable: true
  }
});

SuperHuman2.prototype.fly = function () {
  this.walk();
};


//------------


suite
  .add('klass#extend', function() {
    var p = new SuperHuman('joe');
    p.fly();
  })
  .add('Object.create', function() {
    var p = new SuperHuman2('joe');
    p.fly();
  })
  .on('cycle', function(event, bench) {
    console.log(String(bench));
  })
  .on('complete', function() {
    console.log('Fastest is: ' + this.filter('fastest').pluck('name'));
  })
  .run();
