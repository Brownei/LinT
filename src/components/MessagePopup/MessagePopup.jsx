import { useGlobalContext } from '../../context/GlobalContext'
import './MessagePopup.scss'

const MessagePopup = ({ message }) => {
  const { user } = useGlobalContext()
  const userInfo = message.conversation.creatorId === user.id ? message.conversation.creator : message.conversation.recipient
  return (
    <div id='message-popup' key={message.id}>
      <img src={userInfo.profileImage} />
      <div className='message-popup-contents'>
        <div className='message-popup-deets'>
          <p>{userInfo.fullName}</p>
          <span>11:30 AM</span>
        </div>

        <p>{message.content}</p>
      </div>
    </div>
  )
}

export default MessagePopup
