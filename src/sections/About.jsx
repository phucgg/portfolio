import { motion } from "framer-motion"

export default function About({ language = "vi" }) {
  const content = {
    vi: {
      title: "VỀ TÔI",
      subtitle: "KỸ SƯ PHẦN MỀM TƯƠNG LAI",
      desc1:
        "Tôi là sinh viên Kỹ thuật Phần mềm tại Đại học FPT, định hướng trở thành Software Engineer chuyên nghiệp.",
      desc2:
        "Tôi tập trung phát triển tư duy lập trình, clean code và thiết kế hệ thống. Website này được xây dựng nhằm giới thiệu bản thân, chia sẻ dự án cá nhân và ghi lại hành trình phát triển trong lĩnh vực công nghệ.",
    },
    en: {
      title: "ABOUT ME",
      subtitle: "SOFTWARE ENGINEER IN PROGRESS",
      desc1:
        "I am a Software Engineering student at FPT University, aiming to become a professional Software Engineer.",
      desc2:
        "I focus on programming mindset, clean code, and system design. This website introduces myself, shares personal projects and documents my technology journey.",
    },
  }

  const t = content[language] || content.vi

  return (
    <section
      id="about"
      className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden md:pl-40"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2
            className="text-5xl md:text-7xl font-extrabold italic text-white
            drop-shadow-[0_0_35px_rgba(0,255,200,0.8)]"
          >
            {t.title}
          </h2>

          <p className="mt-4 text-gray-300 italic font-semibold tracking-wider">
            {t.subtitle}
          </p>

          <div
            className="mt-10 p-6 rounded-3xl border border-cyan-400/40
            bg-black/40 backdrop-blur-md text-gray-200 leading-relaxed"
          >
            <p>{t.desc1}</p>
            <p className="mt-4">{t.desc2}</p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <img
            src="/about-me.jpeg"
            alt="about"
            className="w-full max-w-md rounded-[60px_20px_60px_20px] shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}