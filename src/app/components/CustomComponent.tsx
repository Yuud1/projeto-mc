"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Check } from "lucide-react"

export default function Component() {
  const [currentStep, setCurrentStep] = useState<"initial" | "confirmation" | "final">("initial")
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [clickCount, setClickCount] = useState(0)

  const generateRandomPosition = () => {
    const maxX = window.innerWidth - 200
    const maxY = window.innerHeight - 100
    const minX = 50
    const minY = 100

    return {
      x: Math.random() * (maxX - minX) + minX,
      y: Math.random() * (maxY - minY) + minY,
    }
  }

  const handleInitialNo = () => {
    setClickCount((prev) => prev + 1)
    const newPosition = generateRandomPosition()
    setNoButtonPosition(newPosition)
  }

  const handleInitialYes = () => {
    setCurrentStep("confirmation")
    setClickCount(0) // Reset click count
  }

  const handleConfirmationNo = () => {
    setClickCount((prev) => prev + 1)
    const newPosition = generateRandomPosition()
    setNoButtonPosition(newPosition)
  }

  const handleConfirmationYes = () => {
    setCurrentStep("final")
  }

  const initialMessages = [
    "Tem certeza Clarinha??? 🤔",
    "Punheta hoje naaaaaooo? 😅",
    "Não vai nem tentar? 🥺",
    "Que tal reconsiderar? 😊",
    "Só uma rapidinha!!!",
    "Ok, você ganhou!",
    "Mentira, bora logo 😂",
    "Pau na buceta",
    "Vou te dar só mais ⬇",
  ]

  const confirmationMessages = [
    "Não quer mesmo? 🤨",
    "Tem certeza? 😋",
    "Mudou de ideia? 🤷‍♀️",
    "Que tal só uma vez? 😏",
    "Última chance! 🙏",
    "Tá bom, tá bom! 😅",
    "Vou te dar só mais ⬇",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* PERGUNTA INICIAL */}
        {currentStep === "initial" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <motion.div
              className="space-y-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Sequissu oge?
              </h1>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-col space-y-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleInitialYes}
                  className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-0 shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  <motion.div className="flex items-center justify-center space-x-2" whileHover={{ x: 5 }}>
                    <span>SIM</span>
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                className={clickCount > 0 ? "fixed z-50" : "relative"}
                style={
                  clickCount > 0
                    ? {
                        left: noButtonPosition.x,
                        top: noButtonPosition.y,
                      }
                    : {}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  clickCount > 0
                    ? {
                        x: [0, -10, 10, -5, 5, 0],
                        y: [0, -5, 5, -2, 2, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={handleInitialNo}
                  className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 border-0 shadow-lg shadow-red-500/25 transition-all duration-300"
                >
                  <motion.div className="flex items-center justify-center space-x-2" whileHover={{ x: 5 }}>
                    <span>NÃO</span>
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {clickCount > 0 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-yellow-400 text-lg font-semibold"
              >
                {initialMessages[Math.min(clickCount - 1, initialMessages.length - 1)]}
              </motion.p>
            )}

            <motion.p
              className="text-slate-300 text-lg opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {clickCount === 0 ? "Escolha sua resposta" : `${clickCount} Tentativas`}
            </motion.p>
          </motion.div>
        )}

        {/* CONFIRMAÇÃO */}
        {currentStep === "confirmation" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <motion.div
              className="space-y-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Vai rolar cuzin?
              </h1>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-col space-y-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleConfirmationYes}
                  className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-0 shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  <motion.div className="flex items-center justify-center space-x-2" whileHover={{ x: 5 }}>
                    <span>SIM</span>
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                className={clickCount > 0 ? "fixed z-50" : "relative"}
                style={
                  clickCount > 0
                    ? {
                        left: noButtonPosition.x,
                        top: noButtonPosition.y,
                      }
                    : {}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  clickCount > 0
                    ? {
                        x: [0, -10, 10, -5, 5, 0],
                        y: [0, -5, 5, -2, 2, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={handleConfirmationNo}
                  className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 border-0 shadow-lg shadow-red-500/25 transition-all duration-300"
                >
                  <motion.div className="flex items-center justify-center space-x-2" whileHover={{ x: 5 }}>
                    <span>NÃO</span>
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {clickCount > 0 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-yellow-400 text-lg font-semibold"
              >
                {confirmationMessages[Math.min(clickCount - 1, confirmationMessages.length - 1)]}
              </motion.p>
            )}

            <motion.p
              className="text-slate-300 text-lg opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {clickCount === 0 ? "Confirme sua decisão" : `${clickCount} Tentativas`}
            </motion.p>
          </motion.div>
        )}

        {/* MENSAGEM FINAL */}
        {currentStep === "final" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 3, ease: "linear" },
              }}
            >
              <Check className="w-16 h-16 text-white" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              OK!
            </motion.h1>

            <motion.p
              className="text-2xl text-white font-semibold"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Todos felizes ebaaa! 🎉
            </motion.p>

            <motion.p
              className="text-slate-300 text-lg"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Bom apetite! Aproveite sua refeição! 😋
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
