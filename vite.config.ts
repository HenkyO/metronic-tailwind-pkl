import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174, // Specify the new port here
    // Optional: Additional server configurations
    // host: '0.0.0.0', // To allow access from network devices
    // open: true, // To automatically open the browser
  },
})
