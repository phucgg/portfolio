import { motion } from "framer-motion"
import bg from "../assets/bg.jpeg"
import projectImg from "../assets/projects.jpeg"

export default function Projects({ language = "vi" }) {

  const content = {
    vi: {
      title: "PROJECTS",
      subtitle: "DỰ ÁN ĐÃ THAM GIA",
    },
    en: {
      title: "PROJECTS",
      subtitle: "PROJECTS I PARTICIPATED IN",
    },
  }

  const t = content[language] || content.vi

  return (
    <section id="projects" className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden md:pl-40">
      
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center px-6">
        
        <motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold italic text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-300 italic">{t.subtitle}</p>
        </motion.div>

        <motion.div className="flex justify-center">
          <img
            src={projectImg}
            alt="projects"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}