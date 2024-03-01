/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Ideas.scss';

const Ideas = ({user}) => {

    return (
        <Link to={'/'} className='ideas'>
            <div className="card" key={user.id}>
                <div className='user'>
                    <img src={user.image}></img>
                    <div className='not-image'>
                        <h5>{user.name}</h5>
                        <p>{user.profession}</p>
                    </div> 
                </div>
                <h4>{user.post.title}</h4>
                <p>{user.post.description}</p>
            </div>
        </Link>
    );
}
 
export default Ideas;