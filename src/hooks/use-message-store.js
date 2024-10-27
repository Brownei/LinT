import { useLocation } from 'react-router-dom';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useAllMessages } from './use-messages';

// Initial Zustand store
export const useMessageStore = create(
  persist(
    (set, get) => ({
      messages: [],
      messagesArray: () => Object.values(get().messages),
      loading: false,

      // Action to fetch conversations from API
      fetchConversations: async () => {
        set({ loading: true });
        try {
          const location = useLocation()
          const locationSplit = location.search.split('=')
          const id = locationSplit[3] ? locationSplit[3] : ''
          const { data, isLoading } = useAllMessages(id);
          set({ messages: data, loading: isLoading });
        } catch (error) {
          console.error('Failed to fetch conversations', error);
          set({ loading: false });
        }
      },

      // Action to add a conversation
      addConversation: (message) => {
        set((state) => ({
          messagesArray: [message, ...state.messagesArray],
        }));
      },

      // Action to update a conversation
      updateConversation: (message) => {
        set((state) => ({
          messagesArray: state.messagesArray.map((ma) =>
            ma.id === message.id ? message : ma
          ),
        }));
      },

    }),
    {
      name: "messages-storage"
    }
  )
);

