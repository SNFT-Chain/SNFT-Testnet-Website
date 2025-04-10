"use client"

import { useEffect, useRef } from "react"

export function BlockchainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    const blocks: Block[] = []
    const connections: Connection[] = []
    const numBlocks = 7

    // Block class
    class Block {
      x: number
      y: number
      width: number
      height: number
      color: string
      targetX: number
      targetY: number
      velocity: { x: number; y: number }
      id: number

      constructor(id: number) {
        this.width = 60
        this.height = 40
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`
        this.targetX = Math.random() * (canvas.width - this.width)
        this.targetY = Math.random() * (canvas.height - this.height)
        this.velocity = { x: 0, y: 0 }
        this.id = id
      }

      update() {
        // Update velocity based on target position
        const dx = this.targetX - this.x
        const dy = this.targetY - this.y
        this.velocity.x = dx * 0.02
        this.velocity.y = dy * 0.02

        // Apply velocity
        this.x += this.velocity.x
        this.y += this.velocity.y

        // If close to target, set new target
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
          this.targetX = Math.random() * (canvas.width - this.width)
          this.targetY = Math.random() * (canvas.height - this.height)
        }

        // Keep within bounds
        if (this.x < 0) this.x = 0
        if (this.y < 0) this.y = 0
        if (this.x > canvas.width - this.width) this.x = canvas.width - this.width
        if (this.y > canvas.height - this.height) this.y = canvas.height - this.height
      }

      draw() {
        if (!ctx) return

        // Draw block
        ctx.fillStyle = this.color
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.roundRect(this.x, this.y, this.width, this.height, 8)
        ctx.fill()
        ctx.stroke()

        // Draw block ID
        ctx.fillStyle = "#ffffff"
        ctx.font = "16px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`#${this.id}`, this.x + this.width / 2, this.y + this.height / 2)
      }

      getCenter() {
        return {
          x: this.x + this.width / 2,
          y: this.y + this.height / 2,
        }
      }
    }

    // Connection class
    class Connection {
      from: Block
      to: Block
      active: boolean
      progress: number
      speed: number

      constructor(from: Block, to: Block) {
        this.from = from
        this.to = to
        this.active = false
        this.progress = 0
        this.speed = 0.02 + Math.random() * 0.03
      }

      update() {
        if (this.active) {
          this.progress += this.speed
          if (this.progress >= 1) {
            this.progress = 0
            this.active = false
            // 50% chance to activate again immediately
            if (Math.random() > 0.5) {
              setTimeout(() => {
                this.active = true
              }, Math.random() * 2000)
            }
          }
        } else if (Math.random() < 0.005) {
          this.active = true
        }
      }

      draw() {
        if (!ctx) return

        const fromCenter = this.from.getCenter()
        const toCenter = this.to.getCenter()

        // Draw line
        ctx.beginPath()
        ctx.moveTo(fromCenter.x, fromCenter.y)
        ctx.lineTo(toCenter.x, toCenter.y)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw data packet if active
        if (this.active) {
          const x = fromCenter.x + (toCenter.x - fromCenter.x) * this.progress
          const y = fromCenter.y + (toCenter.y - fromCenter.y) * this.progress

          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fillStyle = "#ffffff"
          ctx.fill()
        }
      }
    }

    // Initialize blocks
    for (let i = 0; i < numBlocks; i++) {
      blocks.push(new Block(i + 1))
    }

    // Initialize connections (connect each block to 2-3 others)
    blocks.forEach((block, i) => {
      const numConnections = 2 + Math.floor(Math.random() * 2)
      const connectedBlocks = new Set<number>()

      for (let j = 0; j < numConnections; j++) {
        let targetIndex
        do {
          targetIndex = Math.floor(Math.random() * blocks.length)
        } while (targetIndex === i || connectedBlocks.has(targetIndex))

        connectedBlocks.add(targetIndex)
        connections.push(new Connection(block, blocks[targetIndex]))
      }
    })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      connections.forEach((connection) => {
        connection.update()
        connection.draw()
      })

      // Update and draw blocks
      blocks.forEach((block) => {
        block.update()
        block.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[400px] rounded-lg border border-gray-200 dark:border-gray-800" />
}
