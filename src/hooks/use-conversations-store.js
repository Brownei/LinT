import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  conversationIds: []
}

export const useConversationStore = create(
  persist(
    (set) => ({
      ...initialState,
      setConversationIds: (newData) => set((state) => ({ user: { ...state.conversationIds, ...newData } })),
      clear: () => set(initialState)
    }),
    {
      name: "conversation-storage",
    }
  )
)
