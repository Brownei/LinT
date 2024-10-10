import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  conversations: []
}

export const useConversationStore = create(
  persist(
    (set) => ({
      ...initialState,
      setConversations: (newData) => set((state) => ({ conversations: [...state.conversations, ...newData] })),
      clear: () => set(initialState)
    }),
    {
      name: "conversation-storage",
    }
  )
)
