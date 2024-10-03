import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext';
import { useAuthStore } from '../hooks/use-auth-store';
import { useAllConversations } from '../hooks/use-conversations';
import { initializeSocket, useSocketListener } from '../utils/socket';

const Provider = () => {
  const [isSocketInitialized, setIsSocketInitialized] = useState(false);
  const { setMessages, setConversations } = useGlobalContext()
  const { data: conversations, isLoading: isConversationsLoading, error: conversationsError } = useAllConversations()
  const conversationIds = conversations?.map((conversation) => conversation.id)
  const user = useAuthStore((state) => state?.user)

  function handleMessages(id) {
    if (location.search !== `?=chats?=conversation=${id}`) {
      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === id ? { ...conversation, read: false } : conversation
        )
      )
    } else {
      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === id ? { ...conversation, read: true } : conversation
        )
      )
    }
  }

  useEffect(() => {
    if (!isConversationsLoading && !conversationsError && !isSocketInitialized) {
      const params = {
        userId: user.id,
        conversationIds: conversationIds,
      };
      initializeSocket(params);
      setIsSocketInitialized(true)
    }
  }, [user, conversations]);

  useSocketListener("new-post");
  useSocketListener("new-message", setMessages, 'all-messages', handleMessages);
  useSocketListener("new-request");
  useSocketListener("accepted-request");
  useSocketListener("rejected-request");

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Provider
