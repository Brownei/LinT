/* eslint-disable react/prop-types */
import './CommunityCard.scss'
import { Link } from 'react-router-dom'

const CommunityCard = ({ community, randomColor, index }) => {
    
  return (
    <div>
        <Link to={`/community/${index}`} className="community_card" style={{ backgroundColor: `${randomColor}`}}>
            <img src={community?.image} alt={community?.name} />
            <h4>{community?.name}</h4>
        </Link>
    </div>
  )
}

export default CommunityCard