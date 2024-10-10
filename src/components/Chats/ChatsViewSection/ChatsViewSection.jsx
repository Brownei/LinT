import { useParticularConversation } from '../../../hooks/use-particular-conversation'
import './ChatsViewSection.scss'
import { ClipLoader } from 'react-spinners'
import { useAllMessages } from '../../../hooks/use-messages'
import { useGlobalContext } from '../../../context/GlobalContext'
import { useAuthStore } from '../../../hooks/use-auth-store'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CloseIcon, Divider } from '@mantine/core'
import MessageInput from '../../MessageInput/MessageInput'
import moment from 'moment'
import SendingMessagePopup from '../../MessagePopup/SendingMessagePopup'
import MessagePopup from '../../MessagePopup/MessagePopup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { api } from '../../../utils/api'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useConversationStore } from '../../../hooks/use-conversations-store'

const ChatsViewSection = () => {
  const { setMessages, messages } = useGlobalContext()
  const sendingMessage = document.getElementById('main-sending-message')
  const messageEnding = document.getElementById('ending')
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const queryClient = useQueryClient()
  const user = useAuthStore((state) => state?.user)
  const location = useLocation()
  const locationSplit = location.search.split('=')
  const sendingMessageVariables = {
    id: 1,
    profileImage: user.profileImage,
    fullName: user.fullName,
  }
  const id = locationSplit[3] ? locationSplit[3] : ''
  const { register, handleSubmit, reset } = useForm({
    mode: 'onSubmit'
  })
  const conversations = useConversationStore((state) => state.conversations)
  const [sentMessages, setSentMessages] = useState([])
  const { data: allMessages, isLoading: isMessagesLoading } = useAllMessages(id)
  const conversation = id !== '' ? conversations.find((conversation) => conversation.id === id) : {}
  console.log(conversation)

  function scrollToBottom() {
    sendingMessage?.scrollIntoView({
      behavior: 'smooth'
    })
    messageEnding?.scrollIntoView({
      behavior: 'smooth'
    })
  };

  useEffect(() => {
    scrollToBottom()
  }, [messages, sendingMessageVariables])

  const sendMessageMutation = useMutation({
    mutationFn: async (inputData) => {
      setSentMessages((prev) => [...prev, inputData.message])

      await api.post(`/messages/${conversation.id}`, {
        content: inputData.message
      })
      await queryClient.cancelQueries({ queryKey: ['all-messages'] })

      setTimeout(() => {
        // When message is sent, remove it from the pending list
      }, 3000);

    },
    onSuccess: (data) => {
      console.log(data)
      setSentMessages((prev) => prev.filter((_, index) => index !== 0));
      queryClient.invalidateQueries({ queryKey: ['all-messages'] })
    },
  })

  async function onSubmit(data) {
    reset({ message: '' })
    await sendMessageMutation.mutateAsync(data)
  }

  function groupMessagesByDay(messages) {
    return messages?.reduce((groups, message) => {
      const date = moment(message?.createdAt).format('YYYY-MM-DD');
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
      return groups;
    }, {});
  };

  useEffect(() => {
    if (!isMessagesLoading) {
      setMessages(allMessages)
      scrollToBottom()
    }
  }, [allMessages]);


  return (
    <main id='chats-view-section'>
      <div className='chats-view-details'>
        {id !== '' ? (
          <div className='all-details'>
            {isMessagesLoading ? (
              <div className='loader-messages'>
                <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' />
              </div>
            ) : (
              <>
                <div className='main-header'>
                  <h1>{conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName}</h1>
                  <CloseIcon size={20} onClick={() => navigate('?=chats')} />
                </div>
                <div className='main-details'>
                  <img src={conversation.creatorId === user.id ? conversation.recipient.profileImage : conversation.creator.profileImage} />
                  <h1>{conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName}</h1>
                  <p>{conversation?.creatorId === user.id ? conversation?.creator.occupation : conversation?.recipient.occupation}</p>
                </div>
                <Divider />

                <div className='message-container'>
                  <div className='message'>
                    {Object.keys(groupMessagesByDay(messages))?.map((date, index) => (
                      <div key={index}>
                        <p className='date-container'>
                          <hr className="date-line" />
                          <span className='date'>{moment(date).format('MMMM Do YYYY')}</span>
                        </p>
                        {groupMessagesByDay(messages)[date]?.map((message) => (
                          <MessagePopup message={message} />
                        ))}
                      </div>
                    ))}
                    {sendMessageMutation.isPending && (
                      <div>
                        {sentMessages.map((message) => (
                          <SendingMessagePopup userInfo={sendingMessageVariables} message={message} />

                        ))}
                      </div>
                    )}
                    {sendMessageMutation.isError && (
                      <div style={{ color: 'red' }}>
                        {sendMessageMutation.variables}
                        <button
                          onClick={() =>
                            sendMessageMutation.mutate(sendMessageMutation.variables)
                          }
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            <div id='ending' />
            <MessageInput handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
          </div>
        ) : (
          <h1 className='no-conversation'>
            <span>Select Messages</span>
            <br />
            <span>Start Collaborating!</span>
          </h1>
        )}
      </div>


    </main>
  )
}

export default ChatsViewSection
