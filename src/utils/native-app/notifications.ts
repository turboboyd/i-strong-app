import { LocalNotifications } from '@capacitor/local-notifications'

import { IconArrow } from '@/shared/icons'
import { ImageCapybaraDeletion } from '@/shared/images'
const BASE_URL = `https://i-strong-app.vercel.app`
interface NotificationConfig {
  id: number
  title: string
  body: string
  url: string
  schedule: { at?: Date; every?: 'minute'; count?: number; repeats?: boolean }
  attachments: { id: string; url: string }[]
}

const notifications: NotificationConfig[] = [
  {
    id: 1,
    title: 'Нові челенджі',
    body: 'Прийшли нові челенджі. Перейдіть за посиланням для перегляду.',
    url: `${BASE_URL}/challenges?path=new`,
    schedule: { at: new Date(new Date().setHours(10, 0, 0)) }, // В 10:00
    attachments: [{ id: 'challenges-image', url: 'path_to_your_image/challenges_image.png' }],
  },
  {
    id: 2,
    title: 'Запис в щоденник',
    body: 'Зробіть запис в щоденник. Перейдіть за посиланням.',
    url: `${BASE_URL}/diary`,
    schedule: { at: new Date(new Date().setHours(12, 0, 0)) }, // В 12:00
    attachments: [{ id: 'diary-image', url: 'path_to_your_image/diary_image.png' }],
  },
  {
    id: 3,
    title: 'Тест',
    body: 'Як ти себе почуваеш?',
    url: `${BASE_URL}/diary`,
    schedule: { every: 'minute', count: 3, repeats: true }, // Каждые 3 минуты
    attachments: [{ id: 'test-image', url: '/images/icon-arrow.svg' }], // Используйте URL вашего SVG-файла
  },
  {
    id: 4,
    title: 'IconArrow',
    body: 'Как вы себя чувствуете сегодня?',
    url: `${BASE_URL}/diary`,
    schedule: { every: 'minute', count: 3, repeats: true }, // Каждые 3 минуты
    attachments: [{ id: 'test2-image', url: `${IconArrow}` }],
  },
  {
    id: 5,
    title: 'ImageCapybaraDeletion',
    body: 'Как вы себя чувствуете сегодня?',
    url: `${BASE_URL}/diary`,
    schedule: { every: 'minute', count: 2, repeats: true }, // Каждые 3 минуты
    attachments: [{ id: 'test2-image', url: `${ImageCapybaraDeletion}` }],
  },
  {
    id: 6,
    title: 'arrow.svg',
    body: 'Як ти себе почуваеш?',
    url: `${BASE_URL}/diary`,
    schedule: { every: 'minute', count: 3, repeats: true }, // Каждые 3 минуты
    attachments: [{ id: 'test-image', url: '/src/shared/icons/arrow.svg' }], // Используйте URL вашего SVG-файла
  },
  {
    id: 6,
    title: 'arrow.svg',
    body: 'Як ти себе почуваеш?',
    url: `${BASE_URL}/diary`,
    schedule: { every: 'minute', count: 3, repeats: true }, // Каждые 3 минуты
    attachments: [{ id: 'test-image', url: '/src/shared/images/capybara-avatar.png' }], // Используйте URL вашего SVG-файла
  },
]

export const requestPermissions = async () => {
  const permission = await LocalNotifications.requestPermissions()
  if (permission.display !== 'granted') {
    console.error('Permission not granted for notifications')
    return false
  }
  return true
}

export const scheduleNotifications = async () => {
  const permissionsGranted = await requestPermissions()
  if (!permissionsGranted) return

  try {
    await LocalNotifications.schedule({
      notifications: notifications.map((notification) => ({
        title: notification.title,
        body: notification.body,
        id: notification.id,
        schedule: notification.schedule,
        actionTypeId: '',
        extra: { url: notification.url },
        attachments: notification.attachments,
      })),
    })
  } catch (error) {
    console.error('Error scheduling notifications', error)
  }
}
