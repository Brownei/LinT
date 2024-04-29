/* eslint-disable react/prop-types */
import './Coll.scss';

const Coll = ({collaborations, currentUser}) => {
    return (
        <div className='collabo'>
            <div className='user'>
                <img src={currentUser.profileImage} alt={currentUser.fullName} />
                <div>
                    <h5>{currentUser.fullName}</h5>
                    <p>{currentUser.occupation}</p>
                </div>
            </div>
            <span>&</span>
            <div className='user'>
                <img src={collaborations.image} alt={collaborations.name} />
                <div>
                    <h5>{collaborations.name}</h5>
                    <p>{collaborations.profession}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Coll;
