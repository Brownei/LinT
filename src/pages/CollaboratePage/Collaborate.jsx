import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";
// import { useCurrentUser } from "../../hooks/use-current-user";
import { useAllPosts } from '../../hooks/use-all-posts'
import {useAllInterests} from '../../hooks/use-all-interests';

import MobileHeader from "../../components/Mobile/MobileHeader/MobileHeader";
import MobileIdeas from "../../components/Mobile/MobileIdeas/MobileIdeas";

const Collaborate = () => {
  // const {data: user} = useCurrentUser()
  const { data: interests, isLoading, error } = useAllInterests()
  const {data: posts, isFetching, error: postError} = useAllPosts()

  // console.log(user)
  return (
      <main id="collaborate-page">
        <div className="collaborate-page">
          <div className="collaborate-view">
            
            <div className="chats-view">
              <Chats error={error} interests={interests} isLoading={isLoading}/>
            </div>

            <div className="ideas-view">
              <IdeasSection error={postError} isFetching={isFetching} posts={posts}/>
            </div>

          </div>
        </div>

        {/* MOBILE VIEW BABY */}
        <div className="mobile-collaborate-page">
          <MobileHeader />
          <MobileIdeas error={postError} isFetching={isFetching} posts={posts}/>
        </div>
      </main>
  )
}

export default Collaborate;
