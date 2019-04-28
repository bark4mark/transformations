const Point2d = require('./2d')

/**
 * Will rotate a point around 0,0 and return a new translated point
 * 
 * @param {Object} point The point to rotate
 * @param {Number} angleAsDegrees The angle in degrees to rotate the point
 */
const rotate = (point, angleAsDegrees) => {
  const angleAsRadians = toRadians(angleAsDegrees),
    cos = Math.cos(angleAsRadians),
    sin = Math.sin(angleAsRadians)

  const rotatedX = (point.x * cos) - (point.y * sin)
  const rotatedY = (point.x * sin) + (point.y * cos)

  return new Point2d(rotatedX, rotatedY)
}

/**
 * Will convert an angle to radians
 * 
 * @param {Number} angle The angle to convert 
 */
const toRadians = (angle) => {
  return (Math.PI / 180) * angle
}

/**
 * Translate a point to another
 * 
 * @param {Number} x The x value for translation
 * @param {Number} y The y value for translation
 * @param {Object} point The point to translate 
 */
const translate = (x, y, point) => {
  return new Point2d(point.x + x, point.y + y)
}

module.exports.rotate = rotate
module.exports.toRadians = toRadians
module.exports.translate = translate