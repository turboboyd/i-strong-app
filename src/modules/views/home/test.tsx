import { useEffect } from 'react'
import { Keyboard } from '@capacitor/keyboard'

const useHideKeyboardOnClickOutside = () => {
  useEffect(() => {
    const hideKeyboard = async () => {
      await Keyboard.hide()
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('input')) {
        hideKeyboard()
      }
    }

    // Disable automatic scrolling
    const disableScroll = async () => {
      await Keyboard.setScroll({ isDisabled: true })
    }

    disableScroll()

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
}

const MyComponent = () => {
  useHideKeyboardOnClickOutside()

  return (
    <div>
      <input type='text' />
    </div>
  )
}

export default MyComponent
