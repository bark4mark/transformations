import {Point2d} from './2d'

/**
 * Will return the center point of the values passed in
 * 
 * @param {Number} width The width
 * @param {Number} height The height
 */
const getCenter = (width, height) => {
  return new Point2d(width / 2, height / 2)
}

/**
 * Will convert an angle to radians
 * 
 * @param {Number} angle The angle to convert 
 */
const toRadians = (angle) => {
  return (Math.PI / 180) * angle
}

export{getCenter, toRadians}