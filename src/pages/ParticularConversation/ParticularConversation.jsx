import './ParticularConversation.scss'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useParticularConversation } from '../../hooks/use-particular-conversation'
import { Icon } from '@iconify/react'
import { Divider } from '@mantine/core'
import { useAllMessages } from '../../hooks/use-messages'
import MessageInput from '../../components/MessageInput/MessageInput'
import { useForm } from 'react-hook-form'
import MessagePopup from '../../components/MessagePopup/MessagePopup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../utils/api'
import SendingMessagePopup from '../../components/MessagePopup/SendingMessagePopup'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { useAuthStore } from '../../hooks/use-auth-store'
import { useGlobalContext } from '../../context/GlobalContext'

const ParticularConversation = () => {
  const { id } = useParams()
  const user = useAuthStore((state) => state?.user)
  const [sentMessages, setSentMessages] = useState([])
  const { setMessages, messages } = useGlobalContext()
  const sendingMessage = document.getElementById('main-sending-message')
  const messageEnding = document.getElementById('ending')
  const queryClient = useQueryClient()
  const { data: conversation, isLoading, error } = useParticularConversation(id)
  const { data: allMessages, isLoading: isMessagesLoading } = useAllMessages(id)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit'
  })

  const sendingMessageVariables = {
    id: 1,
    profileImage: user.profileImage,
    fullName: user.fullName,
  }

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

      //const prev = queryClient.getQueryData(['all-messages'])
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
    if (!isMessagesLoading && allMessages) {
      setMessages(allMessages)
      scrollToBottom()
    }
  }, [isMessagesLoading, allMessages]);


  return (
    <main id='particular-conversation-page'>
      {isLoading ? (
        <div>
          <ClipLoader size={30} />
        </div>
      ) : error ? (
        <div>You might wanna refresh!</div>
      ) : (
        <div className='particular-conversation-page'>
          <button onClick={() => window.history.back()} className='back-button'>
            <span>
              <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1' />
              {conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName}
            </span>
          </button>

          <div className='content'>
            <img src={conversation.creatorId === user.id ? conversation.recipient.profileImage : conversation.creator.profileImage} />
            <h1>{conversation.creatorId === user.id ? conversation.recipient.fullName : conversation.creator.fullName}</h1>
            <p>{conversation?.creatorId === user.id ? conversation?.creator.occupation : conversation?.recipient.occupation}</p>

          </div>
          <Divider my='md' />

          <div className='message-container'>
            {isMessagesLoading ? (
              <div>
                <ClipLoader />
              </div>
            ) : (
              <div className='message'>
                {Object.keys(groupMessagesByDay(messages))?.map((date) => (
                  <div key={date}>
                    <p className='date'>{moment(date).format('MMMM Do YYYY')}</p>
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
            )}
          </div>
          <div id='ending' />
          <MessageInput handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
        </div>
      )}
    </main>
  )
}

export default ParticularConversation
