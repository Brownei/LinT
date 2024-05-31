import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";
import { useAllPosts } from '../../hooks/use-all-posts'
import {useAllInterests} from '../../hooks/use-all-interests';
import { useState, useEffect } from "react";
import MobileHeader from "../../components/Mobile/MobileHeader/MobileHeader";
import MobileIdeas from "../../components/Mobile/MobileIdeas/MobileIdeas";
import { pusherClient } from "../../utils/pusherClient";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../hooks/use-current-user";

const Collaborate = () => {
  const {data: user} = useCurrentUser()
  const queryClient = useQueryClient()
  const { data: interests, isLoading, error } = useAllInterests()
  const {data: posts, isFetching, error: postError} = useAllPosts()
  const [friendRequests, setFriendRequests] = useState([])
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    if (posts) {
      setAllPosts(posts);
    }

    if(interests) {
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
  }, [posts, queryClient])

  useEffect(() => {
    pusherClient.subscribe(String(user.profile.id))
    console.log("listening to ", `user:${user.profile.id}:incoming_collaborator_requests`)

    function friendRequestHandler(requests) {
      console.log(requests)
      setFriendRequests((prev) => [requests, ...prev])
    }

    pusherClient.bind('incoming_collaborator_requests', friendRequestHandler)

    return () => {
      pusherClient.unsubscribe(String(user.profile?.id))
      pusherClient.unbind('incoming_collaborator_requests', friendRequestHandler)
    }
  }, [user.profile.id])

  return (
      <main id="collaborate-page">
        <div className="collaborate-page">
          <div className="collaborate-view">
            
            <div className="chats-view">
              <Chats error={error} interests={friendRequests} isLoading={isLoading}/>
            </div>

            <div className="ideas-view">
              <IdeasSection error={postError} isFetching={isFetching} posts={allPosts}/>
            </div>

          </div>
        </div>

        {/* MOBILE VIEW BABY */}
        <div className="mobile-collaborate-page">
          <MobileHeader collaboratorPage={true}/>
          <MobileIdeas error={postError} isFetching={isFetching} posts={allPosts}/>
        </div>
      </main>
  )
}

export default Collaborate;
