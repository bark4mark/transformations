/**
 * Point2d is a single point
 */
class Point2d {
  /**
   * Create a point with the x and y coordinates
   * @param {Number} x The x axis value
   * @param {Number} y The y axis value
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * Draw a black pixel at the point
   * @param {Object} context The 2d context to draw on
   */
  draw(context) {
    context.fillRect(this.x, this.y, 1, 1)
  }
}

/**
 * A Line from one point to another
 */
class Line2d {
  /**
   * Create a line from one point to another
   * @param {Point2d} from the beginning of the line
   * @param {Point2d} to the end of the line
   */
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  /**
   * Draws the line
   * @param {Object} context The 2d context to draw on
   */
  draw(context) {
    context.beginPath()
    context.moveTo(this.from.x, this.from.y)
    context.lineTo(this.to.x, this.to.y)
    context.stroke()
  }
}

/**
 * A Rectangle
 */
class Rect2d {
  /**
   * Creates a rectangle
   * @param {Point2d} upperLeft The point for the upper left of the rectangle
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   */
  constructor(upperLeft, width, height) {
    this.upperLeft = upperLeft
    this.width = width
    this.height = height
  }

  /**
   * Draws the rectangle
   * @param {Object} context The 2d context to draw on
   */
  draw(context){
    context.rect(this.upperLeft.x, this.upperLeft.y, this.width, this.height)
    context.stroke()
  }
}

export {Point2d, Line2d, Rect2d}