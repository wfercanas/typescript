// If two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// Never declared to be a Point type
const point = { x: 12, y: 26 };
logPoint(point);

// Only requires a subset of the object's field to match
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);
const rect = { x: 33, y: 3, width: 20, height: 80 };
logPoint(rect);
const color = { hex: "#187ABF" };
// logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// No difference between how classes and objects conform to shapes. No implementation details.
const newVPoint = new VirtualPoint(12, 56);
logPoint(newVPoint);
