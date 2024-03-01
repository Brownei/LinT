/* eslint-disable react/prop-types */
import './Coll.scss';

const Coll = ({collaborations, currentUser}) => {
    return (
        <div className='collabo'>
            <div className='user'>
                <img src={currentUser.image} alt={currentUser.name} />
                <div>
                    <h5>{currentUser.name}</h5>
                    <p>{currentUser.profession}</p>
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