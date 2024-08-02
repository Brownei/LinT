import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../hooks/use-auth-store'

const MobileChatsSection = ({ conversation }) => {
  const user = useAuthStore((state) => state?.user)
  const navigate = useNavigate()
  const image = conversation.creatorId === user.id ? conversation.recipient.profileImage : conversation.creator.profileImage
  const fullName = conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName
  console.log(conversation)

  return (
    <div id='chats-section' role='link' onClick={() => navigate(`/messages/${conversation.id}`)}>
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

export default MobileChatsSection
