import { motion } from "framer-motion"

export default function Projects({ language = "vi" }) {
  const content = {
    vi: {
      title: "PROJECTS",
      subtitle: "DỰ ÁN ĐÃ THAM GIA",
      p1Title: "PHUCGG.ID.VN",
      p1Desc1: "Website portfolio cá nhân do tôi xây dựng và phát triển.",
      p1Desc2:
        "Dự án sử dụng nhiều công cụ AI hỗ trợ, trong đó ChatGPT đóng vai trò chính trong việc định hướng và tối ưu nội dung.",
      p2Title: "ARTIFACT DEFENDERS",
      p2Desc1:
        "Dự án game nhỏ thực hiện theo nhóm trong kỳ thực tập tại trường.",
      githubBtn: "Xem trên GitHub",
    },
    en: {
      title: "PROJECTS",
      subtitle: "PROJECTS I PARTICIPATED IN",
      p1Title: "PHUCGG.ID.VN",
      p1Desc1:
        "Personal portfolio website designed and developed by me.",
      p1Desc2:
        "The project uses various AI tools, especially ChatGPT for structure guidance and content optimization.",
      p2Title: "ARTIFACT DEFENDERS",
      p2Desc1:
        "A small game project developed in a team during internship.",
      githubBtn: "View on GitHub",
    },
  }

  const t = content[language] || content.vi

  return (
    <section
      id="projects"
      className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden md:pl-40"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center px-6">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold italic text-white drop-shadow-[0_0_35px_rgba(0,255,200,0.8)]">
            {t.title}
          </h2>

          <p className="mt-4 text-gray-300 italic font-semibold tracking-wider">
            {t.subtitle}
          </p>

          {/* CARD GRID */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-3xl border border-cyan-400/40 bg-black/40 backdrop-blur-md text-gray-200"
            >
              <h3 className="text-lg font-bold italic">
                {t.p1Title}
              </h3>
              <p className="mt-4 text-sm">{t.p1Desc1}</p>
              <p className="mt-3 text-sm">{t.p1Desc2}</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-3xl border border-cyan-400/40 bg-black/40 backdrop-blur-md text-gray-200"
            >
              <h3 className="text-lg font-bold italic">
                {t.p2Title}
              </h3>

              <p className="mt-4 text-sm">{t.p2Desc1}</p>

              <a
                href="https://github.com/hungnqse182498/Artifact-Defenders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-lg 
                bg-cyan-500/20 border border-cyan-400 
                hover:bg-cyan-500/40 
                transition-all duration-300 
                text-sm font-medium"
              >
                {t.githubBtn}
              </a>
            </motion.div>

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
            src="/projects.jpeg"
            alt="projects"
            className="w-full max-w-md rounded-[80px_20px_80px_20px] shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}
