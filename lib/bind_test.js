var run = require('./runner').run
  , _ = require('underscore');

function Obj(a) {
  this.a = a;
  this.arr = [];
}

Obj.prototype.runFor = function () {
  for (var i = 0, len = this.a.length; i < len; i++) {
    this.arr.push(this.a[i]);
  }
};

Obj.prototype.runSelf = function () {
  var self = this;
  this.a.forEach(function (i) {
    self.arr.push(i);
  });
};

Obj.prototype.runUnderscore = function () {
  this.a.forEach(_.bind(function (i) {
    this.arr.push(i);
  }, this));
};

Obj.prototype.runBind = function () {
  this.a.forEach(function (i) {
    this.arr.push(i);
  }.bind(this));
};

//------------

var cnt = 10
  , a = [];
for (var i = 0; i < 1000000; i++) {
  a.push(i);
}

//------------

run('for based', cnt, function () {
  var obj = new Obj(a);
  obj.runFor();
});

run('self based', cnt, function () {
  var obj = new Obj(a);
  obj.runSelf();
});

run('underscore based', cnt, function () {
  var obj = new Obj(a);
  obj.runUnderscore();
});

run('bind based', cnt, function () {
  var obj = new Obj(a);
  obj.runBind();
});