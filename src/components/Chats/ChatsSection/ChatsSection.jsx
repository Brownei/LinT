import './ChatsSection.scss'
import { useAuthStore } from '../../../hooks/use-auth-store'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAllMessages } from '../../../hooks/use-messages'
import { ClipLoader } from 'react-spinners'

const ChatsSection = ({ conversation }) => {
  const user = useAuthStore((state) => state?.user)
  const location = useLocation()
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(conversation.id)
  const navigate = useNavigate()
  const image = conversation.creatorId === user.id ? conversation.recipient.profileImage : conversation.creator.profileImage
  const fullName = conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName

  function getLastMessage() {
    const index = messages?.length
    return messages[index - 1]
  }
  console.log(getLastMessage())

  function onClickHandler() {
    if (location.pathname === '/messages') {
      navigate(`/messages/${conversation.id}`)
    } else {
      setSelectedConversationId(conversation.id)
    }
  }

  return (
    <>
      {isMessagesLoading ? (
        <div className='loader'>
          <ClipLoader size={30} color={'#0006B1'} />
        </div>
      ) : (
        <div id='chats-section' role={location.pathname === '/messages' ? 'link' : 'button'} onClick={onClickHandler}>
          <img src={image} />
          <div className='details'>
            <div className='details-header'>
              <p className='fullName'>{fullName}</p>
              <p className='timeDate'>1001</p>
            </div>
            <p className='data'>Help me.....</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatsSection
