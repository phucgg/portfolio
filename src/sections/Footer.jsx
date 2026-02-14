import { motion } from "framer-motion"
import { Phone, Mail, Facebook } from "lucide-react"

export default function Footer({ language = "vi" }) {
  const content = {
    vi: {
      title: "Liên Hệ",
      built: "Được xây dựng với React & Tailwind",
      phone: "Điện thoại",
      email: "Email",
      facebook: "Facebook",
    },
    en: {
      title: "Contact",
      built: "Built with React & Tailwind",
      phone: "Phone",
      email: "Email",
      facebook: "Facebook",
    },
  }

  const t = content[language] || content.vi

  return (
    <section
      id="footer"
      className="
        snap-start
        bg-gray-100 dark:bg-black
        text-gray-800 dark:text-gray-300
        transition-colors duration-300
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-20 text-center"
      >
        <h3 className="text-3xl font-bold mb-12 text-black dark:text-white">
          {t.title}
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">

          {/* PHONE */}
          <div className="flex items-center gap-4">
            <Phone
              className="text-cyan-500 drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
              size={20}
            />
            <span>0988 127 929</span>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <Mail
              className="text-cyan-500 drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
              size={20}
            />
            <span>phucggreal@gmail.com</span>
          </div>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/PhucGG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-cyan-500 transition"
          >
            <Facebook
              className="text-cyan-500 drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
              size={20}
            />
            facebook.com/PhucGG
          </a>
        </div>

        <div className="mt-16 h-px bg-gray-300 dark:bg-gray-700 transition-colors" />

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-500">
          © 2026 PhucGG • {t.built}
        </p>
      </motion.div>
    </section>
  )
}
