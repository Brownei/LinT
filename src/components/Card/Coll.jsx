/* eslint-disable react/prop-types */
import './Coll.scss';
import { Image } from '@mantine/core';

const Coll = ({collaborations, currentUser}) => {
    return (
        <div className='collabo'>
            <div className='user'>
                <Image radius={100} w={40} h={40} src={currentUser.profileImage} alt={currentUser.fullName} />
                <div>
                    <h5>{currentUser.fullName}</h5>
                    <p>{currentUser.occupation}</p>
                </div>
            </div>
            <span>&</span>
            <div className='user'>
                <Image radius={100} w={40} h={40} src={collaborations.image} alt={collaborations.name} />
                <div>
                    <h5>{collaborations.name}</h5>
                    <p>{collaborations.profession}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Coll;