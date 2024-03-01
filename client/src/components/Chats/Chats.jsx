import './Chats.scss'
import { useLocation } from 'react-router-dom'
import InterestsSection from './InterestsSection/InterestsSection'
import ayati from '../../assets/images/ayati.svg'; 
import { Link } from 'react-router-dom';
// import brownson from '../../assets/images/brownson.svg'; 
// import gift from '../../assets/images/gift.svg';

const Chats = () => {
  const location = useLocation()
  let numberOfInterest = 0
  let numberOfChats = 5
  console.log(location.search)
  const users = [
    {
        id: 1,
        name: "Ayati Ogochukwu",
        profession: "Product Designer",
        image: ayati,
        post: {
            title: "Shopify Ecommerce Store like Jumia",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
    },
    {
        id: 2,
        name: "Ayati Ogochukwu",
        profession: "Product Designer",
        image: ayati,
        post: {
            title: "Shopify Ecommerce Store like Jumia",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
    },
    {
      id: 1,
      name: "Ayati Ogochukwu",
      profession: "Product Designer",
      image: ayati,
      post: {
          title: "Shopify Ecommerce Store like Jumia",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
      }
  },
  {
      id: 2,
      name: "Ayati Ogochukwu",
      profession: "Product Designer",
      image: ayati,
      post: {
          title: "Shopify Ecommerce Store like Jumia",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
      }
  },
  {
    id: 1,
    name: "Ayati Ogochukwu",
    profession: "Product Designer",
    image: ayati,
    post: {
        title: "Shopify Ecommerce Store like Jumia",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
    }
},
{
    id: 2,
    name: "Ayati Ogochukwu",
    profession: "Product Designer",
    image: ayati,
    post: {
        title: "Shopify Ecommerce Store like Jumia",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
    }
},

  ]

  return (
    <main id='chats'>
      <div className='chat-properties'>
        <div className='chats-nav'>
          <Link to={'/'} className='chats-nav-single'>
            {numberOfInterest > 0 && (
              <span>{numberOfInterest}</span>
            )}
            <p>Interests</p>
          </Link>
          <Link to={'/?=chats'} className='chats-nav-single'>
            {numberOfChats > 0 && (
              <span>{numberOfChats}</span>
            )}
            <p>Chats</p>
          </Link>
        </div>
        
        <span>View people interested in your Idea!!</span>

        {location.search === '?=chats' ? (
          <div>
            <h1>Chats</h1>
          </div>
        ) : (
        <div className='interest-section'>
          {users.length > 0 ? (
            <div className='all-interests'>
              {users.map((user, index) => (
                  <div key={index}>
                    <InterestsSection user={user}/>
                  </div>
              ))}
            </div>
          ) : (
            <div className='no-interests'>
              <p>Nobody is interested yet!</p>
            </div>
          )}
        </div>
        )}
      </div>
    </main>
  )
}

export default Chats