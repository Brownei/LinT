import './ChatsSection.scss'
import { useCurrentUser } from '../../../hooks/use-current-user'

const ChatsSection = ({ conversation, setSelectedConversationId }) => {
  const { data: user } = useCurrentUser()
  const image = conversation.creatorId === user.profile.id ? conversation.recipient.profileImage : conversation.creator.profileImage
  const fullName = conversation.creatorId === user.profile.id ? conversation.recipient.fullName : conversation.creator.fullName
  console.log(conversation)

  return (
    <div id='chats-section' role='button' onClick={() => setSelectedConversationId(conversation.id)}>
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
