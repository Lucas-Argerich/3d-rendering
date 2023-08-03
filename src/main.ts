import './style.css'
const canvas = document.querySelector<HTMLCanvasElement>('#game') ?? new HTMLCanvasElement()
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.onresize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const context = canvas.getContext('2d') ?? new CanvasRenderingContext2D()

function draw() {
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)
}

let prevTime = new Date().getTime()

// Run game
function gameLoop() {
  draw()
  const newTime = new Date().getTime()
  const timeDiff = newTime - prevTime
  console.log(Math.floor(1000 / timeDiff).toString() + ' FPS')
  prevTime = newTime

  requestAnimationFrame(gameLoop)
}

gameLoop()
