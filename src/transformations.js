import {Point2d} from './2d'
import {toRadians} from './utils'

/**
 * Will rotate a point around some center point and return a new translated point
 * 
 * @param {Point2d} centerPoint The point to rotate around
 * @param {Point2d} point The point to rotate
 * @param {Number} angleAsDegrees The angle in degrees to rotate the point
 */
const rotate = (centerPoint, point, angleAsDegrees) => {
  const angleAsRadians = toRadians(angleAsDegrees),
    cos = Math.cos(angleAsRadians),
    sin = Math.sin(angleAsRadians)

  const rotatedX = (cos * (point.x - centerPoint.x)) + (sin * (point.y - centerPoint.y)) + centerPoint.x
  const rotatedY = (cos * (point.y - centerPoint.y)) + (sin * (point.x - centerPoint.x)) + centerPoint.y


  return new Point2d(Math.floor(rotatedX), Math.floor(rotatedY))
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