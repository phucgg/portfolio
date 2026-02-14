import { motion } from "framer-motion"
import bg from "../assets/bg.jpeg"
import aboutImg from "../assets/about-me.jpeg"

export default function About({ language = "vi" }) {

  const content = {
    vi: {
      title: "VỀ TÔI",
      subtitle: "KỸ SƯ PHẦN MỀM TƯƠNG LAI",
      desc1: "Tôi là sinh viên Kỹ thuật Phần mềm tại Đại học FPT.",
      desc2: "Website này dùng để giới thiệu bản thân và chia sẻ dự án.",
    },
    en: {
      title: "ABOUT ME",
      subtitle: "SOFTWARE ENGINEER IN PROGRESS",
      desc1: "I am a Software Engineering student at FPT University.",
      desc2: "This website introduces myself and shares projects.",
    },
  }

  const t = content[language] || content.vi

  return (
    <section id="about" className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden md:pl-40">
      
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center px-6">
        
        <motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold italic text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-300 italic">{t.subtitle}</p>

          <div className="mt-10 p-6 rounded-3xl bg-black/40 text-gray-200">
            <p>{t.desc1}</p>
            <p className="mt-4">{t.desc2}</p>
          </div>
        </motion.div>

        <motion.div className="flex justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}