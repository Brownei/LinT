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
import { useEffect, useState } from 'react'
import { pusherClient } from '../../utils/pusherClient'
import { useAuthStore } from '../../hooks/use-auth-store'

const ParticularConversation = () => {
  const { id } = useParams()
  const user = useAuthStore((state) => state?.user)
  const [allMessages, setAllMessages] = useState([])
  const queryClient = useQueryClient()
  const { data: conversation, isLoading, error } = useParticularConversation(id)
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(id)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit'
  })
  const image = conversation?.creatorId === user.id ? conversation?.recipient.profileImage : conversation?.creator.profileImage
  const occupation = conversation?.creatorId === user.id ? conversation?.recipient.occupation : conversation?.creator.occupation
  const fullName = conversation?.creatorId === user.id ? conversation?.recipient.fullName : conversation?.creator.fullName

  const sendMessageMutation = useMutation({
    mutationFn: async (inputData) => {
      const { data } = await api.post(`/messages/${conversation.id}`, {
        content: inputData.message
      })

      return data.messages
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['all-messages'] }),
  })

  async function onSubmit(data) {
    reset({ message: '' })
    await sendMessageMutation.mutateAsync(data)
  }

  const sendingMessageVariables = {
    id: 1,
    profileImage: user.profileImage,
    fullName: user.fullName,
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
    if (messages) {
      setAllMessages(messages)
    }
  }, [messages]);

  useEffect(() => {
    pusherClient.subscribe(id)

    function messageHandler(message) {
      console.log(message)
      setAllMessages((prev) => [...prev, message])
    }

    pusherClient.bind('new-message', messageHandler)

    return () => {
      pusherClient.unsubscribe(id)
      pusherClient.unbind('new-message', messageHandler)
    }
  }, [])

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
              {fullName}
            </span>
          </button>

          <div className='content'>
            <img src={image} />
            <h1>{fullName}</h1>
            <p>{occupation}</p>
          </div>
          <Divider my='md' />

          <div className='message-container'>
            {isMessagesLoading ? (
              <div>
                <ClipLoader />
              </div>
            ) : (
              <div className='message'>
                {Object.keys(groupMessagesByDay(allMessages))?.map((date) => (
                  <div key={date}>
                    <p className='date'>{moment(date).format('MMMM Do YYYY')}</p>
                    {groupMessagesByDay(allMessages)[date]?.map((message) => (
                      <MessagePopup message={message} />
                    ))}
                  </div>
                ))}
                {sendMessageMutation.isPending && (
                  <SendingMessagePopup userInfo={sendingMessageVariables} content={sendMessageMutation.variables.message} />
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

          <MessageInput handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
        </div>
      )}
    </main>
  )
}

export default ParticularConversation
