/* eslint-disable react/prop-types */
import './ProfileInterest.scss';

const ProfileInterests = ({interest}) => {
    return (
        <div className='ideas'>
            <div className="card">
                <div className='user'>
                    <img src={interest.postId} alt={'Profile picture'} />
                    <div className='not-image'>
                        <h5>{interest.postId}</h5>
                        <p>{interest.postId}</p>
                    </div> 
                </div>
                <h4>{interest.content}</h4>
                <p className={'profile-way'}>{interest.id}</p>
                <span>{interest.status}</span>
            </div>
        </div>
    );
}

export default ProfileInterests;
