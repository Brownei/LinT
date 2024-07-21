/* eslint-disable react/prop-types */
import './Chats.scss'
import { useLocation } from 'react-router-dom'
import InterestsSection from './InterestsSection/InterestsSection'
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import ChatsSection from './ChatsSection/ChatsSection';

const Chats = ({ interests, isLoading, error, setSelectedConversationId, onOpen, setOnOpen, conversations, isConversationsLoading, conversationsError }) => {
  const location = useLocation()
  let numberOfInterest = interests?.length
  let numberOfChats = 5
  const chatsSection = location.search === '?=chats' && 'chat-chats'

  return (
    <main id='chats'>
      <div className={`chat-properties ${chatsSection}`}>
        <div className='chats-nav'>
          <div className='chats-nav-whole'>
            <Link to={'/collaborate'} className='chats-nav-single'>
              {numberOfInterest > 0 && (
                <span>{numberOfInterest}</span>
              )}
              <p>Interest</p>
            </Link>
            <span className={location.search === '' ? 'active' : ''}></span>
          </div>

          <div className='chats-nav-whole'>
            <Link to={'?=chats'} className='chats-nav-single'>
              {numberOfChats > 0 && (
                <span>{numberOfChats}</span>
              )}
              <p>Chat</p>
            </Link>
            <span className={location.search === '?=chats' ? 'active' : ''}></span>
          </div>
        </div>
        {isLoading || isConversationsLoading ? (
          <div className='loading'>
            <ClipLoader fontSize={30} />
          </div>
        ) : error || conversationsError ? (
          <div>You gotta make a little refresh</div>
        ) : (
          <div>
            {location.search === '?=chats' ? (
              <div className='chat-section'>
                <input type="text" placeholder='Search' />
                <h1>Chats</h1>
                {conversations.map((conversation) => (
                  <div key={conversation.id}>
                    <ChatsSection conversation={conversation} setSelectedConversationId={setSelectedConversationId} />
                  </div>
                ))
                }
              </div>
            ) : (
              <div className='interest-section'>
                {interests?.length > 0 ? (
                  <div className='all-interests'>
                    <span>View people interested in your Idea!!</span>
                    {interests.map((interest) => (
                      <div key={interest.id}>
                        <InterestsSection interest={interest} onOpen={onOpen} setOnOpen={setOnOpen} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='no-interests'>
                    <p>No interests yet!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default Chats
