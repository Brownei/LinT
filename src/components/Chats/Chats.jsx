import './Chats.scss'
import { useLocation } from 'react-router-dom'
import InterestsSection from './InterestsSection/InterestsSection'
import ayati from '../../assets/images/ayati.svg'; 
import { Link } from 'react-router-dom';
import {useAllInterests} from '../../hooks/use-all-interests';
import {ClipLoader} from 'react-spinners';

const Chats = () => {
  const location = useLocation()
	const { data: interests, isLoading, error } = useAllInterests()
  let numberOfInterest =  interests?.length
  let numberOfChats = 5
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
		  {isLoading ? (
			  <div className='loading'>
				<ClipLoader fontSize={30}/>
			  </div>
		  ) : error ? (
			<div>You gotta make a little refresh</div>
		  ) : (
			<div>
				{location.search === '?=chats' ? (
					<div className='chat-section'>
						<input type="text" placeholder='Search'/>
						<h1>Chats</h1>
					</div>
				) : (
					<div className='interest-section'>
						{interests.length > 0 ? (
							<div className='all-interests'>
								<span>View people interested in your Idea!!</span>
								{interests.map((interest) => (
									<div key={interest.id}>
										<InterestsSection interest={interest}/>
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
