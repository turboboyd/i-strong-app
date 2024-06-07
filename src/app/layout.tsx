'use client'
import type { Metadata, Viewport } from 'next'

import { FC, ReactNode, useEffect } from 'react'

import '@/styles/globals.scss'
import 'swiper/css'

// metadata
export const viewport: Viewport = initialViewport
// export const metadata: Metadata = initialMetadata

import { LocalNotifications } from '@capacitor/local-notifications'
import { QueryClientProvider } from '@tanstack/react-query'

import { mainFont } from '@/fonts'
import { initialMetadata, initialViewport } from '@/metadata'
import { RootLayoutComponent } from '@/modules/layouts'
import { useTanStackClient } from '@/packages/tanstack-client'
import { useCommonStore } from '@/shared/stores'
//interface
interface IRootLayout {
  entry: ReactNode
  home: ReactNode
  children: ReactNode
}

//component
const RootLayout: FC<Readonly<IRootLayout>> = ({ home, entry }) => {
  const handleChangeCommonStore = useCommonStore((state) => state.handleChangeCommonStore)
  const errorText = useCommonStore((state) => state.errorText)
  const successfulText = useCommonStore((state) => state.successfulText)

  useEffect(() => {
    const handleClick = () => {
      if (errorText) {
        handleChangeCommonStore({ errorText: null })
      } else if (successfulText) {
        handleChangeCommonStore({ successfulText: null })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [errorText, successfulText])

  const { queryClient } = useTanStackClient()
  const scheduleNotification = async () => {
    await LocalNotifications.requestPermissions()

    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Тестовое уведомление',
          body: 'Это тестовое уведомление, которое приходит каждую минуту.',
          id: 1,
          schedule: { every: 'minute' },
          actionTypeId: '',
          extra: null,
        },
      ],
    })
  }

  scheduleNotification()
  const scheduleNotification2 = async () => {
    await LocalNotifications.requestPermissions()
  
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Тестовое уведомление',
          body: 'Это тестовое уведомление, которое приходит каждую минуту.',
          id: 1,
          schedule: { every: 'minute' },
          actionTypeId: '',
          extra: null,
        },
        {
          title: 'Пора спать',
          body: 'Уже 00:10, пора идти спать.',
          id: 2,
          schedule: { at: new Date(new Date().setHours(0, 10)) },
          actionTypeId: '',
          extra: null,
        },
      ],
    })
  }
  
  scheduleNotification2()
  //return
  return (
    <html lang='uk' className={mainFont.className}>
      <QueryClientProvider client={queryClient}>
        <RootLayoutComponent entry={entry} home={home} />
      </QueryClientProvider>
    </html>
  )
}
export default RootLayout
