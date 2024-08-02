import MobileHeader from '../../components/Mobile/MobileHeader/MobileHeader'
import { Icon } from '@iconify/react/dist/iconify.js'
import './MessagesPage.scss'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useAllInterests } from '../../hooks/use-all-interests';
import { useAllConversations } from "../../hooks/use-conversations";
import ChatsSection from '../../components/Chats/ChatsSection/ChatsSection'

const MessagesPage = () => {
  const { data: interests, isLoading: interestsLoading, error } = useAllInterests()
  const { data: conversations, isLoading: isConversationsLoading, error: conversationsError } = useAllConversations()
  const navigate = useNavigate()

  if (interestsLoading) {
    <div className='loader'>
      <ClipLoader />
    </div>
  }

  if (error || conversationsError) {
    <p>Error o!</p>
  }

  return (
    <main id='messages-page'>
      <div className='messages-page'>
        <button onClick={() => navigate('/collaborate')} className='back-button'>
          <span>
            <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1' />
            Ideas
          </span>
        </button>
        <MobileHeader isInterestLoading={interestsLoading} conversations={conversations} isLoading={isConversationsLoading} interests={interests} collaboratorPage={false} />

        <div className='message-content'>
          {isConversationsLoading ? (
            <div className='loader'>
              <ClipLoader size={30} />
            </div>
          ) : (
            <div className='content'>
              <h1>Start Collaborating!!!</h1>
              {conversations.map((conversation) => (
                <div key={conversation.id}>
                  <ChatsSection conversation={conversation} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default MessagesPage
