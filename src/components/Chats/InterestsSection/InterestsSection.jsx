/* eslint-disable react/prop-types */
import './InterestsSection.scss'
import { Link } from 'react-router-dom';

const InterestsSection = ({interest}) => {
    return (
        <div className='interests'>
            <div className="card">
                <div className='user'>
					<Link to={`/${interest.sender.username}`}>
						<img src={interest.sender.profileImage}></img>
					</Link>
                    <div className='not-image'>
                        <h5>{interest.sender.fullName}</h5>
                        <p>{interest.sender.occupation}</p>
                    </div> 
                </div>
                <h4>{interest.post.title}</h4>
                <p>{interest.content}</p>

                <div className='action-buttons'>
                    <button className='accept-button'>Accept</button>
                    <button className='decline-button'>Decline</button>
                </div>
            </div>
        </div>
    );
}

export default InterestsSection
