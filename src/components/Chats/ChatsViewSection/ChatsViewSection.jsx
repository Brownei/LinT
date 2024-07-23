import { useParticularConversation } from '../../../hooks/use-particular-conversation'
import './ChatsViewSection.scss'
import { ClipLoader } from 'react-spinners'
import { useAllMessages } from '../../../hooks/use-messages'

const ChatsViewSection = ({ selectedConversationId }) => {
  console.log(typeof selectedConversationId)
  const { data: conversation, isLoading, error } = useParticularConversation(selectedConversationId)
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(selectedConversationId)
  console.log({ conversation, messages })
  return (
    <main id='chats-view-section'>
      {
        isLoading || isMessagesLoading ? (
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
