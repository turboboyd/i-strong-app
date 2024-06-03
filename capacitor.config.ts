import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'IStrong',
  webDir: 'out',
  server: {
    // url: 'http://192.168.178.54:3000/', // Denis
    url: 'https://i-strong-app.vercel.app/',
    // url: 'https://front.istrongapp.com', //продакш

    cleartext: true,
  },
}

export default config
