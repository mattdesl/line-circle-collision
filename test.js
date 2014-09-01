var test = require('tape').test
var collide = require('./')



test('line circle collides', function(t) {
    var circle = [25, 10],
        lineA = [5, 10],
        lineB = [50, 10],
        radius = 15

    var nearest = [0, 0]
    t.equal(collide(lineA, lineB, circle, radius, nearest), true)
    t.deepEqual(nearest, [25, 10], 'produces nearest point')

    radius = 0
    t.equal(collide(lineA, lineB, circle, radius), false)
    
    radius = 25
    lineA[1] = -30 
    lineB[1] = -30
    
    t.equal(collide(lineA, lineB, circle, radius), false)


    t.end()
})