/* eslint-disable react/prop-types */
import './Chats.scss'
import { useLocation } from 'react-router-dom'
import InterestsSection from './InterestsSection/InterestsSection'
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import ChatsSection from './ChatsSection/ChatsSection';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const Chats = ({ interests, isLoading, error, onOpen, setOnOpen, conversations: allConversations, isConversationsLoading, conversationsError }) => {
  const { setConversations, conversations } = useGlobalContext()
  const location = useLocation()
  let numberOfInterest = interests?.length
  let numberOfChats = conversations?.length
  const chatsSection = location.search.startsWith('?=chats') && 'chat-chats'
  const isNotRead = conversations.filter((conversation) => conversation.read === false)

  useEffect(() => {
    if (!isConversationsLoading) {
      const initialConversations = allConversations.map((conversation) => ({
        ...conversation,
        read: false, // Default to unread (false)
      }));

      setConversations(initialConversations)
    }
  }, [isConversationsLoading]);

  const handleTap = (id) => {
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === id ? { ...conversation, read: true } : conversation
      )
    );
  };

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
              {isNotRead?.length > 0 && (
                <span>{isNotRead?.length}</span>
              )}
              <p>Chat</p>
            </Link>
            <span className={location.search.startsWith('?=chats') ? 'active' : ''}></span>
          </div>
        </div>
        {isLoading ? (
          <div className='loading'>
            <ClipLoader fontSize={30} />
          </div>
        ) : error ? (
          <div>You gotta make a little refresh</div>
        ) : (
          <div>
            {location.search.includes('?=chats') ? (
              <div className='chat-section'>
                <input type="text" placeholder='Search' />
                {isConversationsLoading ? (
                  <div>
                    <ClipLoader size={30} />
                  </div>
                ) : conversationsError ? (
                  <div>
                    You gotta refresh big boy
                  </div>
                ) :
                  <div>
                    {
                      conversations.map((conversation) => (
                        <div key={conversation.id}>
                          <ChatsSection conversation={conversation} handleTap={handleTap} />
                        </div>
                      ))
                    }
                  </div>
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
