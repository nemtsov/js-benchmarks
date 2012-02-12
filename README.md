A Few JS Benchmarks
====================

These are just some benchmarks that I'm personally interested in.
Run these in Node.

Results (of test in the ./lib)
-------------------------------

*Executed on: MacBook Pro, 2.53 GHz Intel Core 2 Duo, 8GB RAM; Node: v0.6.10*

__bind\_test:__

    for x 25,719,569 ops/sec ±0.36% (62 runs sampled)
    foreach x 3,943,617 ops/sec ±0.18% (64 runs sampled)
    native_bind x 146,633 ops/sec ±1.78% (59 runs sampled)
    underscore_bind x 59,014 ops/sec ±2.68% (55 runs sampled)
    Fastest is: for

__klass\_test:__

    klass#extend x 2,161,006 ops/sec ±0.27% (63 runs sampled)
    Object.create x 16,747,189 ops/sec ±0.33% (61 runs sampled)
    Fastest is: Object.create

Notes
-----
Good read about benchmarks in general:
http://calendar.perfplanet.com/2010/bulletproof-javascript-benchmarks/

You may also be interested in:
http://jsperf.com/
