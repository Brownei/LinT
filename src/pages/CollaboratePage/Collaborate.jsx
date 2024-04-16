import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";
import { useAllPosts } from "../../hooks/use-all-posts";
import { ClipLoader } from "react-spinners";

const Collaborate = () => {
  const {data: posts, isLoading} = useAllPosts()
  return (
      <main id="collaborate-page">
        <div className="collaborate-page">
          <div className="collaborate-view">
            
            <div className="chats-view">
              <Chats />
            </div>

            <div className="ideas-view">
              {isLoading ? (<ClipLoader />) : (
                <IdeasSection posts={posts}/>
              )}
            </div>

          </div>
        </div>
      </main>
  )
}

export default Collaborate;