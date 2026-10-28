import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// Dev-only helper: POST /__save-image?name=<file>.jpg with an image body
// writes it to public/img/. Used once to pull the licensed photos locally.
// Safe to delete after the photos are in place.
function saveImageDev() {
  return {
    name: 'save-image-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__save-image', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; return res.end() }
        const name = new URL(req.url, 'http://x').searchParams.get('name') || ''
        if (!/^[a-z0-9-]+\.jpg$/.test(name)) { res.statusCode = 400; return res.end('bad name') }
        const dir = path.resolve('public/img'); fs.mkdirSync(dir, { recursive: true })
        const chunks = []
        req.on('data', (c) => chunks.push(c))
        req.on('end', () => {
          const buf = Buffer.concat(chunks)
          fs.writeFileSync(path.join(dir, name), buf)
          res.setHeader('content-type', 'text/plain'); res.end(String(buf.length))
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), saveImageDev()],
})
