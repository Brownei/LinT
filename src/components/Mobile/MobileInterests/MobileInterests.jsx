import "./MobileInterests.scss"
import { useEffect, useState } from "react"
import InterestsSection from "../../Chats/InterestsSection/InterestsSection"
import { useQueryClient } from "@tanstack/react-query"
import { Icon } from "@iconify/react"
import MobileHeader from "../MobileHeader/MobileHeader"
import { useNavigate } from "react-router-dom"
import { useAllInterests } from "../../../hooks/use-all-interests"
import { useMediaQuery } from "react-responsive";
import { useAllConversations } from "../../../hooks/use-conversations"
import { useGlobalContext } from "../../../context/GlobalContext"

const MobileInterests = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const { conversations, interests } = useGlobalContext()
  //const { data: conversations, isLoading: isConversationsLoading, error: conversationsError } = useAllConversations()
  //const { data: interests, isLoading: interestsLoading, error } = useAllInterests()
  const [friendRequests, setFriendRequests] = useState([])
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  useEffect(() => {
    if (interests) {
      setFriendRequests(interests)
    }
  }, [interests]);

  useEffect(() => {
    queryClient.invalidateQueries('all-interests')
  }, [friendRequests])

  if (!isMobile) {
    navigate('/collaborate')
  }

  return (
    <main id="mobile-interests">
      <button onClick={() => navigate('/collaborate')} className='back-button'>
        <span>
          <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1' />
          Ideas
        </span>
      </button>
      <MobileHeader conversations={conversations} interests={interests} collaboratorPage={false} />
      <div className="mobile-interests">
        {friendRequests?.length > 0 ? (
          <div className='all-mobile-interests'>
            {friendRequests?.map((interest) => (
              <div key={interest.id}>
                <InterestsSection interest={interest} />
              </div>
            ))}
          </div>
        ) : (
          <p className="no-interests">No interests yet!</p>
        )}
      </div>

    </main>
  )
}

export default MobileInterests
