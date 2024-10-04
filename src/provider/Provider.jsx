import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext';
import { useAuthStore } from '../hooks/use-auth-store';
import { useAllConversations } from '../hooks/use-conversations';
import { initializeSocket, useSocketListener } from '../utils/socket';
import { infoToast } from '../utils/toast';

const Provider = () => {
  const navigate = useNavigate()
  const [isSocketInitialized, setIsSocketInitialized] = useState(false);
  const { setMessages, setConversations, setPosts, setInterests } = useGlobalContext()
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

  function sendToastMessage(senderName) {
    if (location.pathname === 'collaborate') {
      infoToast(`${senderName} is interested in your idea`)
    } else {
      infoToast(
        <div onClick={() => navigate('/collaborate')} style={{ cursor: 'pointer' }}>
          ${senderName} is interested in your idea
        </div>
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

  useSocketListener("new-post", setPosts, 'all-posts');
  useSocketListener("new-message", setMessages, 'all-messages', handleMessages);
  useSocketListener("new-request", setInterests, 'all-interests', sendToastMessage);
  useSocketListener("accepted-request");
  useSocketListener("rejected-request");

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Provider
