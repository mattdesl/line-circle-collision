var test = require('tape').test
var collide = require('./')
test('line circle collides', function(t) {
    var circle = [5, 10],
        lineA = [5, 10],
        lineB = [50, 10],
        radius = 25

    t.equal(collide(lineA, lineB, circle, radius), true)

    radius = 0
    t.equal(collide(lineA, lineB, circle, radius), false)
    
    radius = 25
    lineA[1] = -30 
    lineB[1] = -30
    t.equal(collide(lineA, lineB, circle, radius), false)

    t.end()
})