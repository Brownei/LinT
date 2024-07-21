/* eslint-disable react/prop-types */
import './Coll.scss';

const Coll = ({ collaborations, currentUser, index }) => {
  return (
    <div className='collabo' key={index}>
      <div className='user'>
        <img src={currentUser.profileImage} alt={currentUser.fullName} />
        <div>
          <h5>{currentUser.fullName}</h5>
          <p>{currentUser.occupation}</p>
        </div>
      </div>
      <span>&</span>
      <div className='user'>
        <img src={collaborations.profileImage} alt={collaborations.fullName} />
        <div>
          <h5>{collaborations.fullName}</h5>
          <p>{collaborations.occupation}</p>
        </div>
      </div>
    </div>
  );
}

export default Coll;
