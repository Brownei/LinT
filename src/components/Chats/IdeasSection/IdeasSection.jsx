import './IdeasSection.scss'
import ayati from '../../../assets/images/ayati.svg'
import Ideas from '../../Card/Ideas'
import { NavLink } from 'react-router-dom'

const IdeasSection = () => {
  const users = [
    {
        id: 1,
        name: "Ayati Ogochukwu",
        profession: "Product Designer",
        image: ayati,
        post: {
            title: "Shopify Ecommerce Store like Jumia",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
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

  return (
    <>
      <main id='ideas-section'>
        <div className='ideas-details'>
          <div className='ideas-header'>
            <h1>Explore Ideas and collaborate</h1>
            <NavLink className='button' to={'/collaborate/create-post'}>Share your idea</NavLink>
          </div>

          <div className='all-ideas'>
            {users.map((user) => (
              <div key={user.id}>
                <Ideas user={user}/>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  )
}

export default IdeasSection