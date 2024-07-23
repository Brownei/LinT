import { createContext, useContext, useState } from 'react';
import { useCurrentUser } from '../hooks/use-current-user';
import { useAllConversations } from '../hooks/use-conversations';
import { useAllInterests } from '../hooks/use-all-interests';
import { useAllPosts } from '../hooks/use-all-posts';
import { ClipLoader } from 'react-spinners';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedConversationId, setSelectedConversationId] = useState('')
  const { data: user, isLoading: currentUserLoading, error: currentUserError } = useCurrentUser()
  const { data: interests, isLoading: interestsLoading, error } = useAllInterests()
  const { data: conversations, isLoading: isConversationsLoading, error: conversationsError } = useAllConversations()
  const { data: posts, isLoading: isPostsLoading, error: postError } = useAllPosts()

  const value = {
    user,
    currentUserLoading,
    currentUserError,
    interests,
    interestsLoading,
    error,
    conversations,
    isConversationsLoading,
    conversationsError,
    posts,
    isPostsLoading,
    postError,
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
