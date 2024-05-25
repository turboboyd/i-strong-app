import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'IStrong',
  webDir: 'out',
  server: {
    // url: 'http://192.168.88.41:3000',
    // url: 'http://192.168.178.54:3000/', // Denis
    url: 'https://i-strong-app.vercel.app/',
    cleartext: true,
  },

}

export default config
