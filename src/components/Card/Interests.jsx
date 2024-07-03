/* eslint-disable react/prop-types */
import './ProfileInterests.scss';

const ProfileInterests = ({interest}) => {
    return (
        <div className='ideas'>
            <div className="card">
                <div className='user'>
                    <img src={interest.profile?.profileImage} alt={'Profile picture'} />
                    <div className='not-image'>
                        <h5>{interest.profile?.fullName}</h5>
                        <p>{interest.profile?.occupation}</p>
                    </div> 
                </div>
                <h4>{interest.title}</h4>
                <p className={'profile-way'}>{interest.description}</p>
                <span>{interest.something}</span>
            </div>
        </div>
    );
}

export default ProfileInterests;
