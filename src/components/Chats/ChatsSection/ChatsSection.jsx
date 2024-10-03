import './ChatsSection.scss'
import { useAuthStore } from '../../../hooks/use-auth-store'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAllMessages } from '../../../hooks/use-messages'
import { ClipLoader } from 'react-spinners'
import moment from 'moment'
import { useGlobalContext } from '../../../context/GlobalContext'
import { useEffect } from 'react'

const ChatsSection = ({ conversation, handleTap }) => {
  const user = useAuthStore((state) => state?.user)
  const location = useLocation()
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(conversation.id)
  const navigate = useNavigate()
  const image = conversation.creatorId === user.id ? conversation.recipient.profileImage : conversation.creator.profileImage
  const fullName = conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName


  function onClickHandler() {
    if (location.pathname === '/messages') {
      navigate(`/messages/${conversation.id}`)
      handleTap(conversation.id)
    } else {
      navigate(`?=chats?=conversation=${conversation.id}`)
      handleTap(conversation.id)
      //setSelectedConversationId(conversation.id)
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
              <p className='timeDate'>{moment(messages[messages.length - 1].createdAt).format('hh:mm A')}</p>
            </div>
            <p className={messages[messages.length - 1].creatorId === user.id ? 'mine-data' : 'data'}>{messages[messages.length - 1].content}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatsSection
