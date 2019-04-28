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
  let angle = 0
  let secondAngle = 0
  
  const animate = () => {
    context.clearRect(0,0,canvasWidth, canvasHeight)
    if(angle > 359)
      angle = 0

    if(secondAngle > 359)
      secondAngle = 0
    
    center.draw(context)

    const rotated = rotate(center, point, angle)
    rotated.draw(context)
    const moon = new Point2d(rotated.x + 50, rotated.y)
    rotate(rotated, moon, secondAngle).draw(context)

    angle = angle + 5
    secondAngle = secondAngle + 1
    requestAnimationFrame(animate)
  }
  
  animate(context)
})