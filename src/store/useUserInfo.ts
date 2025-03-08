import { create } from 'zustand'
import { IUserInfo } from '../tyes/userInfo'

interface UserState {
  user: IUserInfo | null
  setUser: (user: IUserInfo) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

