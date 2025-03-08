import { create } from 'zustand'

interface ICommonStore {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const useCommonStore = create<ICommonStore>((set) => ({
  activeTab: 'chat',
  setActiveTab: (tab) => set({ activeTab: tab }),
}))