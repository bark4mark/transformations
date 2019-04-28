import {getCenter} from '../src/utils'
import {rotate, translate} from '../src/transformations'
import {Point2d} from '../src/2d'

document.addEventListener("DOMContentLoaded", (event) => {
  const canvasWidth = 500
  const canvasHeight = 500
  const center = getCenter(canvasWidth, canvasHeight)

  const canvas = document.getElementById('point')
  const context = canvas.getContext('2d')
  const point = new Point2d(center.x + 50, center.y)
  console.log(point)
  point.draw(context)
  const rotated = rotate(point, 20)
  const translated = translate(point.x, point.y, rotated)
  console.log(translated)
  translated.draw(context)


  // const animate = () => {
  //   center.draw(context)

  //   const point = new Point2d(center.x + 50, center.y)
  //   point.draw(context)
  //   translate(point.x, point.y, rotate(point, 90)).draw(context)

  //   requestAnimationFrame(animate)
  // }
  
  // animate(context)
})