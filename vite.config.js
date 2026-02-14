import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/",   // 🔥 PHẢI là "/"
  plugins: [react()],
})
