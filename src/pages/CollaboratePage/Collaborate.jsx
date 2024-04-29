import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import IdeasSection from "../../components/Chats/IdeasSection/IdeasSection";

const Collaborate = () => {
  return (
      <main id="collaborate-page">
        <div className="collaborate-page">
          <div className="collaborate-view">
            
            <div className="chats-view">
              <Chats />
            </div>

            <div className="ideas-view">
              <IdeasSection />
            </div>

          </div>
        </div>
      </main>
  )
}

export default Collaborate;
