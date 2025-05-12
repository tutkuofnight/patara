import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from "@/components/header"
import ReferralCircle from '@/components/referral-circle'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bgLetters = [
    { letter: 'P', position: { top: '15%', right: '75%' }, opacity: 0.1 },
    { letter: 'S', position: { top: '45%', right: '82%' }, opacity: 0.1 },
    { letter: 'F', position: { top: '64%', right: '70%' }, opacity: 0.1 },
    { letter: 'G', position: { top: '80%', right: '85%' }, opacity: 0.1 },
    { letter: 'C', position: { top: '40%', right: '30%' }, opacity: 0.1 },
    { letter: 'W', position: { top: '50%', right: '10%' }, opacity: 0.1 },
    { letter: 'M', position: { top: '20%', right: '15%' }, opacity: 0.1 },
    { letter: 'A', position: { top: '85%', right: '15%' }, opacity: 0.1 },
  ]

  return (
    <main className="w-full p-layout md:max-w-[1440px] md:mx-auto flex flex-col gap-5 md:py-layout">
      <Head>
        <title>Patara - Mülakat</title>
      </Head>

      {bgLetters.map((item, index) => (
        <motion.div
          key={`bg-${index}`}
          className="absolute text-[40px] rounded-full w-[60px] h-[60px] text-white grid place-items-center font-semibold blur-xs opacity-50 select-none"
          style={{
            top: item.position.top,
            right: item.position.right,
            background: `linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%),
              linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%),
              linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%),
              linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%),
              linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%)`
          }}
        >
          {item.letter}
        </motion.div>
      ))}

      <Header />

      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="relative bg-primary border-1 border-bg-secondary rounded-2xl  max-w-[500px] py-10 px-12 w-full mx-auto">
          <div className="relative h-[400px] w-[300px] mx-auto mb-8">
            <motion.div 
              initial={{ scale: 0.90, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <ReferralCircle />
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-xl md:text-2xl font-medium mb-4">
              Refer friends and earn with Patara!
            </h1>
            <p className="text-secondary-foreground mb-8">
              Invite your friends to Patara and earn a share of their on-chain rewards forever!
            </p>
            <Button size={"xl"} className='py-4 px-5' onClick={() => router.push("/dashboard")}>
              Connect/Sign in
            </Button>
          </motion.div>
        </div>
      </main>
    </main>
  )
}
