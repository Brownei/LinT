import "./Collaborate.scss"
import Chats from "../../components/Chats/Chats";
import Ideas from "../../components/Chats/IdeasSection/IdeasSection";

const Collaborate = () => {

      return (
        <main id="collaborate-page">
          <div className="collaborate-page">

            <div className="chats-view">
              <Chats />
            </div>

            <div className="ideas-view">
              <Ideas />
            </div>

          </div>
        </main>
      )
}

export default Collaborate;