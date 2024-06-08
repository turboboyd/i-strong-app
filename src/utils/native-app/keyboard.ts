// src/utils/native/keyboard.ts
import { Keyboard } from '@capacitor/keyboard'

export const setupKeyboardListeners = () => {
  // Add listener for keyboard show event
  Keyboard.addListener('keyboardWillShow', () => {
    console.log('Keyboard is about to be shown')
    // Add your custom logic here
  })

  // Add listener for keyboard hide event
  Keyboard.addListener('keyboardWillHide', () => {
    console.log('Keyboard is about to be hidden')
    // Add your custom logic here
  })
}

export const hideKeyboard = () => {
  Keyboard.hide()
}

export const showKeyboard = () => {
  Keyboard.show()
}

// export const setKeyboardStyle = (style: 'dark' | 'light') => {
//   Keyboard.setStyle({ style });
// };

// export const setKeyboardResizeMode = (mode: 'native' | 'ionic' | 'body' | 'none') => {
//   Keyboard.setResizeMode({ mode });
// };
