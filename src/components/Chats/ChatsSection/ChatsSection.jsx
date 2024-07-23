import './ChatsSection.scss'
import { useGlobalContext } from '../../../context/GlobalContext'
import { useLocation, useNavigate } from 'react-router-dom'

const ChatsSection = ({ conversation }) => {
  const { user, setSelectedConversationId } = useGlobalContext()
  const location = useLocation()
  const navigate = useNavigate()
  const image = conversation.creatorId === user.profile.id ? conversation.recipient.profileImage : conversation.creator.profileImage
  const fullName = conversation.creatorId === user.profile.id ? conversation.recipient.fullName : conversation.creator.fullName

  function onClickHandler() {
    if (location.pathname === '/messages') {
      navigate(`/messages/${conversation.id}`)
    } else {
      setSelectedConversationId(conversation.id)
    }
  }

  return (
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
  )
}

export default ChatsSection
