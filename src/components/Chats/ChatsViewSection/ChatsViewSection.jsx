import { useParticularConversation } from '../../../hooks/use-particular-conversation'
import './ChatsViewSection.scss'
import { ClipLoader } from 'react-spinners'
import { useAllMessages } from '../../../hooks/use-messages'
import { useGlobalContext } from '../../../context/GlobalContext'

const ChatsViewSection = () => {
  const { selectedConversationId } = useGlobalContext()
  console.log(typeof selectedConversationId)
  const { data: conversation, isLoading, error } = useParticularConversation(selectedConversationId)
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(selectedConversationId)

  return (
    <main id='chats-view-section'>
      {
        isLoading || isMessagesLoading ? (
          <div className='loader-messages'>
            <ClipLoader size={30} color={'#0006B1'} />
          </div >
        ) : (
          <div className='chats-view-details'>
            {selectedConversationId !== '' ? selectedConversationId : 'Select Messages and start collabing'}
          </div>
        )
      }

    </main>
  )
}

export default ChatsViewSection
