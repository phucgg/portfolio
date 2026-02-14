import { useEffect, useState } from "react"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import SideNav from "./components/SideNav"
import Footer from "./sections/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("hero")
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")
  const [language, setLanguage] = useState("vi")

  useEffect(() => {
    const html = document.documentElement

    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const container = document.getElementById("scroll-container")
    const sections = container.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { root: container, threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="scroll-container"
      className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative"
    >
      {/* TOP RIGHT */}
      <div className="fixed top-6 right-8 flex gap-4 z-50">
        <button
          onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
          className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-slate-700 text-sm"
        >
          {language === "vi" ? "EN" : "VI"}
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-slate-700 text-sm"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {activeSection !== "hero" && activeSection !== "footer" && (
        <SideNav activeSection={activeSection} language={language} />
      )}

      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />

      <Footer language={language} />
    </div>
  )
}

export default App