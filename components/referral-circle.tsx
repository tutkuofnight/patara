"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Icon } from "@/components/ui/icon"

const letters = [
  {
    id: "A",
    colorStyles: { background: `
      linear-gradient(128.93deg, #FFCB8F 9.01%, rgba(255, 203, 143, 0) 43.01%),
      linear-gradient(224.61deg, #FF7774 12.47%, rgba(255, 119, 116, 0) 42.22%),
      linear-gradient(322.73deg, rgba(252, 236, 222, 0.9) 14.5%, rgba(252, 236, 222, 0) 46.02%),
      linear-gradient(46.45deg, #8DF9F9 10.2%, rgba(141, 249, 249, 0) 42.5%),
      linear-gradient(211.18deg, #FBD3C6 10.96%, #F2F8F2 51.39%, #C4FDF5 90.16%)
    `},
    angle: 45,
  },
  {
    id: "W",
    colorStyles: { background: `linear-gradient(128.93deg, #A188FF 9.01%, rgba(161, 136, 255, 0) 43.01%),
    linear-gradient(224.61deg, #82FCA5 12.47%, rgba(130, 252, 165, 0) 42.22%),
    linear-gradient(322.73deg, rgba(252, 236, 222, 0.9) 14.5%, rgba(252, 236, 222, 0) 46.02%),
    linear-gradient(46.45deg, #8DF9F9 10.2%, rgba(141, 249, 249, 0) 42.5%),
    linear-gradient(211.18deg, #70E2A5 10.96%, #BCA9F7 51.39%, #A3CCF9 90.16%)` },
    angle: 90,
  },
  {
    id: "C",
    colorStyles: { background: `
      linear-gradient(180.46deg, #8EECFC -28%, rgba(142, 236, 252, 0) 51.81%),
      linear-gradient(35.68deg, #FF8541 -20.62%, rgba(255, 133, 65, 0) 43.51%),
      linear-gradient(136.06deg, rgba(255, 133, 65, 0) 14.9%, #FF8541 100%),
      linear-gradient(211.18deg, #A8C0FF 10.96%, #C071FF 51.39%, #ED3B9B 90.16%)
      ` },
    angle: 135,
  },
  {
    id: "G",
    colorStyles: { background: `
      linear-gradient(177.54deg, #677FFB -9.26%, rgba(103, 127, 251, 0) 63.56%),
      linear-gradient(102.37deg, rgba(255, 133, 65, 0) 47.48%, #FF8541 102.37%),
      linear-gradient(35.68deg, #FFE58A -20.62%, rgba(255, 249, 99, 0) 41.18%),
      linear-gradient(211.18deg, #FFC2A8 10.96%, #FFD74A 51.39%, #EDC63B 90.16%)
    ` },
    angle: 180,
  },
  {
    id: "S",
    colorStyles: { background: `
      linear-gradient(128.93deg, #F08DFF 9.01%, rgba(240, 141, 255, 0) 43.01%),
      linear-gradient(224.61deg, #E167FF 12.47%, rgba(225, 103, 255, 0) 42.22%),
      linear-gradient(320.31deg, rgba(223, 254, 254, 0.9) 13.75%, rgba(223, 254, 254, 0) 39.78%),
      linear-gradient(46.45deg, #8C9BFF 10.2%, rgba(140, 155, 255, 0) 42.5%),
      linear-gradient(211.18deg, #E495FF 10.96%, #EBABFF 51.39%, #BFA1FF 90.16%)
    ` },
    angle: 225,
  },
  {
    id: "F",
    colorStyles: { background: `
      linear-gradient(177.54deg, #FFF495 -9.26%, rgba(237, 244, 148, 0) 63.56%),
      linear-gradient(102.37deg, rgba(255, 220, 201, 0) 47.48%, #FFF9BF 102.37%),
      linear-gradient(35.68deg, #B7FF8A -20.62%, rgba(205, 255, 99, 0) 41.18%),
      linear-gradient(211.18deg, #A8EFFF 10.96%, #4AFFF4 51.39%, #3BE2ED 90.16%)
    ` },
    angle: 0,
  },
  {
    id: "P",
    colorStyles: { 
      background: `
        linear-gradient(196.76deg, #FF6B6B 10.17%, rgba(255, 143, 143, 0) 60.01%),
        linear-gradient(140.59deg, rgba(248, 252, 217, 0) 34.77%, #F8FCD9 86.35%),
        linear-gradient(43.74deg, #FFA794 7.47%, rgba(255, 148, 128, 0.26) 30.39%),
        linear-gradient(211.18deg, #FF6866 10.96%, #FF908B 51.39%, #FF9680 90.16%)`
    },
    angle: 270,
  },
  {
    id: "M",
    colorStyles: { background: `
      linear-gradient(177.54deg, #FDFF95 -9.26%, rgba(173, 244, 148, 0) 63.56%),
      linear-gradient(102.37deg, rgba(255, 220, 201, 0) 47.48%, #FFBFBF 102.37%),
      linear-gradient(35.68deg, #B7FF8A -20.62%, rgba(205, 255, 99, 0) 41.18%),
      linear-gradient(211.18deg, #FFCDA8 10.96%, #FFD74A 51.39%, #FFF4B8 90.16%)` 
    },
    angle: 315,
  },
]

export default function ReferralCircle({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    const drawCircles = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 7; i > 0; i--) {
        const radius = (Math.min(width, height) / 3) * (i / 6)
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    drawCircles()

    let animationFrameId: number
    let angle = 0

    const animate = () => {
      angle += 0.001
      drawCircles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative w-[400px] h-[360px] ${className}`}>
      <canvas ref={canvasRef} width={280} height={248} className="absolute inset-0 w-full h-full" />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] rounded-full bg-blue-400 opacity-40 blur-3xl"></div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[83.50px] h-[83.50px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center z-10"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0.5)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
            "0 0 0 0 rgba(59, 130, 246, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-[83.50px] h-[83.50px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Icon name="CircleIcon" size={83.50} />
        </div>
      </motion.div>

      {letters.map((letter, index) => {
        const angle = (index * 45 * Math.PI) / 180
        const orbitRadius = 150
        const x = Math.cos(angle) * orbitRadius
        const y = Math.sin(angle) * orbitRadius

        return (
          <motion.div
            key={letter.id}
            className="absolute top-1/2 left-1/2 w-[52px] h-[52px] rounded-full flex items-center justify-center text-black text-[30px] cursor-pointer"
            style={{
              ...letter.colorStyles,
              x: x,
              y: y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}
          >
            {letter.id}
          </motion.div>
        )
      })}
    </div>
  )
}
