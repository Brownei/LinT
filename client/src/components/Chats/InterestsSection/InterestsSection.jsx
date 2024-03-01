/* eslint-disable react/prop-types */
import './InterestsSection.scss'

const InterestsSection = ({user}) => {
    return (
        <div className='interests'>
            <div className="card">
                <div className='user'>
                    <img src={user.image}></img>
                    <div className='not-image'>
                        <h5>{user.name}</h5>
                        <p>{user.profession}</p>
                    </div> 
                </div>
                <h4>{user.post.title}</h4>
                <p>Hello brownson, I’m interested in working with you as your project is quite intriguing</p>

                <div className='action-buttons'>
                    <button className='accept-button'>Accept</button>
                    <button className='decline-button'>Decline</button>
                </div>
            </div>
        </div>
    );
}

export default InterestsSection