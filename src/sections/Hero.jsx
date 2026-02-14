import { motion } from "framer-motion"
import bg from "../assets/bg.jpeg"
import avatar from "../assets/avatar.jpg"
import viteLogo from "../assets/vite.png"
import reactLogo from "../assets/react.png"
import arrow from "../assets/arrow.png"

export default function Hero({ language }) {
  const content = {
    vi: {
      title: "PHUCGG.ID.VN",
      subtitle: "BIẾN Ý TƯỞNG THÀNH HIỆN THỰC",
      scroll: "Kéo xuống để khám phá",
      prepared: "Chuẩn bị bởi",
    },
    en: {
      title: "PHUCGG.ID.VN",
      subtitle: "TURNING IDEAS INTO REALITY",
      scroll: "Scroll down to explore",
      prepared: "Prepared by",
    },
  }

  const t = content[language] || content.vi

  return (
    <section
      id="hero"
      className="h-screen snap-start relative overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Top left logos */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
        <img src={viteLogo} className="w-7" alt="vite" />
        <span className="text-white text-xl font-bold">×</span>
        <img src={reactLogo} className="w-8" alt="react" />
      </div>

      {/* Main text */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-5xl md:text-8xl lg:text-9xl
            font-extrabold italic
            tracking-wide
            text-white
            drop-shadow-[0_0_35px_rgba(0,255,200,0.9)]
          "
          style={{
            textShadow:
              "0 0 25px rgba(0,255,200,0.9), 0 0 50px rgba(0,255,200,0.6)",
          }}
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-2xl italic font-semibold text-white/90"
        >
          {t.subtitle}
        </motion.p>
      </div>

      {/* Avatar bottom left */}
      <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
        <img
          src={avatar}
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover border-2 border-white/40"
        />
        <div className="text-white text-sm">
          <p className="opacity-60">{t.prepared}</p>
          <p className="font-semibold">PhucGG</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
        onClick={() =>
          document.getElementById("about").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <p className="text-sm text-white/70 tracking-wide">
          {t.scroll}
        </p>

        <motion.img
          src={arrow}
          alt="scroll"
          className="w-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}