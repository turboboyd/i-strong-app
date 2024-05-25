import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ReactNode } from 'react'

import { ChallengeType } from '@/interfaces/challenge'

interface IState {
  errorText: null | string
  successfulText: null | string
  entryType: 'signIn' | 'signUp'
  isModalActive: boolean
  modalContent: null | ReactNode
  activeChallengeTypeButton: ChallengeType
}

interface IStore extends IState {
  handleChangeCommonStore: (value: Partial<IState>) => void
}

// common store
export const useCommonStore = create<IStore>()(
  devtools(
    (set) => ({
      errorText: null,
      successfulText: null,
      entryType: 'signIn',
      isModalActive: false,
      modalContent: null,
      activeChallengeTypeButton: 'new',
      handleChangeCommonStore: (value) => set((state) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
)

interface UserCodeState {
  userData: IState | null
  setUserData: (data: IState) => void
  clearUserData: () => void
}

export const useUserCodeStore = create<UserCodeState>((set) => ({
  userData: null,
  setUserData: (data: IState) => set({ userData: data }),
  clearUserData: () => set({ userData: null }),
}))
