var pointCircleCollide = require('point-circle-collision')

var tmp = [0, 0]

function lineCircleCollide(a, b, circle, radius) {
    //check to see if start or end points lie within circle 
    if (pointCircleCollide(a, circle, radius))
        return true
    if (pointCircleCollide(b, circle, radius))
        return true
    
    var x1 = a[0],
        y1 = a[1],
        x2 = b[0],
        y2 = b[1],
        cx = circle[0],
        cy = circle[1]

    //vector d
    var dx = x2 - x1
    var dy = y2 - y1
    
    //vector lc
    var lcx = cx - x1
    var lcy = cy - y1
    
    //project lc onto d, resulting in vector p
    var dLen2 = dx * dx + dy * dy //len2 of d
    var px = dx
    var py = dy
    if (dLen2 > 0) {
        var dp = (lcx * dx + lcy * dy) / dLen2
        px *= dp
        py *= dp
    }
    
    //nearest vector, n.add(p)
    tmp[0] = x1 + px
    tmp[1] = y1 + py
    
    //len2 of p
    var pLen2 = px * px + py * py
    
    //check collision
    return pointCircleCollide(tmp, circle, radius)
            && pLen2 <= dLen2 && (px * dx + py * dy) >= 0
}

module.exports = lineCircleCollide