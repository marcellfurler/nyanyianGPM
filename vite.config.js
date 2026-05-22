import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import react from '@vitejs/react-refresh'


export default defineConfig({
  plugins: [react(), svgr()],
  base: '/nyanyianGPM/',
})
