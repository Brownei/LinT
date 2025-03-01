/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Ideas.scss';

const Ideas = ({ post, forProfile }) => {
  return (
    <Link key={post.id} to={`/collaborate/${post.id}`} className='ideas'>
      <div className="card">
        <div className='user'>
          <Link to={`/${post.profile?.username}`}>
            <img src={post.profile?.profileImage} alt={'Profile picture'} />
          </Link>
          <div className='not-image'>
            <h5>{post.profile?.fullName}</h5>
            <p>{post.profile?.occupation}</p>
          </div>
        </div>
        <h4>{post.title}</h4>
        <p className={forProfile ? 'profile-way' : 'collaborate-way'}>{post.description}</p>
      </div>
    </Link>
  );
}

export default Ideas;
