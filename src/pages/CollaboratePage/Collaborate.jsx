import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";
import { useAllPosts } from '../../hooks/use-all-posts'
import { useAllInterests } from '../../hooks/use-all-interests';
import { useAllConversations } from "../../hooks/use-conversations";
import { useState, useEffect } from "react";
import MobileHeader from "../../components/Mobile/MobileHeader/MobileHeader";
import MobileIdeas from "../../components/Mobile/MobileIdeas/MobileIdeas";
import ModalContainer from "../../components/Modal/ModalContainer";
import ChatsViewSection from "../../components/Chats/ChatsViewSection/ChatsViewSection";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { useConversationStore } from "../../hooks/use-conversations-store";

const Collaborate = () => {
  const { data: interests, isLoading: interestsLoading, error } = useAllInterests()
  const { data: allConversations, isLoading: isConversationsLoading, error: conversationsError } = useAllConversations()
  const setConversations = useConversationStore((state) => state?.setConversations)
  const conversations = useConversationStore((state) => state?.conversations)
  const { setPosts, posts: allPosts, setInterests, interests: friendRequests } = useGlobalContext()
  const { data: posts, isLoading: isPostsLoading, error: postError } = useAllPosts()
  const location = useLocation()
  const [onOpen, setOnOpen] = useState()

  useEffect(() => {
    if (!isPostsLoading) {
      setPosts(posts);
    }

    if (!interestsLoading) {
      setInterests(interests)
    }

    if (!isConversationsLoading) {
      if (conversations.length === 0) {
        const initialConversations = allConversations.map((conversation) => ({
          ...conversation,
          read: false,
        }));
        setConversations(initialConversations);
      }
    }
  }, [isPostsLoading, interestsLoading, isConversationsLoading, allConversations, conversations.length]);

  return (
    <main id="collaborate-page">
      <div className="collaborate-page">
        <div className="collaborate-section">
          <div className="collaborate-view">

            <div className="chats-view">
              <Chats
                error={error}
                interests={friendRequests}
                isLoading={interestsLoading}
                conversations={conversations}
                isConversationsLoading={isConversationsLoading}
                conversationsError={conversationsError}
                onOpen={onOpen}
                setOnOpen={setOnOpen}
              />
            </div>

            <div className="ideas-view">
              {location.search.includes('?=chats') ? <ChatsViewSection /> : <IdeasSection error={postError} isFetching={isPostsLoading} posts={allPosts} />
              }
            </div>

          </div >
        </div >

        {/* MOBILE VIEW BABY */}
        <div className="mobile-collaborate-page" >
          <MobileHeader conversations={conversations} interests={friendRequests} collaboratorPage={true} />
          <MobileIdeas error={postError} isFetching={isPostsLoading} posts={allPosts} />
        </div >
      </div >

      {onOpen &&
        <div
          className='overlay'
          role='button'
          onClick={() => setOnOpen(false)}
        />
      }

      {onOpen && (
        <ModalContainer>
          <div>
            jello
          </div>
        </ModalContainer>
      )}

    </main >
  )
}

export default Collaborate;
