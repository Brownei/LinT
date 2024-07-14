/* eslint-disable react/prop-types */
import './InterestsSection.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParticularInterest } from '../../../hooks/use-particular-interest';
import ModalContainer from '../../../components/Modal/ModalContainer'

const InterestsSection = ({ interest, onOpen, setOnOpen }) => {
  const { data: particularInterest, isLoading, error } = useParticularInterest(interest.id)

  console.log(particularInterest)

  return (
    <div className='interests' onClick={() => setOnOpen(true)}>
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
