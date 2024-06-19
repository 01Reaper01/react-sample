import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('development', process.cwd(), '')

export default defineConfig({
	plugins: [react()],
	server: {
		host: env.APP_HOST,
		port: env.APP_PORT,
	},
})
