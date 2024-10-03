import { createContext, useContext, useMemo, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedConversationId, setSelectedConversationId] = useState('')
  const [posts, setPosts] = useState([])
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])

  const value = useMemo(() => ({
    selectedConversationId,
    setSelectedConversationId,
    setMessages,
    messages,
    setConversations,
    conversations,
    posts,
    setPosts
  }))

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};


export function useGlobalContext() {
  return useContext(GlobalContext)
}
