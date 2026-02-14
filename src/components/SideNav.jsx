export default function SideNav({ activeSection, language = "vi" }) {
  const content = {
    vi: {
      hero: "Trang Chủ",
      about: "Về Tôi",
      projects: "Dự Án",
    },
    en: {
      hero: "Home",
      about: "About",
      projects: "Projects",
    },
  }

  const t = content[language] || content.vi

  const sections = [
    { id: "hero", label: t.hero },
    { id: "about", label: t.about },
    { id: "projects", label: t.projects },
  ]

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 w-40 pl-8 flex-col gap-6 z-50 hidden md:flex">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`transition-all duration-300 text-sm ${
            activeSection === section.id
              ? "text-cyan-400 scale-110"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {section.label}
        </a>
      ))}
    </div>
  )
}