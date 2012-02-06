exports.run = function (name, cnt, fn) {
  var avg = 0
    , t0, tt;

  for (var i = 0; i < cnt; i++) {
    t0 = (new Date()).getTime();
    fn.call(null);
    tt = ((new Date()).getTime() - t0);
    avg += tt;
  }

  console.log('[%s] avg of %d runs: %dms', name, cnt, (avg/cnt));
};
