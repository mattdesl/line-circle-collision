# line-circle-collision

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Performs a line-circle collision test, returning true if they intersect. Algorithm from [2D Game Collision](http://www.amazon.co.uk/2D-Game-Collision-Detection-introduction/dp/1479298123) by Thomas Schwarzl.

```js
var collide = require('line-circle-collision')

var circle = [5, 5],
	radius = 25,
	a = [5, 6],
	b = [10, 10]

var hit = collide(a, b, circle, radius)
console.log(hit)
```

You may also be interested in:

- [point-in-triangle](https://www.npmjs.org/package/point-in-triangle)
- [point-circle-collision](https://www.npmjs.org/package/point-circle-collision)
- [triangle-circle-collision](https://www.npmjs.org/package/triangle-circle-collision)
- [is-clockwise](https://www.npmjs.org/package/is-clockwise)

## Usage

[![NPM](https://nodei.co/npm/line-circle-collision.png)](https://nodei.co/npm/line-circle-collision/)

### `collide(a, b, circle, radius[, nearest])`

Performs a collision test with the line `a-b` and the given circle. Returns true if collision occurred.

`a`, `b`, and `circle` are expected to be 2D vectors in the form of an array.

If `nearest` is passed, the nearest point found during the intersection test will be stored into that vector. This is useful if you need to find the nearest point along the line for the intersection test. If the hit returns false, you should not expect the value of `nearest` to have changed.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/line-circle-collision/blob/master/LICENSE.md) for details.
