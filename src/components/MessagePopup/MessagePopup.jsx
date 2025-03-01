import { useAuthStore } from '../../hooks/use-auth-store'
import moment from 'moment'
import './MessagePopup.scss'

const MessagePopup = ({ message }) => {
  const user = useAuthStore((state) => state?.user)
  const userInfo = message.creatorId === message.conversation.creator.id ? message.conversation.creator : message.conversation.recipient
  const me = message.creatorId === user.id ? 'mine' : 'message-popup'

  function format(date) {
    return moment(date).format('hh:mm A');
  }

  return (
    <div id={`${me}`} key={message.id} >
      <img src={userInfo.profileImage} />
      <div className='message-popup-contents'>
        <div className='message-popup-deets'>
          <p>{userInfo.fullName}</p>
          <span>{format(message.createdAt)}</span>
        </div>

        <p>{message.content}</p>
      </div>
    </div >
  )
}

export default MessagePopup
