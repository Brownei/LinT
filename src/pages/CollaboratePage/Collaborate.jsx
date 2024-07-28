import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";
import { useAllPosts } from '../../hooks/use-all-posts'
import { useAllInterests } from '../../hooks/use-all-interests';
import { useAllConversations } from "../../hooks/use-conversations";
import { useState, useEffect } from "react";
import MobileHeader from "../../components/Mobile/MobileHeader/MobileHeader";
import MobileIdeas from "../../components/Mobile/MobileIdeas/MobileIdeas";
import { pusherClient } from "../../utils/pusherClient";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../hooks/use-current-user";
import { ClipLoader } from "react-spinners";
import ModalContainer from "../../components/Modal/ModalContainer";
import ChatsViewSection from "../../components/Chats/ChatsViewSection/ChatsViewSection";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Collaborate = () => {
  const { user, currentUserError, interestsLoading, interests, error, conversations, isConversationsLoading, conversationsError, posts, isPostsLoading, postError } = useGlobalContext()
  const location = useLocation()
  const [onOpen, setOnOpen] = useState()
  const queryClient = useQueryClient()
  const [friendRequests, setFriendRequests] = useState([])
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    if (posts) {
      setAllPosts(posts);
    }

    if (interests) {
      setFriendRequests(interests)
    }
  }, [posts, interests]);

  useEffect(() => {
    pusherClient.subscribe('posts')

    function postsHandler(data) {
      setAllPosts((prev) => [data, ...prev])
      // queryClient.refetchQueries('all-posts')
    }

    pusherClient.bind('all-posts', postsHandler)

    return () => {
      pusherClient.unsubscribe('posts')
      pusherClient.unbind('all-posts', postsHandler)
    }
  }, [posts])

  useEffect(() => {
    pusherClient.subscribe(String(user.profile.id))
    console.log("listening to ", `user:${user.profile.id}:incoming_collaborator_requests`)

    function friendRequestHandler(requests) {
      console.log(requests)
      setFriendRequests((prev) => [requests, ...prev])
    }

    pusherClient.bind('incoming_collaborator_requests', friendRequestHandler)

    return () => {
      pusherClient.unsubscribe(String(user?.profile?.id))
      pusherClient.unbind('incoming_collaborator_requests', friendRequestHandler)
    }
  }, [user?.profile?.id, interests])

  if (currentUserError) {
    window.location.assign('/')
  }

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
              {location.search === '?=chats' ? <ChatsViewSection /> : <IdeasSection error={postError} isFetching={isPostsLoading} posts={allPosts} />
              }
            </div>

          </div >
        </div >

        {/* MOBILE VIEW BABY */}
        <div className="mobile-collaborate-page" >
          <MobileHeader interests={friendRequests} collaboratorPage={true} />
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
