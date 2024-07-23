import './ParticularConversation.scss'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context/GlobalContext'
import { useParticularConversation } from '../../hooks/use-particular-conversation'
import { Icon } from '@iconify/react'
import { Divider } from '@mantine/core'
import { useAllMessages } from '../../hooks/use-messages'
import MessageInput from '../../components/MessageInput/MessageInput'
import { useForm } from 'react-hook-form'
import MessagePopup from '../../components/MessagePopup/MessagePopup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../utils/api'

const ParticularConversation = () => {
  const { id } = useParams()
  const { user } = useGlobalContext()
  const queryClient = useQueryClient()
  const { data: conversation, isLoading, error } = useParticularConversation(id)
  const { data: messages, isLoading: isMessagesLoading } = useAllMessages(id)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit'
  })
  const image = conversation?.creatorId === user.profile.id ? conversation?.recipient.profileImage : conversation?.creator.profileImage
  const occupation = conversation?.creatorId === user.profile.id ? conversation?.recipient.occupation : conversation?.creator.occupation
  const fullName = conversation?.creatorId === user.profile.id ? conversation?.recipient.fullName : conversation?.creator.fullName

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
    console.log(data)
    await sendMessageMutation.mutateAsync(data)
    reset({ message: '' })
  }

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
                {messages.map((message) => (
                  <MessagePopup message={message} />
                ))}
                {sendMessageMutation.isPending && (
                  // <MessagePopup message={sendMessageMutation.variables} />
                  <div>
                    {JSON.stringify(sendMessageMutation.variables)}
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

          <MessageInput handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
        </div>
      )}
    </main>
  )
}

export default ParticularConversation
