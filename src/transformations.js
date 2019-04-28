import {Point2d} from './2d'
import {toRadians} from './utils'

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
 * Translate a point to another
 * 
 * @param {Number} x The x value for translation
 * @param {Number} y The y value for translation
 * @param {Object} point The point to translate 
 */
const translate = (x, y, point) => {
  return new Point2d(point.x + x, point.y + y)
}

export{rotate, translate}