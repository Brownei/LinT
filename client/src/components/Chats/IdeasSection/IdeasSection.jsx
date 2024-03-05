import './IdeasSection.scss'
import ayati from '../../../assets/images/ayati.svg'
import Ideas from '../../Card/Ideas'

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
    <main id='ideas-section'>
      <div className='ideas-details'>
        <div className='ideas-header'>
          <h1>Explore Ideas and collaborate</h1>
          <button type='button' onClick={() => console.log('Hello world!')}>Share your idea</button>
        </div>

        <div className='all-ideas'>
          {users.map((user, index) => (
            <div key={index}>
              <Ideas user={user}/>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default IdeasSection