var _ = require('underscore');

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

run('for based', function (a) {
  var obj = new Obj(a);
  obj.runFor();
});

run('self based', function (a) {
  var obj = new Obj(a);
  obj.runSelf();
});

run('underscore based', function (a) {
  var obj = new Obj(a);
  obj.runUnderscore();
});

run('bind based', function (a) {
  var obj = new Obj(a);
  obj.runBind();
});

//------------

function run(name, fn) {
  var a = [];
  for (var i = 0; i < 1000000; i++) {
    a.push(i);
  }

  var avg = 0
    , cnt = 10
    , t0, tt;

  for (var i = 0; i < cnt; i++) {
    t0 = (new Date()).getTime();
    fn.call(null, a);
    tt = ((new Date()).getTime() - t0);
    avg += tt;
  }

  console.log('[%s] avg of %d runs: %dms', name, cnt, (avg/cnt));
}
