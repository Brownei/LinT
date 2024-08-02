import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedConversationId, setSelectedConversationId] = useState('')

  const value = {
    selectedConversationId,
    setSelectedConversationId
  }
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};


export function useGlobalContext() {
  return useContext(GlobalContext)
}
