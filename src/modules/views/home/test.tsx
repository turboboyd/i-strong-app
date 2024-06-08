import { Keyboard } from '@capacitor/keyboard'

import { useEffect } from 'react'

const useKeyboard = () => {
  useEffect(() => {
    const handleKeyboardWillShow = async (info: any) => {
      console.log('Keyboard will show', info)
      await Keyboard.setScroll({ isDisabled: true })
    }

    const handleKeyboardDidShow = (info: any) => {
      console.log('Keyboard did show', info)
    }

    const handleKeyboardWillHide = async () => {
      console.log('Keyboard will hide')
      await Keyboard.setScroll({ isDisabled: false })
    }

    const handleKeyboardDidHide = () => {
      console.log('Keyboard did hide')
    }

    const handleScroll = () => {
      Keyboard.hide()
    }

    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
        Keyboard.hide()
      }
    }

    const handleFocus = async () => {
      await Keyboard.setScroll({ isDisabled: true })
      await Keyboard.setAccessoryBarVisible({ isVisible: true })
    }

    const handleBlur = async () => {
      await Keyboard.setScroll({ isDisabled: false })
      await Keyboard.setAccessoryBarVisible({ isVisible: false })
    }

    // Подписка на события показа и скрытия клавиатуры
    Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow)
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow)
    Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide)
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide)

    // Подписка на события прокрутки и клика вне инпута
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('focusin', handleFocus)
    document.addEventListener('focusout', handleBlur)

    return () => {
      // Отписка от событий при размонтировании компонента
      Keyboard.removeAllListeners()
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('focusin', handleFocus)
      document.removeEventListener('focusout', handleBlur)
    }
  }, [])
}

const MyComponent: React.FC = () => {
  useKeyboard()
  return (
    <div>
      <h1>Контроль прокрутки клавиатуры</h1>
      <input type='text' placeholder='Введите текст' />
      <input type='password' placeholder='Введите пароль' />
      <textarea placeholder='Введите сообщение'></textarea>
    </div>
  )
}

export default MyComponent
