import { useGlobalContext } from '../../context/GlobalContext'
import moment from 'moment'
import './MessagePopup.scss'

const MessagePopup = ({ message }) => {
  const { user } = useGlobalContext()
  console.log(message)
  const userInfo = message.creatorId === user.id ? message.conversation.creator : message.conversation.recipient
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
          <span>{format(userInfo.createdAt)}</span>
        </div>

        <p>{message.content}</p>
      </div>
    </div >
  )
}

export default MessagePopup
