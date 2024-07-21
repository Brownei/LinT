import { useParticularConversation } from '../../../hooks/use-particular-conversation'
import './ChatsViewSection.scss'
import { ClipLoader } from 'react-spinners'

const ChatsViewSection = ({ selectedConversationId }) => {
  console.log(selectedConversationId)
  const { data: conversation, isLoading, error } = useParticularConversation(selectedConversationId)
  console.log(conversation)
  return (
    <main id='chats-view-section'>
      {
        isLoading ? (
          <div className='chats-view-details'>
            <ClipLoader />
          </div >
        ) : (
          <div className='chats-view-details'>
            {selectedConversationId ? selectedConversationId : 'Select Messages and start collabing'}
          </div>
        )
      }

    </main>
  )
}

export default ChatsViewSection
